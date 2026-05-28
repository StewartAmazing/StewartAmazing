import { ComponentProps } from "react"

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary"
}

export default function Button({ children, variant = "primary", className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition cursor-pointer btn-animate"

  const styles = {
    primary: "bg-white text-black hover:opacity-90",
    secondary: "border border-white text-white hover:bg-white hover:text-black",
  }

  return (
    <button
      className={`${base} ${styles[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  )
}
