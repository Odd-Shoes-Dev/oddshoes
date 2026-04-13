# PWA Setup Guide

Your web app is now configured as a Progressive Web App (PWA) with the following features:

## Current Configuration

✅ **Manifest File**: `/public/site.webmanifest`
- Uses your logo.svg as the app icon
- Configured with app shortcuts (Planner, Contact, Work)
- Theme color: #e05a3a (coral)
- Display mode: standalone

✅ **Meta Tags**: Added in `app/layout.tsx`
- Apple mobile web app support
- Mobile web app capability
- Theme color for status bar

## How Users Install

### On Mobile (iOS/Android):
1. Open the website in Safari (iOS) or Chrome (Android)
2. Tap the share/menu button
3. Select "Add to Home Screen"
4. The app will appear on their home screen with your logo

### On Desktop (Chrome/Edge):
1. Look for the install icon in the address bar
2. Click "Install Odd Shoes"
3. The app will open in its own window

## Optional: Generate PNG Icons for Better Compatibility

While SVG works great, some older devices prefer PNG icons. To generate them:

### Option 1: Online Tool
1. Go to https://favicon.io/favicon-converter/
2. Upload your `/public/logo.svg`
3. Download the generated icons
4. Save as `/public/icon-192.png` and `/public/icon-512.png`
5. Update manifest to include PNG icons

### Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first, then:
magick logo.svg -resize 192x192 icon-192.png
magick logo.svg -resize 512x512 icon-512.png
```

Then update `/public/site.webmanifest` icons array:
```json
"icons": [
  {
    "src": "/icon-192.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "any maskable"
  },
  {
    "src": "/icon-512.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "any maskable"
  },
  {
    "src": "/logo.svg",
    "sizes": "any",
    "type": "image/svg+xml",
    "purpose": "any maskable"
  }
]
```

## Testing Your PWA

1. **Chrome DevTools**: Open DevTools > Application tab > Manifest
2. **Lighthouse**: Run PWA audit in DevTools > Lighthouse
3. **Mobile Testing**: Test on actual devices for install flow

## Future Enhancements (Optional)

- Add service worker for offline support using `next-pwa`
- Add push notifications
- Add background sync
- Cache static assets for offline viewing

---

Your PWA is ready to use! Users can now install Odd Shoes directly to their devices. 🎉
