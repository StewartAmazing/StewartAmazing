# Quick Start Guide 🚀

Get your optimized hero section running in 5 minutes!

## Copy & Paste Solution

If you just want to get started quickly, here's what you need:

### Step 1: Copy the Files

Copy these folders to your React project:
```
components/
├── Hero/
│   ├── Hero.jsx
│   └── hero.css
└── Ui/
    ├── Container.jsx
    ├── container.css
    ├── Button.jsx
    └── button.css
```

### Step 2: Import in Your App

```jsx
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="app">
      <Hero />
      
      {/* Your other sections go here */}
      <section id="about">
        {/* About section */}
      </section>
      
      <section id="portfolio">
        {/* Portfolio section */}
      </section>
      
      <section id="contact">
        {/* Contact section */}
      </section>
    </div>
  )
}

export default App
```

### Step 3: Add Global Styles (Optional)

Add this to your main CSS file or index.css:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Step 4: Customize (3-Minute Changes)

Open `components/Hero/Hero.jsx` and change:

1. **Your Name/Brand** (Line ~29-30):
```jsx
<h1 className="hero-title">
  <span className="title-line">Your First Line</span>
  <span className="title-line gradient-text">Your Second Line</span>
</h1>
```

2. **Your Description** (Line ~33):
```jsx
<p className="hero-description">
  Your value proposition here...
</p>
```

3. **Your Stats** (Lines ~39-55):
```jsx
<div className="stat-item">
  <span className="stat-number">Your Number</span>
  <span className="stat-label">Your Label</span>
</div>
```

### Step 5: Add Button Actions

In `components/Hero/Hero.jsx`, add these handlers:

```jsx
const Hero = memo(function Hero() {
  // ... existing code ...

  const handleGetStarted = () => {
    // Option 1: Scroll to contact
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    
    // Option 2: Navigate to page
    // window.location.href = '/contact'
  }

  const handleViewWork = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section>
      {/* ... existing code ... */}
      
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

## Done! 🎉

Your hero section is now live with:
- ✅ 60fps animations
- ✅ Interactive background
- ✅ Professional design
- ✅ Mobile responsive
- ✅ Accessible (WCAG compliant)

## Common Issues

### CSS not loading?
Make sure you're importing the CSS files:
```jsx
import './components/Hero/hero.css'
```

### Buttons not styled?
Import the button CSS:
```jsx
import './components/Ui/button.css'
```

### React not found?
Install React:
```bash
npm install react react-dom
```

### Want to customize more?
Check out [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)

## Next Steps

1. **Customize Colors** - See CUSTOMIZATION_GUIDE.md
2. **Add More Sections** - Build out your portfolio
3. **Connect CTAs** - Link buttons to real actions
4. **Deploy** - Push to production!

## Need Help?

- 📖 Full docs: [HERO_OPTIMIZATION.md](HERO_OPTIMIZATION.md)
- 🔄 See changes: [BEFORE_VS_AFTER.md](BEFORE_VS_AFTER.md)
- 🎨 Customize: [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)
- 💻 Examples: [example-usage.jsx](example-usage.jsx)

---

**You're all set!** Your portfolio now has a killer hero section! 🚀
