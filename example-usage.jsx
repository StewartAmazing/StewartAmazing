/**
 * Example Usage of Optimized Hero Section
 * 
 * This file demonstrates how to integrate the optimized Hero component
 * into your portfolio/landing page application.
 */

import React from 'react'
import Hero from './components/Hero/Hero'

// Example: Simple App with Hero Section
export function SimpleApp() {
  return (
    <div className="app">
      <Hero />
      
      {/* Add your other sections below */}
      <section className="about">
        {/* About content */}
      </section>
      
      <section className="projects">
        {/* Projects content */}
      </section>
      
      <section className="contact">
        {/* Contact content */}
      </section>
    </div>
  )
}

// Example: With Custom Button Handlers
export function AppWithHandlers() {
  const handleGetStarted = () => {
    // Navigate to contact form or booking page
    console.log('Get Started clicked')
    // window.location.href = '/contact'
    // or use your router: navigate('/contact')
  }

  const handleViewWork = () => {
    // Smooth scroll to portfolio section
    console.log('View Work clicked')
    // document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* You can modify Hero component to accept handlers as props */}
      <Hero />
      
      <section id="portfolio">
        {/* Portfolio content */}
      </section>
    </div>
  )
}

// Example: Full Page Layout
export function FullPageLayout() {
  return (
    <>
      <header>
        <nav className="fixed top-0 w-full z-50">
          {/* Navigation */}
        </nav>
      </header>

      <main>
        <Hero />
        
        <section className="features">
          {/* Features section */}
        </section>
        
        <section className="testimonials">
          {/* Testimonials section */}
        </section>
        
        <section className="cta">
          {/* Call to action section */}
        </section>
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </>
  )
}

// Example: With Analytics Tracking
export function AppWithAnalytics() {
  const trackEvent = (eventName, properties) => {
    // Track with your analytics provider
    // Example: analytics.track(eventName, properties)
    console.log('Event tracked:', eventName, properties)
  }

  // You would modify Hero to accept onGetStarted and onViewWork props
  return (
    <div className="app">
      <Hero />
    </div>
  )
}

export default SimpleApp
