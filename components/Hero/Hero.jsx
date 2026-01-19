import { memo, useEffect, useState } from 'react'
import Container from '../Ui/Container'
import Button from '../Ui/Button'
import './hero.css'

const Hero = memo(function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      className="hero-section"
      aria-label="Hero section"
    >
      <div className="hero-background">
        <div 
          className="gradient-orb orb-1"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div 
          className="gradient-orb orb-2"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
        <div className="grid-overlay" />
      </div>

      <Container>
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Available for Projects</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">Crafting Digital</span>
            <span className="title-line gradient-text">Experiences That Convert</span>
          </h1>

          <p className="hero-description">
            Transforming ideas into high-performance web solutions through 
            strategic design, optimized code, and compelling storytelling. 
            Built to engage, convert, and scale.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Performance Score</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>

          <div className="hero-actions">
            <Button 
              aria-label="Get started with your project"
              className="primary-cta"
            >
              Get Started
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
                aria-hidden="true"
              >
                <path 
                  d="M7 3L14 10L7 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button 
              variant="secondary"
              aria-label="View portfolio work"
              className="secondary-cta"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
                aria-hidden="true"
              >
                <path 
                  d="M10 14L10 6M10 6L6 10M10 6L14 10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              View Work
            </Button>
          </div>

          <div className="hero-scroll-indicator">
            <div className="scroll-line" />
            <span className="scroll-text">Scroll to explore</span>
          </div>
        </div>
      </Container>

      <div className="floating-elements" aria-hidden="true">
        <div className="float-element element-1">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <rect width="60" height="60" rx="8" fill="url(#gradient1)" opacity="0.1" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="float-element element-2">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="40" fill="url(#gradient2)" opacity="0.1" />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="float-element element-3">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon points="20,5 35,35 5,35" fill="url(#gradient3)" opacity="0.1" />
            <defs>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
})

export default Hero
