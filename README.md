# Odd Shoes - Next.js Website

A professional Next.js website for Odd Shoes, a Christian startup studio building MVPs, brands, and accelerating growth for founders who want to honour God with their business.

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **React 18** for UI components 
- **Framer Motion** for smooth animations
- **Custom CSS** with CSS Variables (keeping original branding)

## Project Structure

```
oddshoes/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── give-him-50/
│   │   └── page.tsx
│   ├── work/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (homepage)
├── components/
│   ├── FadeUp.tsx (scroll animations)
│   ├── Footer.tsx
│   └── Navigation.tsx
├── public/
├── package.json
├── tsconfig.json
└── next.config.js
```

## Features

✅ **Responsive Navigation** with mobile menu toggle  
✅ **Scroll Animations** using Intersection Observer  
✅ **Portfolio Filtering** on work page  
✅ **Testimonial Carousel** with navigation  
✅ **Contact Form** with validation and success states  
✅ **FAQ Accordion** with smooth transitions  
✅ **SEO Optimized** with metadata  
✅ **Original Branding** preserved (colors, fonts, spacing)

## Getting Started

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Works on any Node.js hosting:
- Netlify
- Railway
- Render
- AWS/Google Cloud

## Customization

### Colors & Branding

All design tokens are in `app/globals.css`:

\`\`\`css
:root {
  --coral: #e05a3a;      /* Primary accent */
  --black: #1a1a1a;      /* Text color */
  --cream: #f8f6f2;      /* Background accent */
  --serif: 'Playfair Display';
  --sans: 'DM Sans';
}
\`\`\`

### Adding Content

- **Homepage**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Work Portfolio**: Edit `app/work/page.tsx` (projects array)
- **Contact Form**: Currently submits client-side. Connect to:
  - Formspree
  - Netlify Forms
  - Custom API endpoint

### Environment Variables

Create `.env.local` for API keys:

\`\`\`
NEXT_PUBLIC_FORM_ENDPOINT=your-form-service
\`\`\`

## Original Files

The original HTML/CSS files are preserved:
- `index.html`
- `about.html`
- `work.html`
- `contact.html`
- `give-him-50.html`
- `styles.css`
- `odd-shoes-brand-system.html`

## Next Steps

1. **Add Real Images**: Replace gradient placeholders with actual project screenshots
2. **Connect Forms**: Integrate contact form with email service
3. **Add Analytics**: Google Analytics or Plausible
4. **Performance**: Optimize images, add caching
5. **CMS Integration**: Add Sanity/Contentful when needed

## License

© 2026 Odd Shoes. All rights reserved.

---

**Built with ❤️ in Kampala, Uganda**  
*A higher calling. A better startup.*
