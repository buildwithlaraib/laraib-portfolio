export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web App' | 'Utility' | 'Landing Page';
  description: string;
  fullOverview: string;
  image?: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
  keyFeatures: string[];
  isAvailableOnline: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Styling' | 'Tools';
  level: string;
  description: string;
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Laraib Mukhtar',
    brand: 'BUILD WITH LARAIB',
    role: 'Frontend Developer',
    availability: 'AVAILABLE FOR FREELANCE PROJECTS',
    headline: 'Building Digital Experiences That Make an Impact.',
    tagline: 'Turning ideas into meaningful digital experiences.',
    leadBio:
      "I'm Laraib Mukhtar, a Frontend Developer passionate about building modern, responsive and user-friendly web experiences.",
    extendedBio:
      "With a strong foundation in modern frontend architecture, I bridge the gap between creative design and clean code. I specialize in turning complex requirements into intuitive, blazing-fast web interfaces that deliver real value to users and businesses alike.",
    email: 'laraibmukhtar.dev@gmail.com',
    github: 'https://github.com/buildwithlaraib',
    linkedin: 'https://www.linkedin.com/in/buildwithlaraib',
    location: 'Open to Remote / Global Clients',
    portraitImage: '/assets/aistudio/1_789ae809.png',
  },

  aboutPillars: [
    {
      title: 'Modern Web Development',
      description:
        'Leveraging current standards in React, TypeScript, and modern build tooling to build fast, scalable applications with clean component trees.',
    },
    {
      title: 'Clean & Maintainable Code',
      description:
        'Writing organized, self-documenting code with clear architectural boundaries, strict typing, and DRY principles for effortless collaboration.',
    },
    {
      title: 'Responsive Interfaces',
      description:
        'Obsessing over screen adaptations, fluid typography, and touch interactions so every layout feels natural across smartphones, tablets, and wide monitors.',
    },
    {
      title: 'User-Focused Experiences',
      description:
        'Designing interfaces around user intent, intuitive navigation paths, accessibility (WCAG AA), and rapid interaction response times.',
    },
    {
      title: 'Continuous Learning & Development',
      description:
        'Actively expanding frontend knowledge, mastering emerging frameworks, exploring UI micro-interactions, and tracking industry best practices.',
    },
  ],

  skills: [
    // Frontend
    {
      name: 'HTML5',
      category: 'Frontend',
      level: 'Advanced',
      description: 'Semantic markup, accessible DOM structures, and SEO best practices.',
      highlight: 'Semantic & Accessible',
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      level: 'Advanced',
      description: 'Flexbox, Grid, custom properties, animations, and responsive media queries.',
      highlight: 'Modern Layouts',
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      level: 'Advanced',
      description: 'ES6+ features, asynchronous programming, DOM manipulation, and event handling.',
      highlight: 'ES6+ & Async Core',
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      level: 'Proficient',
      description: 'Static typing, interface design, generics, and compiler configurations.',
      highlight: 'Type Safety & Scale',
    },
    {
      name: 'React.js',
      category: 'Frontend',
      level: 'Proficient',
      description: 'Functional components, custom hooks, state architecture, and lifecycle hooks.',
      highlight: 'Component Ecosystem',
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      level: 'Proficient',
      description: 'App router, server-side rendering, routing conventions, and performance optimization.',
      highlight: 'Full-Stack Ready',
    },

    // Styling
    {
      name: 'Tailwind CSS',
      category: 'Styling',
      level: 'Advanced',
      description: 'Utility-first styling, design system tokens, responsive utilities, and custom plugins.',
      highlight: 'Rapid UI Styling',
    },
    {
      name: 'Bootstrap',
      category: 'Styling',
      level: 'Proficient',
      description: 'Responsive 12-column grid system, UI components, and rapid prototyping.',
      highlight: 'Grid & Prototyping',
    },

    // Tools
    {
      name: 'Git',
      category: 'Tools',
      level: 'Proficient',
      description: 'Branching workflows, commits, interactive rebasing, merge resolutions, and history tracking.',
      highlight: 'Version Control',
    },
    {
      name: 'GitHub',
      category: 'Tools',
      level: 'Proficient',
      description: 'Repository hosting, pull requests, issue tracking, and collaboration workflows.',
      highlight: 'Collaboration & CI',
    },
    {
      name: 'VS Code',
      category: 'Tools',
      level: 'Advanced',
      description: 'Productive developer environment with linting, formatting, and debugging workflows.',
      highlight: 'Optimized Dev Setup',
    },
    {
      name: 'REST APIs',
      category: 'Tools',
      level: 'Proficient',
      description: 'Consuming endpoints, async data fetching, error boundary handling, and response mapping.',
      highlight: 'Client-Server Data',
    },
  ] as SkillItem[],

  projects: [
    {
      id: 'calculator-app',
      title: 'Calculator App',
      category: 'Utility',
      description:
        'A digital calculator featuring precise floating-point mathematical computations, interactive keypad layout, and responsive interface.',
      fullOverview:
        'Engineered to provide a smooth, tactile desktop and mobile calculation experience. Features robust arithmetic handling, keyboard input listeners, clear/delete actions, and a high-contrast digital readout.',
      demoUrl: 'https://buildwithlaraib.github.io/Calculator/',
      githubUrl: 'https://github.com/buildwithlaraib/Calculator',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid'],
      keyFeatures: [
        'Keyboard and touch input support',
        'Floating-point arithmetic calculation',
        'Clean responsive keypad grid layout',
        'State reset and backspace correction',
      ],
      isAvailableOnline: true,
    },
    {
      id: 'expense-tracker',
      title: 'Expense Tracker',
      category: 'Web App',
      description:
        'A personal finance management application with live balance updates, dynamic cashflow categories, and persistent local storage.',
      fullOverview:
        'Helps individuals monitor spending habits through real-time financial tracking. Computes total income, monthly expenditure, and remaining balance automatically while saving entries across browser sessions.',
      demoUrl: 'https://buildwithlaraib.github.io/Expense-Tracker/',
      githubUrl: 'https://github.com/buildwithlaraib/Expense-Tracker',
      tags: ['JavaScript', 'CSS3', 'LocalStorage', 'DOM Manipulation'],
      keyFeatures: [
        'Real-time cashflow balance computation',
        'Categorized transaction history list',
        'Persistent storage using browser LocalStorage',
        'Single-click entry removal and updates',
      ],
      isAvailableOnline: true,
    },
    {
      id: 'todo-task-manager',
      title: 'Todo Task Manager',
      category: 'Web App',
      description:
        'A clean productivity task manager with dynamic status filters, interactive completion toggles, and organized task lists.',
      fullOverview:
        'Designed for daily productivity with zero friction. Allows users to categorize tasks, mark deliverables complete, filter by active or finished status, and retain their workflow uninterrupted.',
      demoUrl: 'https://buildwithlaraib.github.io/Todo-Task-Manager/',
      githubUrl: 'https://github.com/buildwithlaraib/Todo-Task-Manager',
      tags: ['JavaScript', 'Tailwind CSS', 'LocalStorage', 'UI State'],
      keyFeatures: [
        'Multi-state filtering (All, Active, Completed)',
        'Instant task addition and deletion',
        'Interactive completion checklist state',
        'Persistent browser session storage',
      ],
      isAvailableOnline: true,
    },
    {
      id: 'foodie-restaurant',
      title: 'Foodie Restaurant',
      category: 'Landing Page',
      description:
        'An engaging culinary restaurant landing experience featuring dish presentation, menu exploration, and customer order flow.',
      fullOverview:
        'Crafted to showcase gourmet dining with atmospheric visual storytelling. Features responsive menu categories, appetizing dish presentations, table reservation CTA, and fluid page transitions.',
      demoUrl: 'https://buildwithlaraib.github.io/Foodie-Resturant/',
      githubUrl: 'https://github.com/buildwithlaraib/Foodie-Resturant',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      keyFeatures: [
        'Dish presentation and responsive layout',
        'Interactive menu category navigation',
        'Responsive layout across mobile and desktop',
        'Clear call-to-action for table reservations',
      ],
      isAvailableOnline: true,
    },
  ] as ProjectItem[],

  experience: [
    {
      role: 'Frontend / Project Assistant',
      company: 'UDEVS',
      period: '2025 · 6 Months Internship',
      type: 'Internship',
      summary:
        'Completed a 6-month hands-on frontend development internship collaborating with engineering leads to build, maintain, and refine modern web interfaces.',
      responsibilities: [
        'Worked on frontend user interfaces adhering to responsive web standards.',
        'Collaborated with team members to implement design mockups using HTML, CSS, and JavaScript.',
        'Assisted in code maintenance and styling adjustments using Tailwind CSS.',
        'Utilized Git and GitHub for version control and collaborative pull request workflows.',
        'Assisted in testing web layouts across mobile and desktop viewports.',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git', 'GitHub', 'Responsive Design'],
    },
  ],

  services: [
    {
      id: 'frontend-development',
      title: 'Frontend Development',
      description:
        'Building robust, maintainable, and high-performance client applications with React.js, Next.js, and TypeScript.',
      deliverables: [
        'Modern component architecture',
        'Type-safe state management',
        'RESTful API integration & data handling',
        'Fast page load times & optimized assets',
      ],
    },
    {
      id: 'responsive-website-development',
      title: 'Responsive Website Development',
      description:
        'Developing fluid, adaptable websites that look and function consistently across all modern devices and screen sizes.',
      deliverables: [
        'Mobile-first responsive layouts',
        'Fluid typography & flexible grids',
        'Cross-browser testing (Chrome, Safari, Firefox)',
        'Touch-friendly interactive elements',
      ],
    },
    {
      id: 'landing-page-development',
      title: 'Landing Page Development',
      description:
        'Creating high-converting, visually striking landing pages engineered to captivate visitors and communicate value clearly.',
      deliverables: [
        'Polished modern visual layout',
        'Subtle micro-interactions & smooth transitions',
        'SEO-optimized markup & metadata',
        'Clear, strategic call-to-action placements',
      ],
    },
    {
      id: 'website-ui-implementation',
      title: 'Website UI Implementation',
      description:
        'Translating design prototypes into clean, semantic, pixel-perfect code with zero design discrepancy.',
      deliverables: [
        'Pixel-perfect translation from Figma / XD',
        'Tailwind CSS design token system',
        'Clean, accessible semantic markup (WCAG AA)',
        'Interactive states & hover feedback',
      ],
    },
  ] as ServiceItem[],
};
