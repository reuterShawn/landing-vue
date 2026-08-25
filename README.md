# Horizon Landing (Vue + Cloudflare Worker)

## Structure

```
src/
  components/
    Header.vue    ← nav + mobile menu
    Hero.vue       ← "Home" section
    About.vue
    Contact.vue    ← wired to /api/contact
    Footer.vue
  App.vue          ← assembles the sections
  main.js
worker/
  index.js         ← handles /api/contact, serves the built site otherwise
wrangler.toml       ← points Wrangler at ./dist (the Vite build output)
```

## Local development

```bash
npm install
npm run dev
```

Note: Vite's dev server won't proxy `/api/contact` to the worker. To test the
full flow locally (form → worker → Resend), build first and use Wrangler:

```bash
npm run build
wrangler dev
```

## Secrets

Set these once via Wrangler (never hardcode them):

```bash
wrangler secret put RESEND_API_KEY
wrangler secret put CONTACT_TO_EMAIL
```

## Deploy

```bash
npm run build
wrangler deploy
```
