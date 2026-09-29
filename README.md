# NovaCart Futuristic Ecommerce Landing Page

Pixel-matched HTML/CSS/JS build of the supplied NovaCart reference design (1024 x 1536).

## Run
1. Extract the ZIP.
2. Open `index.html` in a browser (double-click works; no server or internet needed).
   Optional: `npx serve .` or VS Code Live Server.

## Files
- `index.html` - page structure and all real text/content
- `style.css` - styling. Authored on a 1024px canvas: `1rem = 16 design-px` at 1024px viewport, and the page scales with the window so it matches the reference at any desktop width. Below 760px it switches to a stacked mobile layout.
- `script.js` - interactions (cart count, wishlist, tabs, AI prompts, toasts)
- `assets/img/` - photographic artwork cut from the reference (hero photo, products, phones, fashion model, robot, icons)
- `assets/fonts/` - Inter (bundled, OFL license), so no CDN is needed
- `assets/reference.png` - the reference image, for side-by-side comparison

## Notes
- Icons for the header/buttons are inline SVG. Photographic art is image files because it can't be drawn in CSS.
- The "AI PICKS" card is part of the hero photo.
