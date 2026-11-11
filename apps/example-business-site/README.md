# Astryx Example — Business Website

A single-page small-business website built with Astryx components, the Stone
theme, Vite and Tailwind.

- Sections: Home, Services, Work, About, Pricing, Contact.
- The contact form checks required fields, then opens WhatsApp with the message
  filled in. No server is needed.
- A floating WhatsApp button stays in the corner on every screen size.

## Run it

```bash
npm install
npm run dev
```

## Make it yours

All business details are placeholders. Edit the `BUSINESS`, `SERVICES`,
`WORK`, `STATS` and `PLANS` objects at the top of `src/App.tsx`.

To change the look, swap `@astryxdesign/theme-stone` for another theme
(for example `theme-matcha` or `theme-butter`) in `package.json`,
`src/index.css` and `src/App.tsx`.
