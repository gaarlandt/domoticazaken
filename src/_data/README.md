# Image Configuration

This folder contains centralized image configurations for the website.

## How to Update Images

To change any image on the website, you only need to edit the `images.json` file:

### 1. Showcase Section (scrolling images)
Edit the `showcase` array:
```json
"showcase": [
  {
    "src": "/images/your-new-image.jpg",
    "alt": "Description of your image"
  }
]
```

### 2. Before/After Slider
Edit the `slider` object:
```json
"slider": {
  "before": "/slider-images/before.jpeg",
  "after": "/slider-images/After.jpg"
}
```

### 3. Services Section
Edit the `services` array:
```json
"services": [
  {
    "src": "/images/your-service-image.jpg",
    "alt": "Alt text for accessibility",
    "title": "Service Title",
    "description": "Description text that appears below the title"
  }
]
```

## Adding New Images

1. Upload your new image to either:
   - `src/images/` (for general images)
   - `src/slider-images/` (for before/after slider images)

2. Update the corresponding entry in `images.json`

3. Build and deploy: `npm run build`

That's it! All references throughout the website will automatically update.

## How to Update Links

All external links are controlled from `links.json`:

### 1. Main CTA Buttons
Edit the `cta.main` object:
```json
"cta": {
  "main": {
    "url": "https://your-new-url.com",
    "text": "Your Button Text",
    "target": "_blank"
  }
}
```

### 2. Pricing Plan Links
Edit the `pricing` section:
```json
"pricing": {
  "starter": { "url": "https://...", "text": "Begin Nu" },
  "business": { "url": "https://...", "text": "Begin Nu" },
  "premium": { "url": "https://...", "text": "Begin Nu" }
}
```

### 3. Footer & Other External Links
Edit the `external` section:
```json
"external": {
  "helpdesk": {
    "url": "https://support.yoursite.com",
    "text": "Customer Support"
  }
}
```

## Benefits

- **Single source of truth** for all external links
- **Easy URL updates** - change once, updates everywhere
- **Consistent link behavior** (target, text, etc.)
- **Easy A/B testing** - just change the URL in one place
