# Maanik Logistics — Website

A modern, professional static website for **Maanik Logistics** — a worldwide freight and express delivery company. Built as a multi-page static site (HTML + CSS + vanilla JS) so it can be deployed cleanly to GitHub Pages, Netlify, Vercel, or any static host.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, services preview, about, stats, process, CTA |
| `about.html` | Company story, values, mission |
| `services.html` | All 6 services with deep-link anchors |
| `tracking.html` | Tracking input + demo result timeline |
| `contact.html` | Quote enquiry form + office info |
| `styles.css` | Shared design system (single stylesheet) |
| `script.js` | Mobile nav, scroll reveal, tracking demo, form handling |

## Services covered (same as m5clogs.com)

1. Air & Sea Freight
2. E-Commerce Delivery Solution
3. Overseas Warehousing & Return Management
4. Express Delivery
5. E-Commerce Export Advisory
6. Personal Baggage

## Design system

- **Colors:** Deep navy `#0B2545` (trust) + Vibrant orange `#FF6B1A` (energy)
- **Fonts:** Space Grotesk (headings) + Inter (body) — loaded from Google Fonts
- **Layout:** Responsive, mobile-first, max width 1240px
- **Icons:** Inline SVG (no external icon library)
- **Animations:** Subtle scroll-in reveals, hover transitions

## Local preview

Just open `index.html` in a browser — no build step required.

For a proper local server (recommended for testing):

```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo
2. Settings → Pages → Source: `main` branch, `/ (root)` folder
3. Save, wait ~1 minute, your site is live at `https://<username>.github.io/<repo>/`

## Placeholders you need to fill in

Before going live, replace these placeholders across all pages (search & replace):

| Placeholder | Where | What to replace with |
|---|---|---|
| `+91 (000) 000-0000` | All pages (top bar, footer, contact, CTA) | Real phone number |
| `info@maaniklogistics.com` | All pages | Real general inbox |
| `sales@maaniklogistics.com` | `contact.html` | Real sales inbox |
| `[Office address — to be provided]` | Footer + contact page | Full registered office address |
| Social media `#` links | Top bar + footer (LinkedIn, Facebook, Twitter, Instagram) | Real social profile URLs |
| `M` logo mark | Top-left brand in all pages | Replace with real logo SVG/PNG if available |
| Hero stats (200+, 120+, 99.4%) | `index.html`, `about.html` | Confirm or adjust to real numbers |
| Founding year ("Since 2023") | `about.html`, `index.html` mentions of 20+ yrs | Confirm/update |
| Operating hours | `contact.html` info card | Confirm |
| `MNK-2026-009284` | `tracking.html` placeholder + demo | Real tracking number format |

## To-do for production

- [ ] Replace text-only logo with proper logo image (`assets/logo.svg`)
- [ ] Wire the contact form to a real backend (Formspree, Netlify Forms, or your CRM)
- [ ] Wire the tracking form to your real tracking API (currently shows a demo result)
- [ ] Add a favicon (`favicon.ico` in root)
- [ ] Add Open Graph meta tags for social sharing
- [ ] Add Google Analytics / Plausible if needed
- [ ] Add legal pages: Privacy Policy, Terms of Service, Cookie notice
- [ ] Add a map embed (Google Maps iframe) on the contact page once the address is finalised
- [ ] Optimise images and add `loading="lazy"` to non-critical images

## File structure

```
maanik-logistics/
├── index.html         # Home
├── about.html         # About Us
├── services.html      # Services
├── tracking.html      # Track Shipment
├── contact.html       # Contact
├── styles.css         # Design system
├── script.js          # Interactions
├── README.md          # This file
└── assets/            # (reserved for future logo, images, etc.)
```

## License

© Maanik Logistics. All rights reserved.
