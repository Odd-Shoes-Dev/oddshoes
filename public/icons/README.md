# Odd Shoes Icon Library

A comprehensive set of SVG icons designed in a consistent coral circular style for the Odd Shoes brand.

## Design System

All icons follow these specifications:
- **ViewBox**: 100x100
- **Size**: 200x200 (scales perfectly)
- **Border**: Coral circle (r="42", stroke-width="2")
- **Color**: #e05a3a (Coral)
- **Stroke Width**: 2px (main), 2.5px (emphasis), 1.5px (details)
- **Style**: Clean line art, minimal fills

## Icon Categories

### Communication (8 icons)
- `email.svg` - Envelope icon
- `message.svg` - Chat bubble with text lines
- `phone.svg` - Mobile phone outline
- `whatsapp.svg` - WhatsApp speech bubble
- `chat.svg` - (alias for message)
- `send.svg` - Send arrow ascending
- `share.svg` - Connected nodes for sharing
- `call.svg` - (phone can be used)

### Navigation (10 icons)
- `arrow-left.svg` - Left arrow
- `arrow-right.svg` - Right arrow
- `arrow-up.svg` - Up arrow
- `arrow-down.svg` - Down arrow
- `chevron.svg` - Chevron/angle brackets
- `menu.svg` - Hamburger menu (3 lines)
- `close.svg` - X close icon
- `move.svg` - Four-way directional arrows
- `link.svg` - Chain link
- `location.svg` - Map pin

### Actions (15 icons)
- `check.svg` - Checkmark
- `checkmark-circle.svg` - Checkmark in circle
- `plus.svg` - Plus sign
- `minus.svg` - Minus sign
- `edit.svg` - Pencil/edit
- `trash.svg` - Trash bin
- `upload.svg` - Upload arrow
- `download.svg` - Download arrow
- `search.svg` - Magnifying glass
- `filter.svg` - Filter funnel
- `settings.svg` - Gear/cog
- `refresh.svg` - Refresh/reload
- `more.svg` - Three dots (vertical ellipsis)
- `target.svg` - Target/bullseye
- `shield.svg` - Shield with checkmark

### User & People (5 icons)
- `user.svg` - Single user silhouette
- `profile.svg` - User with details
- `avatar.svg` - Face/character
- `team.svg` - Multiple users
- `smile.svg` - Happy face

### Content & Files (9 icons)
- `document.svg` - Document page
- `folder.svg` - File folder
- `pdf.svg` - PDF document
- `image.svg` - Image/photo
- `book.svg` - Book
- `planner.svg` - Planner/list document
- `calendar.svg` - Calendar with dates
- `layers.svg` - Stacked layers
- `box.svg` - Box/container

### Business & Services (11 icons)
- `code.svg` - Code brackets
- `design.svg` - Palette/brush
- `web.svg` - Browser/laptop
- `mobile.svg` - Mobile device
- `brand.svg` - Brand mark/badge
- `strategy.svg` - Strategic chart
- `browser.svg` - Browser window
- `chart.svg` - Growth chart
- `dollar.svg` - Dollar sign with coin
- `rocket.svg` - Rocket launch
- `lightbulb.svg` - Idea/innovation

### Social Media (4 icons)
- `twitter-x.svg` - Twitter/X logo
- `linkedin.svg` - LinkedIn logo
- `instagram.svg` - Instagram logo
- `facebook.svg` - Facebook logo

### Symbols & Status (12 icons)
- `heart.svg` - Heart shape
- `star.svg` - Star
- `cross.svg` - Christian cross
- `gift.svg` - Gift box
- `clock.svg` - Time/clock
- `help.svg` - Question mark
- `diamond.svg` - Diamond shape
- `package.svg` - Package box
- `loader.svg` - Loading spinner
- `global.svg` - Globe/world
- `lock.svg` - (shield can be used)
- `mail.svg` - (alias for email)

## Usage in Next.js

### As Image
```jsx
import Image from 'next/image'

<Image 
  src="/icons/calendar.svg" 
  alt="Calendar" 
  width={24} 
  height={24} 
/>
```

### As Background
```jsx
<div style={{
  backgroundImage: 'url(/icons/rocket.svg)',
  width: '48px',
  height: '48px'
}} />
```

### Inline SVG (for color changes)
```jsx
// Import the SVG content and use dangerouslySetInnerHTML
// or use a component library like @svgr/webpack
```

## Customization

To customize an icon:
1. Maintain the circular border: `<circle cx="50" cy="50" r="42" stroke="#e05a3a" stroke-width="2"/>`
2. Keep the 100x100 viewBox
3. Use stroke="#e05a3a" for all paths
4. Use fill="#e05a3a" sparingly for emphasis (dots, small elements)
5. Use fill-opacity="0.15" for subtle backgrounds

## Brand Guidelines

These icons are designed to complement the Odd Shoes brand:
- **Coral**: #e05a3a (Primary accent)
- **Black**: #1a1a1a (Text)
- **Cream**: #f8f6f2 (Background)
- **Serif**: Playfair Display (Headings)
- **Sans**: DM Sans (Body)

## Total Icons: 70+

All icons are optimized for web use and scale perfectly at any size.
