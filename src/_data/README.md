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
