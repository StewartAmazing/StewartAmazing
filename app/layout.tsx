import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/Components/Ui/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-project.vercel.app"),
  title: {
    default: "Stewart Futures | Design, Video, UI & Copy",
    template: "%s | Stewart Futures",
  },
  description:
    "Multidisciplinary creative crafting digital experiences that connect and convert. Specializing in UI/UX, video editing, and copywriting.",
  keywords: ["Design", "UI/UX", "Video Editing", "Copywriting", "Web Development", "Stewart Futures"],
  authors: [{ name: "Stewart Futures" }],
  creator: "Stewart Futures",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-project.vercel.app",
    title: "Stewart Futures | Design, Video, UI & Copy",
    description: "Multidisciplinary creative crafting digital experiences that connect and convert.",
    siteName: "Stewart Futures",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stewart Futures",
    description: "Multidisciplinary creative crafting digital experiences that connect and convert.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
