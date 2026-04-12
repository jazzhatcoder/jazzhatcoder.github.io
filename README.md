# Space Engineering Portfolio
## {{FULL_NAME}} — GitHub Pages Deployment Guide

---

## FILE TREE

```
portfolio/
├── index.html                  ← Homepage (all sections)
├── css/
│   └── main.css                ← Full design system
├── js/
│   └── main.js                 ← Starfield, header, scroll reveal
├── assets/
│   └── images/
│       ├── profile.jpg         ← PLACEHOLDER: Your photo
│       ├── showcase-1-thumb.jpg
│       ├── showcase-2-thumb.jpg
│       ├── showcase-3-thumb.jpg
│       └── showcase-4-thumb.jpg
└── pages/
    ├── showcase-1.html         ← ENG2003 Showcase 1 detail
    ├── showcase-2.html         ← ENG2003 Showcase 2 detail
    ├── showcase-3.html         ← ENG2003 Showcase 3 detail
    ├── showcase-4.html         ← Other course/activity Showcase 4 detail
    ├── reflection.html         ← Full reflection page
    ├── exp-research.html       ← Research experience detail
    ├── exp-internship.html     ← Internship detail
    ├── exp-club.html           ← Club/extracurricular detail
    ├── edu-degree.html         ← Degree detail
    ├── edu-courses.html        ← Coursework detail
    ├── achievement-1.html      ← Achievement 1 detail
    ├── achievement-2.html      ← Achievement 2 detail
    ├── achievement-3.html      ← Achievement 3 detail
    ├── achievement-4.html      ← Achievement 4 detail
    └── _detail-template.html  ← Reusable template (copy for new pages)
```

---

## STEP 1: REPLACE ALL PLACEHOLDERS

Search for `{{` in every file to find all placeholders. Here is the complete list:

| Placeholder          | Replace with                              | Files affected          |
|----------------------|-------------------------------------------|-------------------------|
| `{{FULL_NAME}}`      | Your full name, e.g. "Alex Kim"           | All files               |
| `{{INITIALS}}`       | Your initials, e.g. "AK"                 | All files               |
| `{{TITLE_OR_HEADLINE}}` | e.g. "Space Robotics Engineer in Training" | index.html           |
| `{{SHORT_INTRO}}`    | 2–3 sentence hero introduction            | index.html              |
| `{{ABOUT_TEXT}}`     | 1–2 paragraphs for About section          | index.html              |
| `{{PROFILE_IMAGE}}`  | Remove placeholder div, add `<img>` tag   | index.html              |
| `{{LINKEDIN_URL}}`   | https://linkedin.com/in/your-profile      | All files               |
| `{{GITHUB_URL}}`     | https://github.com/your-username          | All files               |
| `{{EMAIL}}`          | your@email.com                            | All files               |
| `{{RESUME_URL}}`     | Link to resume PDF (e.g. assets/resume.pdf) | All files             |
| `{{SHOWCASE_1}}`     | Title of ENG2003 showcase piece 1         | index.html, showcase-1  |
| `{{SHOWCASE_2}}`     | Title of ENG2003 showcase piece 2         | index.html, showcase-2  |
| `{{SHOWCASE_3}}`     | Title of ENG2003 showcase piece 3         | index.html, showcase-3  |
| `{{SHOWCASE_4}}`     | Title of other course/activity piece      | index.html, showcase-4  |
| `{{REFLECTION_QUOTE_1}}` | A memorable sentence from your reflection | reflection.html    |
| `{{REFLECTION_QUOTE_2}}` | A second meaningful sentence              | reflection.html        |

**Tip:** Use Find & Replace in VS Code (Ctrl+Shift+H) to replace globally.

---

## STEP 2: ADD YOUR PROFILE PHOTO

1. Save your photo as `assets/images/profile.jpg` (ideally square, at least 600×600px).
2. In `index.html`, find the `hero-image-placeholder` div and replace it with:
   ```html
   <img src="assets/images/profile.jpg" alt="{{FULL_NAME}}" />
   ```

---

## STEP 3: ADD SHOWCASE CONTENT

For each `pages/showcase-N.html`:
1. Fill in the four reflection questions.
2. Add a thumbnail in `assets/images/showcase-N-thumb.jpg`.
3. In `index.html`, replace the `showcase-thumb-placeholder` with:
   ```html
   <img src="assets/images/showcase-N-thumb.jpg" alt="Showcase N thumbnail" />
   ```
4. To embed a PDF: `<iframe src="../assets/showcase-N.pdf" width="100%" height="500px" style="border:none;border-radius:8px;"></iframe>`

---

## STEP 4: FILL IN EXPERIENCE, EDUCATION, ACHIEVEMENTS

- Update each `exp-*.html`, `edu-*.html`, `achievement-*.html` with real content.
- Update the corresponding cards in `index.html` to match.
- To add more items, copy `_detail-template.html` and update `index.html` links.

---

## STEP 5: DEPLOY TO GITHUB PAGES

### Option A — Root of repository (recommended for user/org site)
1. Create a GitHub repo named `your-username.github.io`.
2. Place all portfolio files in the root of the repo.
3. Push to `main` branch.
4. Site live at: `https://your-username.github.io`

### Option B — Project site (for any repo)
1. Create any GitHub repo, e.g. `portfolio`.
2. Place all portfolio files in the root.
3. Go to Settings → Pages → Source: Deploy from branch → `main` / `root`.
4. Site live at: `https://your-username.github.io/portfolio`
5. **Important:** If using a subdirectory, update all relative asset paths if needed.

### Option C — GitHub Pages from `/docs` folder
1. Move all files into a `/docs` folder in your repo.
2. Settings → Pages → Source: `main` / `docs`.

---

## CUSTOMIZATION TIPS

### Colors
Edit CSS variables in `css/main.css` under `:root {}`:
```css
--accent: #00d4ff;       /* Main cyan accent */
--accent-2: #0077ff;     /* Blue secondary */
--bg: #050810;           /* Deep space background */
```

### Fonts
The site uses Google Fonts: Syne (display), DM Mono (mono), Newsreader (body).
To change: update the `@import` at the top of `css/main.css` and the `--font-*` variables.

### Add More Sections
Copy and paste any section block in `index.html` and update IDs.
Add the new section link to the header nav.

### Add More Showcase Items
Copy a showcase card in `index.html` and a showcase detail page.
Follow the same naming convention.

---

## ACADEMIC ALIGNMENT CHECKLIST

- [x] 4 showcase pieces total (`showcase-1` through `showcase-4`)
- [x] 3 ENG2003 pieces clearly labeled (Showcase 1, 2, 3)
- [x] 1 other course/activity piece (Showcase 4)
- [x] Reflection page with two-part structure
- [x] LinkedIn visible in: hero, header, connect section, footer
- [x] Uniquely tailored to space robotics identity
- [x] Responsive and accessible
- [x] GitHub Pages compatible (static, relative paths)

---

*Generated for {{FULL_NAME}} — Space Engineering Portfolio*
