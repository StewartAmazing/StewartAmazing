"use client"

import Navbar from "@/Components/Layout/Navbar"
import Footer from "@/Components/Layout/Footer"
import WorkCarousel from "@/Components/Sections/WorkCarousel"

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Graphic Design",
    description:
      "Visual identity system including logo, color palette, and brand assets.",
  },
  {
    id: 2,
    title: "Product Promo Video",
    category: "Video Editing",
    description:
      "Short-form cinematic promo optimized for social media engagement.",
  },
  {
    id: 3,
    title: "Landing Page UI",
    category: "UI Design",
    description:
      "High-conversion landing page designed and built with modern UI principles.",
  },
  {
    id: 4,
    title: "Story-driven Script",
    category: "Writing",
    description:
      "Narrative script crafted for brand storytelling and emotional impact.",
  },
]

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <WorkCarousel projects={projects} visibleCount={2} />
      <Footer />
    </>
  )
}
