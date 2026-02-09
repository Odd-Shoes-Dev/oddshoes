# Placeholder icons - Replace with actual PNG exports

To complete the PWA setup, you'll need to export these icon sizes from the Solé mascot SVG:

## Required Icons:

1. **icon-192.png** (192x192px) - For Android home screen
2. **icon-512.png** (512x512px) - For Android splash screen
3. **apple-touch-icon.png** (180x180px) - For iOS home screen
4. **favicon.ico** (16x16 and 32x32) - For browser tabs

## How to generate:

1. Open `/public/logo.svg` in a vector editor (Figma, Illustrator, Inkscape)
2. Export at the required sizes with transparent backgrounds
3. Place the files in `/public/` directory
4. Delete this README

The manifest and meta tags are already configured to use these icons.
