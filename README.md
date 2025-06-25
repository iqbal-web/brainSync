# 📘 React Article Sharing App

A lightweight React application that allows users to create, filter, and browse shared articles. It features rich text editing with TinyMCE and browser-based local storage for persistence.

---

## 🚀 Features

- 📝 Create articles with:
  - Title
  - Author
  - University
  - Tag (Department)
  - Summary using **TinyMCE**
- 💾 Articles are saved in **localStorage**
- 🔎 Filter by:
  - Project Title (search)
  - Tag / Department (dropdown)
- 📄 Articles persist across browser reloads

---

## 🗂️ Project Structure

```html
my-article-app/
├── public/
├── src/
│ ├── assets/
│ │ └── scss/
│ │ ├── home.scss
│ │ └── search-filters.scss
│ ├── components/
│ │ └── SearchFilters.js
│ ├── pages/
│ │ ├── Home.js
│ │ └── Share.js
│ ├── App.js
│ └── index.js
├── package.json
└── README.md
```

---

## 🔧 Usage
Navigate to /share to create a new article.

- Articles will be saved locally in your browser.
- Navigate to / (Home page) to:
- View all articles
- Filter articles by title or department


## 🔐 TinyMCE Setup

- The app uses a free TinyMCE API key.
- You can get your own from: https://www.tiny.cloud/
- Replace the default key in Share.js:

```html
<Editor
  apiKey="your-own-api-key"
/>
```

## 📌 Notes

- This is a front-end-only project.
- All data is stored in the user's browser.
- Ideal for prototypes, portfolio projects, or internal tools.

## 🛠 Technologies Used

- React (CRA)
- SCSS
- TinyMCE React Editor
- JavaScript (ES6)
- localStorage API

---
