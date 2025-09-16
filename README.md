# Mister Funda - AI Foto Website

Een statische website gebouwd met Eleventy (11ty) en Tailwind CSS voor AI-fotoverbetering services.

## Features

- 🚀 **Statische Site Generator**: Eleventy (11ty) voor snelle performance
- 🎨 **Styling**: Tailwind CSS voor modern design
- 📱 **Responsive**: Volledig responsive design voor alle apparaten
- ⚡ **Interactief**: Before/after image slider en FAQ accordeon
- 🔄 **Animaties**: Smooth scrolling showcase carousel
- 🌐 **GitHub Pages**: Automatische deployment via GitHub Actions

## Tech Stack

- **Static Site Generator**: Eleventy (11ty)
- **Styling**: Tailwind CSS
- **Templates**: Nunjucks (.njk)
- **JavaScript**: Vanilla JavaScript
- **Build Tooling**: Node.js/npm
- **Hosting**: GitHub Pages set to gh-pages branch

## Development

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Dit start zowel de Tailwind CSS watcher als de Eleventy development server.

### Build for Production

```bash
npm run build
```

### Project Structure

```
/
├── .eleventy.js          # Eleventy configuratie
├── package.json          # NPM dependencies en scripts
├── tailwind.config.js    # Tailwind CSS configuratie
├── postcss.config.js     # PostCSS configuratie
├── src/
│   ├── _includes/        # Nunjucks templates
│   │   ├── base.njk      # Hoofdlayout
│   │   ├── header.njk    # Header component
│   │   └── footer.njk    # Footer component
│   ├── css/
│   │   └── style.css     # Tailwind CSS bronbestand
│   ├── js/
│   │   └── main.js       # Client-side JavaScript
│   ├── img/              # Afbeeldingen
│   └── index.njk         # Homepage content
├── _site/                # Generated output (git ignored)
└── .github/workflows/    # GitHub Actions
    └── deploy.yml        # Auto-deployment workflow
```

## Features in Detail

### Before/After Image Slider
- Interactieve slider om voor/na foto's te vergelijken
- Ondersteunt zowel muis als touch events
- Smooth animations en responsive design

### FAQ Accordeon
- Collapsible FAQ sectie
- Alleen één item kan tegelijk open zijn
- Smooth height transitions

### Infinite Scrolling Showcase
- CSS-only infinite scroll animatie
- Dubbele lijst voor seamless loop effect
- Responsive image display

### Smooth Navigation
- Anchor link navigation met smooth scrolling
- Sticky header met backdrop blur effect
- Mobile-friendly hamburger menu (ready for implementation)

## Deployment

De site wordt automatisch deployed naar GitHub Pages bij elke push naar de main branch via GitHub Actions.

### GitHub Pages Setup

1. Ga naar je repository settings
2. Klik op "Pages" in de linker sidebar
3. Onder "Source", selecteer "GitHub Actions"
4. De workflow zorgt automatisch voor de deployment

**Belangrijk**: Zorg ervoor dat GitHub Pages is geconfigureerd om GitHub Actions te gebruiken, NIET "Deploy from a branch".

Live site: https://www.domoticazaken.nl/

---
**Status**: 🔄 Fresh deployment - clearing all caches and rebuilding from scratch!

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement voor oudere browsers

## Performance

- Static HTML generation voor snelle laadtijden
- Optimized CSS met Tailwind's purging
- Minimal JavaScript footprint
- Responsive images

## Contributing

1. Fork het repository
2. Maak een feature branch
3. Commit je wijzigingen
4. Push naar de branch
5. Open een Pull Request
