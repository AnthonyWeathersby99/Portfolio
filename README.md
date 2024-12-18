# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases personal projects, skills, and professional information with a clean, user-friendly interface.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- 🌙 Dark mode design
- 🚀 Fast performance with Next.js
- 💻 Interactive project showcase
- 📊 Skills visualization
- 📝 Downloadable resume
- 📱 Contact information with copy functionality

## Prerequisites

Required:
- [Node.js](https://nodejs.org/) (version 18.17.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnthonyWeathersby99/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website running.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm start` - Runs the production build locally
- `npm run lint` - Runs ESLint for code quality checks

## Deployment

This project is configured for deployment to GitHub Pages. To deploy:

1. **Update the repository settings**
   - Go to your repository settings
   - Under "Pages", select the main branch and /docs folder as the source

2. **Build and deploy**
   ```bash
   npm run build
   ```
   This will create a production build in the /docs directory.

3. **Push changes to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

## Customization

### Adding Projects

1. Navigate to `src/components/features/ProjectsPage.tsx`
2. Add your project to the `projects` array:
   ```typescript
   {
     id: 'your-project',
     title: 'Project Title',
     description: 'Project description',
     details: [
       'Detail 1',
       'Detail 2',
     ],
     github: 'https://github.com/your-username/project',
     tech: ['Technology 1', 'Technology 2']
   }
   ```

### Updating Skills

1. Navigate to `src/components/features/SkillsGrid.tsx`
2. Modify the `skills` object to add or update skills:
   ```typescript
   technical: {
     "Category Name": [
       { 
         name: 'Skill Name',
         proficiency: 85,
         experience: '2 years'
       }
     ]
   }
   ```

### Modifying Contact Information

1. Navigate to `src/components/features/SocialLinks.tsx`
2. Update the `contactInfo` object with your information:
   ```typescript
   const contactInfo = {
     email: "your.email@example.com",
     phone: "your-phone-number",
     linkedin: "your-linkedin-url",
     github: "your-github-url"
   };
   ```

## Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [React](https://reactjs.org/) - UI library
