# Customization Guide 🎨

This guide will help you customize the optimized Hero section to match your brand and needs.

## Quick Customization

### 1. Change Colors & Gradients

#### Primary Gradient (Purple → Pink → Red)
**File**: `components/Hero/hero.css`

```css
/* Change the main gradient text */
.gradient-text {
  background: linear-gradient(135deg, 
    #8B5CF6 0%,    /* Purple - Change this */
    #EC4899 50%,   /* Pink - Change this */
    #EF4444 100%   /* Red - Change this */
  );
}

/* Change button gradient */
.primary-cta {
  background: linear-gradient(135deg, 
    #8B5CF6 0%,    /* Your primary color */
    #EC4899 100%   /* Your accent color */
  );
}

/* Change orb colors */
.orb-1 {
  background: radial-gradient(circle, 
    rgba(139, 92, 246, 0.4) 0%,  /* Change RGBA values */
    rgba(139, 92, 246, 0) 70%
  );
}

.orb-2 {
  background: radial-gradient(circle, 
    rgba(236, 72, 153, 0.3) 0%,  /* Change RGBA values */
    rgba(236, 72, 153, 0) 70%
  );
}
```

#### Example: Blue → Cyan → Teal Theme
```css
.gradient-text {
  background: linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #14B8A6 100%);
}

.primary-cta {
  background: linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%);
}

.orb-1 {
  background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
}

.orb-2 {
  background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
}
```

---

### 2. Update Copy & Messaging

**File**: `components/Hero/Hero.jsx`

```jsx
{/* Badge - Update availability status */}
<div className="hero-badge">
  <span className="badge-dot" />
  <span>Available for Projects</span>  {/* Change this */}
</div>

{/* Headline - Your main message */}
<h1 className="hero-title">
  <span className="title-line">Crafting Digital</span>  {/* Line 1 */}
  <span className="title-line gradient-text">Experiences That Convert</span>  {/* Line 2 */}
</h1>

{/* Description - Your value proposition */}
<p className="hero-description">
  Transforming ideas into high-performance web solutions...  {/* Update this */}
</p>
```

#### Example: For a Designer
```jsx
<h1 className="hero-title">
  <span className="title-line">Designing Beautiful</span>
  <span className="title-line gradient-text">Brands That Inspire</span>
</h1>

<p className="hero-description">
  Creating memorable brand identities and stunning visual experiences
  that connect with your audience and elevate your business.
</p>
```

#### Example: For a Developer
```jsx
<h1 className="hero-title">
  <span className="title-line">Building Scalable</span>
  <span className="title-line gradient-text">Solutions That Perform</span>
</h1>

<p className="hero-description">
  Architecting robust, high-performance applications with modern
  technologies. From concept to deployment, I deliver excellence.
</p>
```

---

### 3. Update Stats Section

**File**: `components/Hero/Hero.jsx`

```jsx
<div className="hero-stats">
  <div className="stat-item">
    <span className="stat-number">98%</span>     {/* Your metric */}
    <span className="stat-label">Performance Score</span>  {/* Label */}
  </div>
  <div className="stat-divider" />
  <div className="stat-item">
    <span className="stat-number">50+</span>     {/* Your number */}
    <span className="stat-label">Projects Delivered</span>
  </div>
  <div className="stat-divider" />
  <div className="stat-item">
    <span className="stat-number">24/7</span>    {/* Your availability */}
    <span className="stat-label">Support Available</span>
  </div>
</div>
```

#### Example Stats Ideas:
```jsx
// For freelancers
<span className="stat-number">5⭐</span>
<span className="stat-label">Client Rating</span>

// For agencies
<span className="stat-number">$2M+</span>
<span className="stat-label">Revenue Generated</span>

// For developers
<span className="stat-number">100K+</span>
<span className="stat-label">Lines of Code</span>

// For designers
<span className="stat-number">200+</span>
<span className="stat-label">Designs Created</span>

// For consultants
<span className="stat-number">10+</span>
<span className="stat-label">Years Experience</span>
```

---

### 4. Customize CTAs

**File**: `components/Hero/Hero.jsx`

```jsx
<Button aria-label="Get started with your project" className="primary-cta">
  Get Started  {/* Change button text */}
  <svg>...</svg>
</Button>

<Button variant="secondary" aria-label="View portfolio work" className="secondary-cta">
  <svg>...</svg>
  View Work  {/* Change button text */}
</Button>
```

#### Example CTA Variations:

**For Booking/Consultation:**
```jsx
<Button>Book a Call</Button>
<Button variant="secondary">View Pricing</Button>
```

**For Services:**
```jsx
<Button>Start Your Project</Button>
<Button variant="secondary">Explore Services</Button>
```

**For Products:**
```jsx
<Button>Try for Free</Button>
<Button variant="secondary">See Demo</Button>
```

**For Portfolio:**
```jsx
<Button>Hire Me</Button>
<Button variant="secondary">View Portfolio</Button>
```

---

### 5. Add Button Functionality

**File**: `components/Hero/Hero.jsx`

```jsx
// Import navigation hook (if using React Router)
import { useNavigate } from 'react-router-dom'

const Hero = memo(function Hero() {
  // const navigate = useNavigate()  // For React Router
  
  const handleGetStarted = () => {
    // Option 1: Navigate to another page
    // navigate('/contact')
    
    // Option 2: Open modal
    // openContactModal()
    
    // Option 3: Smooth scroll to section
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
    
    // Option 4: External link
    // window.open('https://calendly.com/your-link', '_blank')
  }

  const handleViewWork = () => {
    // Scroll to portfolio section
    document.getElementById('portfolio')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section>
      {/* ... */}
      <Button onClick={handleGetStarted}>
        Get Started
      </Button>
      <Button variant="secondary" onClick={handleViewWork}>
        View Work
      </Button>
    </section>
  )
})
```

---

### 6. Adjust Typography

**File**: `components/Hero/hero.css`

```css
/* Headline size - Uses clamp for fluid typography */
.hero-title {
  font-size: clamp(
    2.5rem,    /* Minimum size (mobile) - Adjust this */
    8vw,       /* Preferred size (scales) */
    4.5rem     /* Maximum size (desktop) - Adjust this */
  );
}

/* Description size */
.hero-description {
  font-size: clamp(
    1rem,      /* Minimum - Adjust this */
    2.5vw,     /* Preferred */
    1.25rem    /* Maximum - Adjust this */
  );
}

/* Change font family (add to .hero-section) */
.hero-section {
  font-family: 'Inter', sans-serif;  /* Change this */
}
```

---

### 7. Modify Animations

**File**: `components/Hero/hero.css`

#### Speed up/slow down animations
```css
/* Orb pulse animation */
@keyframes pulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.gradient-orb {
  animation: pulse 8s ease-in-out infinite;  /* Change 8s to 4s for faster */
}

/* Floating elements */
.float-element {
  animation: float 20s ease-in-out infinite;  /* Change 20s */
}

/* Gradient shift */
.gradient-text {
  animation: gradientShift 8s ease infinite;  /* Change 8s */
}
```

#### Disable animations
```css
/* Remove all animations */
.hero-section * {
  animation: none !important;
  transition: none !important;
}
```

---

### 8. Adjust Responsive Breakpoints

**File**: `components/Hero/hero.css`

```css
/* Current breakpoints */
@media (max-width: 768px) {
  /* Tablet styles */
}

@media (max-width: 480px) {
  /* Mobile styles */
}

/* Add custom breakpoints */
@media (max-width: 1024px) {
  /* Your custom styles */
}
```

---

### 9. Change Background Style

**File**: `components/Hero/hero.css`

#### Solid Color Background
```css
.hero-section {
  background: #0a0a0a;  /* Dark gray instead of black */
}
```

#### Gradient Background
```css
.hero-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}
```

#### Remove Orbs (Simpler Design)
```css
.gradient-orb {
  display: none;
}
```

#### Remove Grid Overlay
```css
.grid-overlay {
  display: none;
}
```

---

### 10. Disable Mouse Tracking (Performance)

**File**: `components/Hero/Hero.jsx`

```jsx
const Hero = memo(function Hero() {
  // Comment out or remove mouse tracking
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // useEffect(() => {
  //   const handleMouseMove = (e) => { ... }
  //   window.addEventListener('mousemove', handleMouseMove)
  //   ...
  // }, [])
  
  return (
    <section>
      {/* Update orbs to not use mouse position */}
      <div className="gradient-orb orb-1" />  {/* Remove style prop */}
      <div className="gradient-orb orb-2" />  {/* Remove style prop */}
    </section>
  )
})
```

---

## Advanced Customizations

### Add More Stats
```jsx
<div className="hero-stats">
  {/* Add as many as you want */}
  <div className="stat-item">
    <span className="stat-number">4th</span>
    <span className="stat-label">Stat Item</span>
  </div>
  <div className="stat-divider" />
  {/* ... */}
</div>
```

### Add Social Proof
```jsx
{/* After stats section */}
<div className="social-proof">
  <p>Trusted by companies like:</p>
  <div className="company-logos">
    <img src="/logo1.svg" alt="Company 1" />
    <img src="/logo2.svg" alt="Company 2" />
  </div>
</div>
```

### Add Third CTA
```jsx
<div className="hero-actions">
  <Button>Get Started</Button>
  <Button variant="secondary">View Work</Button>
  <Button variant="tertiary">Learn More</Button>  {/* Add this */}
</div>
```

---

## Tips for Best Results

1. **Keep it Simple**: Don't overcomplicate the message
2. **Test on Mobile**: Always check mobile experience
3. **A/B Test Headlines**: Try different copy variations
4. **Use Real Stats**: Update numbers with actual metrics
5. **Match Brand**: Customize colors to match your brand
6. **Fast Load**: Keep animations smooth and performant
7. **Clear CTAs**: Make it obvious what action to take
8. **Professional Copy**: Proofread all text carefully

---

## Need Help?

If you need help with customization:

1. Check the code comments in the files
2. Review the HERO_OPTIMIZATION.md file
3. Test changes in a development environment first
4. Use browser DevTools to debug CSS issues

Happy customizing! 🚀
