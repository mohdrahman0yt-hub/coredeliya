# Cordelia Cruises - Premium Landing Page

A high-converting, premium single-page advertising landing page for Cordelia Cruises, designed for Google Ads and Meta Ads traffic.

## Features

- **Premium Design**: Luxury aesthetic with deep navy, ocean blue, and gold accents
- **Conversion-Focused**: Strategic CTAs throughout the page for lead generation
- **Responsive**: Fully responsive design optimized for mobile, tablet, and desktop
- **Performance**: Optimized for fast loading and Core Web Vitals
- **SEO-Ready**: Proper semantic HTML, meta tags, and Open Graph metadata
- **Ads-Ready**: Structured with identifiable IDs for tracking (Google Ads, Meta Pixel)
- **Smooth Animations**: Subtle, premium animations using Framer Motion

## Tech Stack

- **React 18.3.1** - UI library
- **Vite 5.3.4** - Build tool
- **Framer Motion 11.3.19** - Animations
- **Lucide React 0.424.0** - Icons
- **Custom CSS** - No Tailwind CSS, clean custom styling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Hero.jsx & Hero.css
│   ├── EnquiryForm.jsx & EnquiryForm.css
│   ├── OfferSection.jsx & OfferSection.css
│   ├── WhyCordelia.jsx & WhyCordelia.css
│   ├── Destinations.jsx & Destinations.css
│   ├── CruiseExperience.jsx & CruiseExperience.css
│   ├── CruiseOptions.jsx & CruiseOptions.css
│   ├── TrustSection.jsx & TrustSection.css
│   ├── FAQ.jsx & FAQ.css
│   ├── FinalCTA.jsx & FinalCTA.css
│   ├── Footer.jsx & Footer.css
│   └── MobileStickyCTA.jsx & MobileStickyCTA.css
├── App.jsx
├── main.jsx
└── index.css
```

## Conversion Tracking IDs

The following IDs are available for tracking implementation:

- `#hero-cta` - Primary hero CTA button
- `#header-cta` - Header CTA button
- `#enquiry-form` - Enquiry form section
- `#enquiry-form-submit` - Form submit button
- `#destination-goa` - Goa destination card
- `#destination-lakshadweep` - Lakshadweep destination card
- `#final-cta-primary` - Final CTA primary button
- `#final-cta-secondary` - Final CTA secondary button

## Design Principles

- **Luxury Aesthetic**: Deep navy, ocean blue, white, and soft gold color palette
- **Minimal Navigation**: Compact header with essential links only
- **Strategic CTAs**: "Get Cruise Offers" and "Talk to a Cruise Expert" throughout
- **Premium Imagery**: Cinematic cruise and ocean imagery
- **Generous Whitespace**: Clean, uncluttered layout
- **Mobile-First**: Optimized for mobile conversion with sticky CTA

## Performance Optimization

- Lazy loading for images
- Minimal JavaScript dependencies
- Optimized CSS
- Responsive images
- No layout shift
- Fast first load

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo project for Cordelia Cruises.
