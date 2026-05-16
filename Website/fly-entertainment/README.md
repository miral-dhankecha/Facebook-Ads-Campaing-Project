# F.L.Y Entertainment Website

HYBE / BigHit inspired K-pop entertainment company website built with React, Tailwind CSS, and shadcn/ui components.

## Features

- 6 Pages: Home, About, Artists, Artist Detail, News, Careers, Contact
- 7 fictional ASCEND members + SKYLINE sub-unit + NOVA solo artist
- YouTube video modal viewer
- Fully responsive (mobile, tablet, laptop, desktop)
- Color palette: Black base + Orange, Aqua, Purple, Blue accents
- Custom animations (hero auto-slide, marquee ticker, etc.)

## Tech Stack

- React 19
- React Router DOM 7
- Tailwind CSS 3
- shadcn/ui components (Radix UI)
- Lucide React icons
- CRACO (Create React App Configuration Override)

## Quick Start

### Prerequisites

- Node.js 18 or higher
- Yarn (recommended) or npm

### Installation

```bash
# 1. Extract the ZIP file and enter the folder
cd fly-entertainment

# 2. Install all dependencies
yarn install
# or if you prefer npm:
npm install --legacy-peer-deps

# 3. Start the development server
yarn start
# or:
npm start
```

The website will open automatically at **http://localhost:3000**

### Build for Production

```bash
yarn build
# or:
npm run build
```

Built files will be in the `build/` folder. You can deploy these to any static host (Netlify, Vercel, GitHub Pages, etc.)

## Project Structure

```
fly-entertainment/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── ui/                # shadcn/ui components (buttons, toasts, etc.)
│   │   ├── Navbar.jsx         # Top navigation bar
│   │   ├── Footer.jsx         # Bottom footer
│   │   └── VideoModal.jsx     # YouTube MV player modal
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── About.jsx          # Company story, mission, timeline
│   │   ├── Artists.jsx        # Groups + members grid
│   │   ├── ArtistDetail.jsx   # Individual member page
│   │   ├── News.jsx           # News/press releases
│   │   ├── Careers.jsx        # Job listings
│   │   └── Contact.jsx        # Contact form
│   ├── mock/
│   │   └── mock.js            # All fake data (artists, videos, news, careers)
│   ├── hooks/
│   │   └── use-toast.js       # Toast notification hook
│   ├── lib/
│   │   └── utils.js           # Utility functions
│   ├── App.js                 # Main router
│   ├── App.css
│   ├── index.css              # Tailwind + global styles
│   └── index.js               # React entry point
├── .env                       # Environment variables
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS config
├── craco.config.js            # CRACO config (overrides CRA webpack)
└── jsconfig.json              # JavaScript project config
```

## Customization

### Change Artists / Content

Edit the arrays in `src/mock/mock.js`:
- `ARTISTS` - 7 members data (name, bio, image, color, etc.)
- `GROUPS` - ASCEND, SKYLINE, NOVA info
- `VIDEOS` - YouTube video IDs for the MV section
- `NEWS` - News articles
- `CAREERS` - Job listings
- `TIMELINE` - Company history
- `STATS` - Hero statistics

### Change Logo

Replace `LOGO_URL` at the top of `src/mock/mock.js` with a local image:
1. Drop your logo into `public/logo.jpg`
2. Change: `export const LOGO_URL = '/logo.jpg';`

### Change Color Palette

Edit `src/index.css` CSS variables:
```css
:root {
  --fly-orange: #ff6b1a;
  --fly-aqua:   #00e5e5;
  --fly-purple: #a855f7;
  --fly-blue:   #3b82f6;
}
```

### Change Videos (YouTube)

In `src/mock/mock.js`, update the `youtubeId` field with any YouTube video ID:
```js
{ youtubeId: 'YOUR_VIDEO_ID_HERE', ... }
```
The ID is the string after `v=` in a YouTube URL.

## Notes

- All data is **MOCKED** (frontend-only). There is no backend.
- Images are loaded from Unsplash and Pexels CDNs — internet connection required.
- The `.env` file has `REACT_APP_BACKEND_URL` — not used by the app but kept for future backend integration.

## Troubleshooting

**Error: "Can't resolve..." on install**
- Try `npm install --legacy-peer-deps` or use `yarn install`

**Port 3000 already in use**
- Kill the process or run: `PORT=3001 yarn start`

**Tailwind styles not applying**
- Make sure `postcss.config.js` and `tailwind.config.js` exist at the root
- Restart the dev server

## License

This is a demo / personal project. Images are from Unsplash & Pexels (free for commercial use).

---

Built with love for F.L.Y Entertainment.
