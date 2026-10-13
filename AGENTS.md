# Project architecture

- Keep treatment category content in `src/data/services.ts` and render category-specific pages from the URL through `CategoryPage`; a single data source keeps menu, homepage, and category listings consistent.
- Use the static Vite entry in `src/main.tsx` for page selection; this preserves the existing Netlify-compatible HTML deployment without introducing a server.
- Store supplied photographic assets as Lovable Assets pointers; the published-domain absolute URL in the hero allows local Vite previews to resolve CDN media consistently.
- Keep route-specific search metadata in `Seo`; each public page must self-reference its canonical URL.
- Keep studio values and the WhatsApp contact URL in `src/data/studio.ts`, with a shared `StudioValues` accordion on About and Centre pages; this prevents divergent copy and keeps WhatsApp as a direct external contact link without an AI or messaging backend.