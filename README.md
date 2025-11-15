# Pink Shades Art Gallery

A premium, conversion-focused Next.js landing site for Pink Shades Art Gallery, a boutique online gallery selling original paintings.

## Features

- 🎨 **Premium Design** - Modern, feminine aesthetic with brand color palette
- 🖼️ **Artwork Showcase** - Masonry grid layout with filters and search
- 🛒 **E-commerce** - Full shopping cart with Stripe checkout integration
- 📱 **Responsive** - Mobile-first design, fully responsive
- ⚡ **Performance** - Optimized images, lazy loading, SSR
- ♿ **Accessible** - WCAG compliant, keyboard navigable
- 🎭 **Animations** - Subtle, tasteful motion with Framer Motion
- 🔍 **SEO Optimized** - Meta tags, Open Graph, structured data

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Payments**: Stripe
- **Fonts**: Geist Sans + Playfair Display
- **State Management**: React Context (Cart)
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account (for checkout)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pink-shades
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your keys:
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/              # About page
│   ├── cart/               # Shopping cart
│   ├── checkout/           # Checkout success page
│   ├── collections/        # Collections pages
│   ├── for-artists/        # Artist submission page
│   ├── shop/               # Shop and product pages
│   ├── api/                # API routes (Stripe)
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections (Hero, Collections)
│   ├── shop/               # Shop components (Cards, Modals)
│   ├── ui/                 # Reusable UI components
│   ├── Header.tsx       # Site header
│   └── Footer.tsx          # Site footer
├── lib/
│   ├── cart.tsx            # Cart context provider
│   ├── data.ts             # Example artwork data
│   └── cms-schema.md       # CMS schema documentation
└── types/
    └── index.ts            # TypeScript types
```

## Brand Colors

- **Text**: `#410012` (Deep burgundy)
- **Background**: `#ffeff2` (Soft pink)
- **Primary**: `#f75590` (Bright pink)
- **Secondary**: `#cc99a7` (Muted pink)
- **Accent**: `#c02178` (Deep magenta)

## Pages

### Homepage
- Hero section with parallax effect
- Featured collections carousel
- Call-to-action buttons

### Shop
- Masonry grid layout
- Filter by medium, price, artist
- Sort options
- Quick-view modal
- Product cards with hover effects

### Product Detail
- Large image gallery with lightbox
- Artist bio and provenance
- Add to cart functionality
- Related artworks carousel

### Collections
- Collection listing page
- Individual collection pages
- Collection-specific artwork grids

### About
- Gallery story and mission
- Newsletter signup
- Community focus

### For Artists
- Consignment information
- Artist submission form
- Opportunity details

### Cart & Checkout
- Shopping cart management
- Stripe checkout integration
- Order confirmation

## CMS Integration

The site is designed to work with any headless CMS. See `lib/cms-schema.md` for the data structure.

Currently using mock data in `lib/data.ts`. To integrate a CMS:

1. Choose a CMS (Sanity, Contentful, Strapi, etc.)
2. Set up content types matching the schema
3. Create API routes to fetch data
4. Replace `lib/data.ts` imports with CMS API calls
5. Implement caching for performance

## Stripe Setup

1. Create a Stripe account
2. Get your test API keys from the dashboard
3. Add keys to `.env.local`
4. Test checkout flow with test cards
5. Switch to live keys when ready for production

**Test Cards:**
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted (Node.js server)

## Image Optimization

- Use Next.js Image component
- Images should be optimized before upload
- Recommended: Use Cloudinary or similar CDN
- Generate multiple sizes for responsive images

## Performance

- Lazy loading for images
- Code splitting
- Server-side rendering for SEO
- Optimized fonts with `next/font`
- Minimal JavaScript bundle

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Color contrast compliance
- Alt text for images

## License

Private project - All rights reserved

## Support

For questions or issues, please contact the development team.
# pink-shades-art-gallery
