"use server"

import { z } from "zod"
import { headers } from "next/headers"

// ========== Rate Limiting ==========
interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS = 5

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    })
    return true
  }

  if (entry.count < MAX_REQUESTS) {
    entry.count++
    return true
  }

  return false
}

function getClientIdentifier(headersList: Headers): string {
  // Try to get IP from forwarded headers (for reverse proxies)
  const forwarded = headersList.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  return headersList.get("x-real-ip") || "unknown"
}

// Cleanup old entries every hour to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, RATE_LIMIT_WINDOW)

// ========== Validation Schema ==========
const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .max(254, "Email must be less than 254 characters")
    .toLowerCase(),
  subject: z
    .enum(["project", "collaboration", "general"], {
      errorMap: () => ({ message: "Invalid subject selection" }),
    }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters")
    .trim(),
  _gotcha: z.string().optional(), // Honeypot field
})

// ========== Server Action ==========
export async function submitToGoogleSheets(formData: FormData) {
  const headersList = await headers()

  // Get client identifier for rate limiting
  const clientIP = getClientIdentifier(headersList)

  // Check rate limit
  if (!checkRateLimit(clientIP)) {
    return {
      success: false,
      message: "Too many requests. Please try again later.",
    }
  }

  // Parse form data
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    _gotcha: formData.get("_gotcha"),
  }

  // Server-side validation
  const validationResult = contactSchema.safeParse(rawData)

  if (!validationResult.success) {
    // Don't expose specific validation errors to client for security
    return {
      success: false,
      message: "Invalid form data. Please check your input.",
    }
  }

  const { name, email, subject, message, _gotcha } = validationResult.data

  // Honeypot check (silent success to confuse bots)
  if (_gotcha) {
    return { success: true, message: "Message sent successfully" }
  }

  // Get Google Sheets webhook URL
  const scriptURL =
    process.env.GOOGLE_SHEETS_WEB_APP_URL ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL

  if (!scriptURL) {
    console.error(
      "GOOGLE_SHEETS_WEB_APP_URL is not configured. Set this environment variable to enable form submissions."
    )
    return {
      success: false,
      message: "Server configuration error. Please try again later.",
    }
  }

  // Submit to Google Sheets
  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      }),
    })

    const result = await response.json()

    if (result.status === "success") {
      return { success: true, message: "Message sent successfully" }
    } else {
      console.error("Google Sheets error:", result)
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      }
    }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      message: "Network error occurred. Please try again.",
    }
  }
}
