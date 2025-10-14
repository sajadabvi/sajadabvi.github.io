# sajadabvi.github.io

## Verifying the mobile navigation menu

1. **Start a local static server** from the project root so the exported Next.js assets load correctly:
   ```bash
   python3 -m http.server 8000
   ```
2. **Open the site** at [http://localhost:8000](http://localhost:8000) in your browser.
3. **Use your browser's device toolbar** (e.g., Chrome DevTools → Toggle device toolbar) to emulate a screen that is 900px wide or smaller. At that width the hamburger button becomes visible because the stylesheet hides `.nav-links` unless the JavaScript controller expands them.【F:styles/custom.css†L54-L95】
4. **Click the hamburger button** that appears at the top-right. The script injects this button on load and toggles the `data-open` state so the links slide open vertically.【F:scripts/navigation.js†L25-L123】
5. **Select any navigation link.** The menu should collapse automatically after navigation, thanks to the event listeners that close the panel on link clicks, outside clicks, or pressing Escape.【F:scripts/navigation.js†L101-L152】
6. **Stop the server** with `Ctrl+C` when you are finished.

If you are verifying the live GitHub Pages deployment, open the site on a phone (or in your desktop browser's mobile simulation) and repeat steps 3–5. The hamburger should appear on small screens, expand to show the links, and close itself after you make a selection.
