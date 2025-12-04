// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'salimuddin07', // Your GitHub org/user name. (This is the only required config)
  },
 
  // For Vercel or root deployments set base to '/'
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['salimuddin07/my-project1', 'salimuddin07/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['salimuddin07/my-gitinfo-profile'], // List of repository names to display. example: ['salimuddin07/my-project1']
      },
    },
    external: {
      header: 'Featured Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AIO Converter - Universal Media Processing Suite',
          description:
            'A comprehensive native Windows application for universal media conversion and processing. Features advanced video processing (split, resize, rotate, crop, optimize, effects), image manipulation (GIF creation, WebP, APNG, AVIF, JXL conversion), and document processing (PDF ↔ Markdown, Image to PDF). Built with modern desktop technologies providing professional-grade performance with batch processing capabilities and real-time preview.',
          imageUrl:
            'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format',
          link: 'https://github.com/salimuddin07/AIO-converter',
        },
        {
          title: 'ApexChat - Advanced AI Chatbot Platform',
          description:
            'A sophisticated ChatGPT-like conversational AI platform with multi-API integration capabilities. Features responsive web interface, real-time chat functionality, conversation history management, customizable AI model selection, and seamless connection to various AI APIs including OpenAI GPT, Claude, and other language models. Demonstrates advanced API integration, real-time communication, and scalable architecture for AI-powered applications.',
          imageUrl:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&auto=format',
          link: 'https://github.com/salimuddin07/ApexChat',
        },
      ],
    },
  },
  seo: {
    title: 'Salimuddin | AI Automation & Web Scraping Specialist',
    description:
      'Expert Web Developer specializing in AI automation, web scraping, and data extraction. I build scalable workflows, scraping scripts, and dashboards that turn raw data into actionable insights.',
    imageURL: 'https://www.salimuddin.tech/og-image.jpg',
    keywords: 'web scraping, automation, AI, data extraction, web developer, python, javascript, apify, crawlee, puppeteer, playwright',
    author: 'Salimuddin',
    robots: 'index, follow',
    canonical: 'https://www.salimuddin.tech',
  },
  social: {
    linkedin: 'salimuddin07',
    x: 'salimuddin007',
    mastodon: '',
    researchGate: '',
    facebook: 'salimuddin007',
    instagram: 'salimuddin07_',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: 'salimuddin07',
    telegram: 'salimuddin07',
    website: 'https://www.salimuddin.tech',
    phone: '',
    email: 'contact@salimuddin.tech',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'PHP',
    'Apify',
    'Crawlee',
    'Cheerio',
    'Puppeteer',
    'Axios',
    'Playwright',
    'BeautifulSoup',
    'phpMyAdmin',
    'PostgreSQL',
    'AWS',
    'Git',
    'GitHub',
    'n8n',
    'OpenAI',
  ],
  experiences: [
    {
      company: 'PI Matrix',
      position: 'AI Automation Developer',
      from: 'February 2025',
      to: 'Present',
      companyLink: 'https://pimatrix.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'ApexChat - Advanced AI Chatbot Platform',
      conferenceName: '',
      journalName: 'Open Source Project',
      authors: 'Salimuddin',
      link: 'https://github.com/salimuddin07/ApexChat',
      description:
        'Developed a sophisticated ChatGPT-like conversational AI platform with multi-API integration capabilities. ApexChat features a responsive web interface that seamlessly connects to various AI APIs including OpenAI GPT, Claude, and other language models. The platform provides real-time chat functionality, conversation history management, customizable AI model selection, and an intuitive user experience comparable to ChatGPT. Built with modern web technologies, it demonstrates advanced API integration, real-time communication, and scalable architecture for AI-powered applications.',
    },
    {
      title: 'AIO Converter - Universal Media Processing Suite',
      conferenceName: '',
      journalName: 'Desktop Application',
      authors: 'Salimuddin',
      link: 'https://github.com/salimuddin07/AIO-converter',
      description:
        'Engineered a comprehensive native Windows application for universal media conversion and processing. AIO Converter is an all-in-one solution featuring advanced video processing (split, resize, rotate, crop, optimize, effects), image manipulation (GIF creation, format conversion including WebP, APNG, AVIF, JXL), and document processing (PDF to Markdown, Markdown to PDF, Image to PDF). The application provides a professional-grade desktop experience with batch processing capabilities, real-time preview, and optimized performance for handling large media files. This tool demonstrates expertise in desktop application development, multimedia processing, and user interface design.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  // Display GitHub Profile README (Optional)
  readme: {
    display: true, // Display GitHub Profile README?
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made With <a class="text-primary" href="https://github.com/salimuddin07" target="_blank" rel="noreferrer">❤️</a>`,

  enablePWA: true,
};

export default CONFIG;
