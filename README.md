# Jagadeesh Chintalapudi — Civil Engineering Portfolio

**Civil Techy | Bridge & Infrastructure Engineer**

---

## Quick Setup

### 1. Folder Structure
```
portfolio/
├── index.html            ← Main portfolio page
├── 404.html              ← GitHub Pages error page
├── manifest.json         ← PWA manifest
├── README.md
└── assets/
    ├── css/
    │   └── style.css     ← All styles (light/dark, responsive)
    ├── js/
    │   └── main.js       ← All interactions & animations
    ├── images/
    │   ├── gallery-1.webp  ← Upload your site photos here (WebP preferred)
    │   ├── gallery-2.webp
    │   ├── gallery-3.webp
    │   ├── gallery-4.webp
    │   ├── gallery-5.webp
    │   ├── gallery-6.webp
    │   ├── icon-192.png  ← PWA icon (192×192)
    │   └── icon-512.png  ← PWA icon (512×512)
    └── resume.pdf        ← Upload your resume here
```

### 2. Add Your Photos
- Convert photos to WebP format for best performance (use https://squoosh.app)
- Name them `gallery-1.webp` through `gallery-6.webp`
- Place in `assets/images/`
- Update the `data-src` attribute in the gallery section if filenames differ

### 3. Add Your Resume
- Place your resume PDF at `assets/resume.pdf`
- The resume viewer section will automatically display it

### 4. Deploy to GitHub Pages
1. Create a GitHub repository named `your-username.github.io`
2. Upload all portfolio files
3. Go to Settings → Pages → select main branch
4. Your site will be live at `https://your-username.github.io`

### 5. Update Your Information
Search the HTML for these placeholders and update as needed:
- `jagadeeshch108@gmail.com` — your email
- `+91 79819 30587` — your phone
- LinkedIn URL — your actual LinkedIn
- YouTube, Instagram URLs
- Project descriptions — replace with your real project details

---

## Features
- ✅ Dark / Light theme toggle (persists across visits)
- ✅ Fully responsive — mobile, tablet, desktop
- ✅ Vanilla JS scroll animations (no external libraries)
- ✅ Project filtering by category
- ✅ Animated skill bars and counters
- ✅ Timeline experience section with stagger animation
- ✅ Gallery with lightbox
- ✅ FAQ accordion
- ✅ Contact form with frontend validation
- ✅ Resume viewer + download
- ✅ PWA manifest (installable on mobile)
- ✅ 404 page for GitHub Pages
- ✅ JSON-LD structured data for Google search
- ✅ Print-friendly styles
- ✅ ATS-optimised keywords in meta tags
- ✅ Reduced motion support

---

## Customisation

### Change colours
Open `assets/css/style.css` and edit the `:root` block at the top:
```css
:root {
  --primary:       #1a3a5c;  /* Main navy blue */
  --accent:        #e07b2c;  /* Amber/orange accent */
}
```

### Add more projects
Copy any `<article class="project-card">` block in `index.html` and update the `data-category` attribute to one of: `bridge`, `barrage`, `qs`, `qaqc`.

### Add blog posts
Replace the placeholder blog cards with real article links or link to your YouTube videos.

---

## Target Companies (ATS Keywords Included)
Larsen & Toubro | Afcons Infrastructure | Tata Consulting Engineers | NCC Limited | GMR Group | Shapoorji Pallonji | MEIL | KEC International | Gammon India | IRB Infrastructure

---

*Built for Jagadeesh Venkata Satya Sai Chintalapudi | Civil Techy | 2024*
