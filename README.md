# DEVADU Integrated Solutions - Website

A modern, responsive React-based website for DEVADU Integrated Solutions, a tech company specializing in affordable web solutions, hosting, and consulting services for businesses and developers.

## 🚀 Features

- **Modern React Application**: Built with React 19 and Vite for fast development and optimal performance
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Tailwind CSS Styling**: Utility-first CSS framework for rapid UI development
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **AOS Integration**: Animate On Scroll library for scroll-triggered animations
- **Multi-page Navigation**: React Router for client-side routing
- **Contact Forms**: Interactive contact forms with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant components and navigation

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **AOS (Animate On Scroll)** - Scroll animation library

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Plugin React** - React plugin for Vite

### Static Template
- **Base Tailwind 1.0.0** - Static HTML/CSS/JS version using Alpine.js and Tailwind CSS

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd devadu-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📖 Usage

### Development
```bash
npm run dev
```
Opens the development server at `http://localhost:5173`

### Building
```bash
npm run build
```
Creates optimized production build in the `dist` folder

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality

## 📁 Project Structure

```
devadu-website/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images and media files
│   │   ├── blue-neurons.jpg
│   │   ├── nasa-unsplash.jpg
│   │   └── tech-team.jpg
│   ├── components/           # Reusable React components
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero section
│   │   ├── ScrollToTopButton.jsx
│   │   ├── Services.jsx      # Services section
│   │   └── Testimonials.jsx  # Client testimonials
│   ├── pages/                # Page components
│   │   ├── About.jsx         # About page
│   │   ├── Contact.jsx       # Contact page
│   │   └── Home.jsx          # Home page
│   ├── App.css               # Global styles
│   ├── App.jsx               # Main app component
│   ├── index.css             # Base styles
│   └── main.jsx              # App entry point
├── Base-Tailwind-1.0.0/      # Static HTML template
│   ├── index.html            # Main HTML file
│   ├── style.css             # Compiled CSS
│   ├── bundle.js             # JavaScript bundle
│   ├── images/               # Template images
│   └── *.html                # Additional pages
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # This file
```

## 🎨 Static HTML Template

The project includes a static HTML version in the `Base-Tailwind-1.0.0/` folder, which provides:

- **Pure HTML/CSS/JS Implementation**: No framework dependencies
- **Alpine.js Integration**: Lightweight JavaScript framework for interactivity
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **Dark Mode Support**: Built-in theme switching
- **Multiple Pages**: Home, About, Blog, Contact, and more
- **Interactive Components**: Testimonials slider, navigation menu, forms

### Template Features
- Complete business website template
- Blog pages with grid and single layouts
- Authentication pages (Sign In/Sign Up)
- 404 error page
- Contact forms
- Team member profiles
- Service listings
- Client testimonials

To use the static template, simply open `Base-Tailwind-1.0.0/index.html` in a web browser.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use functional components with hooks
- Maintain consistent code style
- Add proper TypeScript types (if applicable)
- Test components thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

DEVADU Integrated Solutions
- Website: [devadu.com](https://devadu.com)
- Email: info@devadu.com
- Phone: +234 XXX XXX XXXX
- Location: Lagos, Nigeria

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- ThemeWagon for the Base template inspiration
