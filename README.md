# Portfolio Project Structure

## Overview
My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Directory Structure

portfolio/
├── public/               # Static files
│   ├── images/
│   │   └── headshot.JPG
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── features/   # Feature-specific components
│   │   │   ├── Hero.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── SkillsGrid.tsx
│   │   │   └── SocialLinks.tsx
│   │   └── shared/    # Shared/common components
│   │       ├── Button.tsx
│   │       ├── ContactForm.tsx
│   │       ├── Footer.tsx
│   │       └── Navigation.tsx
│   ├── hooks/         # Custom React hooks
│   │   ├── useForm.ts
│   │   ├── useProjects.ts
│   │   ├── useScrollPosition.ts
│   │   └── useWindowSize.ts
│   ├── layouts/       # Page layouts
│   │   └── MainLayout.tsx
│   ├── pages/         # Next.js pages
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   ├── styles/        # CSS styles
│   │   ├── animations.css
│   │   └── globals.css
│   ├── types/         # TypeScript type definitions
│   │   ├── contact.types.ts
│   │   ├── index.d.ts
│   │   ├── project.types.ts
│   │   └── skills.types.ts
│   └── utils/         # Utility functions
│       ├── constants.ts
│       ├── formatterHelper.ts
│       ├── helpers.ts
│       └── validation.ts
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json

## Key Directories and Files

### `/public`
Contains static assets that are served directly. Images, icons, and metadata files are stored here.

### `/src/components`
React components organized into:
- `features/`: Larger, feature-specific components
- `shared/`: Reusable UI components used across multiple features

### `/src/hooks`
Custom React hooks for handling:
- Form state and validation
- Project data management
- Scroll position tracking
- Window size responsiveness

### `/src/layouts`
Page layout templates used to maintain consistent structure across pages.

### `/src/pages`
Next.js pages that define the routes and main views of the application.

### `/src/styles`
CSS stylesheets:
- `animations.css`: Animation keyframes and classes
- `globals.css`: Global styles and Tailwind imports

### `/src/types`
TypeScript type definitions for:
- Contact form data
- Project information
- Skills categories
- Global type declarations

### `/src/utils`
Utility functions and constants:
- Data formatting helpers
- Form validation
- Common helper functions
- Application constants

## Configuration Files
- `next.config.js`: Next.js configuration
- `postcss.config.js`: PostCSS configuration for Tailwind
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration