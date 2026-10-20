# Anvik Studio — Web Agency Website

A premium, conversion-focused, single-page agency website built for **Anvik Studio**, engineered with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

---

## 🚀 Live Demo & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📁 Content Architecture (Easy Editing)

All editable business copy, pricing, team members, testimonials, portfolio items, and contact channels are decoupled into clean TypeScript files located in `/src/data/`:

| File | Content | What to Edit |
| --- | --- | --- |
| `src/data/site.ts` | Brand & Contact | Email, WhatsApp number, Calendly link, location, process steps, comparison table |
| `src/data/portfolio.ts` | Selected Work | Project titles, live links, challenge/solution one-liners, tech tags, screenshot paths |
| `src/data/pricing.ts` | Pricing Plans | Starter, Business, and Custom plan deliverables, timeline, INR and USD pricing |
| `src/data/services.ts` | Services Bento | 8 service cards with benefit-led descriptions for non-technical business owners |
| `src/data/team.ts` | Team Profiles | Vanshika (Project Lead), Anubhav, and Ankit bios, focus areas, and contact links |
| `src/data/testimonials.ts` | Client Reviews | Authentic testimonials from business owners in India, UK, and the US |
| `src/data/faq.ts` | FAQ Accordion | Answers regarding timelines, payment milestones (40/30/30), NDA, and time zones |
| `src/data/quote.ts` | Quote Estimator | Question options, multipliers, and feature add-on calculations |

---

## 🔑 Customizing Placeholders (TODO Checklist)

All placeholders are marked with `// TODO:` comments across the codebase for easy search:

1. **Calendly URL**: Update `calendlyUrl` in `src/data/site.ts`.
2. **WhatsApp Number**: Update `whatsapp` in `src/data/site.ts` (format: country code without `+` or spaces, e.g., `919876543210`).
3. **Contact Email**: Update `email` in `src/data/site.ts`.
4. **Team Photos**: Drop avatar photos in `/public/team/` and set `photo: "/team/yourname.jpg"` in `src/data/team.ts`. Initial-based gradients are displayed automatically when no photo is provided.
5. **Portfolio Screenshots**: Live screenshots are stored in `/public/work/`:
   - `archifit-desktop.png` & `archifit-mobile.png`
   - `bmindful-desktop.png` & `bmindful-mobile.png`
   - `ipas-desktop.png` & `ipas-mobile.png`

---

## 🎨 Design System

- **Background**: `#FAF8F5` (Warm off-white)
- **Surfaces**: `#FFFFFF` (White cards with subtle border & shadow)
- **Headings & Body**: Deep navy `#0B1220` with muted `#5B6475`
- **Accent**: Electric Indigo `#4F46E5` transitioning to Purple `#7C3AED`
- **Success / WhatsApp**: `#16A34A`
- **Typography**: `Plus Jakarta Sans` (headings) and `Inter` (body) loaded via `next/font`
- **Currency Switcher**: Real-time INR / USD toggle with persistent state across the quote estimator and pricing tiers.
- **Motion**: Subtle viewport scroll reveals, smooth screenshot hover-scroll, floating mockups, and `prefers-reduced-motion` compliance.

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy**.
6. (Optional) In project settings, assign your custom domain (e.g. `anvikstudio.com`).

---

© 2026 Anvik Studio. Built with speed, clarity, and conversion in mind.
