# Portfolio Website - Divyasri M

A world-class developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark theme with neon accents and glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for premium user experience
- **Fully Responsive**: Optimized for all devices
- **Performance**: Built with Vite for lightning-fast builds
- **SEO Friendly**: Semantic HTML and proper meta tags

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

The project is already configured for Vercel deployment with `vercel.json`.

### Manual Deployment

1. Build the project: `npm run build`
2. The `dist` folder contains the production-ready files
3. Deploy the `dist` folder to your hosting provider

## 📝 Customization

### Update Social Links & Profile URLs

All links are centralized in configuration files for easy updates:

1. **Social Links** - Edit `src/config/links.js`:
   - Update `GITHUB_USERNAME`, `LINKEDIN_USERNAME`, etc.
   - All social links will automatically update across the site

2. **Project Links** - Edit `src/config/projects.js`:
   - Update `GITHUB_USERNAME` at the top
   - Update individual project GitHub and demo URLs
   - Example format:
     ```javascript
     github: `https://github.com/${GITHUB_USERNAME}/project-name`,
     demo: 'https://project-name.vercel.app',
     ```

### Other Customizations

- Update personal information in component files
- Modify colors in `tailwind.config.js`
- Add/remove sections in `App.jsx`
- Place your resume PDF in the `public` folder as `resume.pdf`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by Divyasri M
