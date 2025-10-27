# sajadabvi.github.io

Personal website for Mohammadsajad Abavisani - Final-year PhD Candidate in Electrical & Computer Engineering.

## Features

- **Responsive Design**: Mobile-first approach with collapsible hamburger menu on mobile devices
- **Desktop Navigation**: Horizontal tab navigation on desktop screens (≥768px)
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: ARIA labels, keyboard navigation, and skip-to-content links
- **Fast Loading**: Optimized CSS and JavaScript for quick page loads

## Testing Locally

To test the website locally:

1. **Start a local static server** from the project root:
   ```bash
   python3 -m http.server 8000
   ```

2. **Open the site** at [http://localhost:8000](http://localhost:8000) in your browser.

3. **Test mobile view**:
   - Open Chrome DevTools (F12)
   - Click the device toolbar button (or press `Ctrl+Shift+M` / `Cmd+Shift+M`)
   - Select a mobile device or resize to < 768px width
   - The hamburger menu should appear and work smoothly

4. **Test desktop view**:
   - Resize the browser window to ≥ 768px width
   - The hamburger menu should disappear
   - Navigation links should appear horizontally in the header

5. **Stop the server** with `Ctrl+C` when finished.

## Structure

- `/styles/custom.css` - All CSS styling with mobile-first approach
- `/scripts/navigation.js` - Navigation functionality (hamburger menu toggle)
- `/index.html` - Homepage
- `/research/` - Research & publications
- `/projects/` - Project portfolio
- `/resume/` - CV and resume
- `/skills/` - Technical skills
- `/blog/` - Blog posts
- `/contact/` - Contact information
- `/media/` - Media appearances and talks
- `/photography/` - Photography portfolio
- `/teaching/` - Teaching and mentorship

## Deployment

This site is deployed on GitHub Pages. Any commits to the `main` branch will automatically update the live site.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Mohammadsajad Abavisani. All rights reserved.
