const fs = require('fs');
const path = require('path');

// Check if PNG icons exist
const icon192 = path.join(__dirname, 'public', 'icon-192.png');
const icon512 = path.join(__dirname, 'public', 'icon-512.png');

if (!fs.existsSync(icon192) || !fs.existsSync(icon512)) {
  console.log('❌ PNG icons not found!');
  console.log('Please create:');
  console.log('  - public/icon-192.png');
  console.log('  - public/icon-512.png');
  console.log('');
  console.log('Run: node convert-icon.js for instructions');
  process.exit(1);
}

// Update manifest
const manifestPath = path.join(__dirname, 'public', 'site.webmanifest');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

manifest.icons = [
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
    "purpose": "any"
  }
];

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

// Update layout.tsx
const layoutPath = path.join(__dirname, 'app', 'layout.tsx');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

if (layoutContent.includes('apple-touch-icon" href="/logo.svg"')) {
  layoutContent = layoutContent.replace(
    'apple-touch-icon" href="/logo.svg"',
    'apple-touch-icon" href="/icon-192.png"'
  );
  fs.writeFileSync(layoutPath, layoutContent);
  console.log('✅ Updated app/layout.tsx');
}

console.log('✅ Updated public/site.webmanifest');
console.log('');
console.log('Your app icon is now ready!');
console.log('Test by re-adding the app to your home screen.');
