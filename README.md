# Soeun Chantha — Portfolio

A responsive portfolio built with semantic HTML, modular CSS and vanilla JavaScript ES modules. No framework or build step is required.

## Run locally

Because JavaScript uses ES modules, run the project through a local web server rather than opening `index.html` directly. In VS Code, use the Live Server extension, or run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

```text
.
├── index.html
├── README.md
├── Achievement/                 # Certificate and activity images
├── assets/
│   └── images/                  # Profile image and other shared assets
├── css/
│   ├── main.css                 # CSS entry point
│   ├── base/
│   │   ├── reset.css
│   │   └── variables.css
│   ├── components/
│   │   ├── buttons.css
│   │   └── cards.css
│   ├── sections/
│   │   ├── hero.css
│   │   └── content.css
│   ├── layout.css
│   └── responsive.css
└── js/
    ├── main.js                  # JavaScript entry point
    └── modules/
        ├── navigation.js
        └── footer.js
```

## Page sections

1. About Me
2. Technical Skills
3. Student Management System
4. Web Development Project
5. Database Design Project
6. Education & Certificates
7. Work Experience
8. Contact Information

The landing/hero introduction sits above the eight requested content sections.

## Publish with GitHub Pages

1. Upload the **contents** of this folder to the root of your GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Before publishing

- Confirm the email, phone number, LinkedIn URL and all dates.
- Check that each certificate image and title match the original certificate.
- Add genuine screenshots (for example, the Student Management System UI and database ERD) when available.
- Replace the general GitHub profile link with direct repository links only when those repositories are public and ready.
- Keep project descriptions accurate to the work you personally completed. The Web Development and Database Design sections currently describe portfolio and academic practice work, not separate deployed products.
