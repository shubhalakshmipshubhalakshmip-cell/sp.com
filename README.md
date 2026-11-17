# Shubha.co — Personal Portfolio Website

High-end, dark-themed personal portfolio website for **Shubhalakshmi P** (`Shubha.co`), built with **React 18 + TypeScript + Vite + Tailwind CSS** and **lucide-react**.

## 🌟 Features

- **Interactive Cursor Spotlight Reveal**: Custom dual-layer hero with canvas radial gradient masking showcasing dual portrait aesthetics upon hover and touch move.
- **Editorial Typography & Dark Theme**: Google Fonts (*Playfair Display* italic and *Inter*) combined with obsidian dark surfaces and glassmorphic navigation.
- **Centralized Data Architecture**: All resume content, experiences, projects, skills, education, and contact details reside in `src/data/portfolioData.ts` for effortless future updates.
- **Mobile Responsive**: Custom glassmorphic navigation drawer, responsive grids, and touch tracking on mobile and tablet devices.
- **Ready for GitHub & Vercel**: Includes `vercel.json` rewrites and zero-dependency build setup.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS + Custom Animations
- **Icons**: Lucide React

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start local development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 File Structure

```
├── public/
│   └── images/
│       ├── Base_image.png
│       └── Reveal_image.png
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── RevealLayer.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```
