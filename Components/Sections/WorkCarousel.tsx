"use client"

import { useState } from "react"
import Container from "@/Components/Ui/Container"

interface Project {
  id: number
  title: string
  category: string
  description: string
  image?: string
}

interface WorkCarouselProps {
  projects: Project[]
  visibleCount?: number
}

export default function WorkCarousel({
  projects,
  visibleCount = 2,
}: WorkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, projects.length - visibleCount) : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= projects.length - visibleCount ? 0 : prev + 1
    )
  }

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + visibleCount
  )

  return (
    <section className="py-32 bg-black text-white">
      <Container>
        <header className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Selected Work
          </h1>
          <p className="text-gray-400">
            A curated selection of projects across design, video, writing,
            and UI.
          </p>
        </header>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
              }}
            >
              {visibleProjects.map((project) => (
                <article
                  key={project.id}
                  className="group border border-white/10 rounded-lg overflow-hidden bg-black/20 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                >
                  {/* Image Container */}
                  <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🎨</div>
                          <p className="text-gray-500 text-sm">
                            Project Image
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">
                      {project.category}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevious}
              aria-label="Previous projects"
              className="p-3 rounded-lg border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Progress Indicator */}
            <div className="flex-1 mx-4">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                  style={{
                    width: `${((currentIndex + visibleCount) / projects.length) * 100}%`,
                  }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                {currentIndex + 1} – {Math.min(currentIndex + visibleCount, projects.length)} of{" "}
                {projects.length}
              </p>
            </div>

            <button
              onClick={handleNext}
              aria-label="Next projects"
              className="p-3 rounded-lg border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
