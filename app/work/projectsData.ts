export interface Project {
  id: string;
  slug: string;
  name: string;
  tag: string;
  category: 'saas-ai' | 'web' | 'mobile';
  url: string;
  gradient: string;
  subtitle: string;
  featured?: boolean;
  logoPath: string;
  logoStyle?: 'dark' | 'light';
  logoText?: string;
  logoBackgroundColor?: string;
  screenshotCount?: number;
  imageFolder?: string;
  
  // Detail page data
  overview: string;
  challenge: string;
  solution: string;
  techStack: string[];
  features: string[];
  results?: {
    metric: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: '13',
    slug: 'solopos',
    name: 'SoloPOS',
    tag: 'POS for small businesses',
    category: 'web',
    url: 'https://solopos.xyz/',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    subtitle: 'Deploy AI assistants to any channel in seconds',
    logoPath: '/images/solopos/logo.png',
    logoStyle: 'light',
    logoText: 'SoloPOS',
    logoBackgroundColor: '#000000',
    screenshotCount: 1,
    imageFolder: 'solopos',
    overview: 'The all-in-one POS and inventory management system designed for small businesses. Track sales, manage stock, and grow — without the enterprise price tag.',
    challenge: 'Businesses struggle to deploy and manage AI assistants across multiple messaging platforms, requiring separate integrations and technical expertise for each channel.',
    solution: 'We built a one-stop shop for POS and inventory management, with a simple and intuitive interface that makes it easy for small businesses to track their sales and inventory.',
    techStack: ['Python' ,'WhatsApp API'],
    features: [
      'Stock and inventory management',
      'Multi-channel support (Telegram, Discord, WhatsApp)',
      'Customer Campains with Whatsap Business',
      'Powerful simple reports',
    ]
  },
  {
    id: '12',
    slug: 'mettoday',
    name: 'MetToday',
    tag: 'Event Q&A Platform',
    category: 'web',
    url: 'https://mettoday.online',
    gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    subtitle: 'Real-time Q&A for tech conferences and events',
    logoPath: '/images/mettoday/logo.png',
    logoStyle: 'light',
    logoText: 'MetToday',
    logoBackgroundColor: '#f5f5f5',
    screenshotCount: 1,
    imageFolder: 'devfest',
    overview: 'Register, share, and stay connected. From social posters to digital certificates, your journey doesnt have to end with the event',
    challenge: 'Event organizers struggled to manage audiences, manage Q&A sessions, and share event information with attendees.',
    solution: 'We created a web app that streamlines all event management processes, from registration to post-event engagement.',
    techStack: ['Next.js', 'Python', 'PostgreSQL', 'Redis', 'Real-time sync'],
    features: [
      'Real-time question submission',
      'Community upvoting system',
      'Moderator dashboard for filtering',
      'Multi-session support',
      'Anonymous and authenticated modes',
      'Export Q&A transcript after event'
    ]
  },
  {
    id: '6',
    slug: 'school-manager',
    name: 'School Manager Pro',
    tag: 'Complete School Platform',
    category: 'web',
    url: 'https://smp.globalautosystems.co.ug/',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    subtitle: 'All-in-one school administration and learning management',
    logoPath: '/images/globalautosystems/1.png',
    logoStyle: 'light',
    logoText: 'School Manager',
    logoBackgroundColor: '#2d5016',
    screenshotCount: 2,
    imageFolder: 'globalautosystems',
    overview: 'School Manager is a comprehensive platform that handles admissions, academics, finance, and communication for K-12 schools, replacing multiple disconnected systems.',
    challenge: 'Schools were juggling multiple platforms for different tasks, leading to data inconsistencies, duplicate work, and poor parent communication.',
    solution: 'We created a unified system that manages every aspect of school operations, with dedicated portals for administrators, teachers, students, and parents.',
    techStack: ['Python', 'Twilio'],
    features: [
      'Student admission and enrollment management',
      'Fee collection and financial tracking',
      'Timetable creation and class scheduling',
      'Online assignments and grading',
      'Parent-teacher communication portal',
      'Attendance tracking with SMS alerts',
      'Transport and hostel management'
    ]
  }, {
    id: '6',
    slug: 'by-the-fruit',
    name: 'By The Fruit',
    tag: 'Investing in Innovation Known by its Fruit.',
    category: 'web',
    url: 'https://bythefruit.com',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    subtitle: 'All-in-one school administration and learning management',
    logoPath: '/images/bythefruit/1.png',
    logoStyle: 'light',
    logoText: 'School Manager',
    logoBackgroundColor: '#2d5016',
    screenshotCount: 2,
    imageFolder: 'bythefruit',
    overview: 'The Venture Capital system is broken. We are fixing it through radical hospitality, decentralized power, and capital that acts as an advocate—not just a check.',
    challenge: 'Companies stay private longer. Liquidity is locked. Minimums are sky-high. The bridge between those who build and those who believe is crumbling',
    solution: 'We curate a space where investors aren’t just line items on a cap table. They are partners who bring more than capital—they bring their gifts, expertise, and commitment to the mission.',
    techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Redis', 'AWS S3', 'Twilio'],
    features: [
      'Redemptivee Capital',
      'Radical Hospitality',
      'Ecosystem Growth',
      'Founder-first hospitality',
    ]
  }, {
    id: '6',
    slug: 'blue-ox-kampus',
    name: 'Blue Ox Kampus',
    tag: 'Raising Builders to Shape Culture.',
    category: 'web',
    url: 'https://blueoxkampus.com',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    subtitle: 'All-in-one school administration and learning management',
    logoPath: '/images/blueoxkampus/1.png',
    logoStyle: 'light',
    logoText: 'School Manager',
    logoBackgroundColor: '#2d5016',
    screenshotCount: 2,
    imageFolder: 'globalautosystems',
    overview: 'We build Christian creative hubs and partner with churches to transform underused spaces into creative environments for Gen Z and Gen Alpha — places where they can belong, build, become, and encounter God in the process.We train them. We disciple them. We run weekly competitions. And we deploy the best of them into real work with founders, ministries, and startups around the world',
    challenge: 'Billions are being poured into systems that capture attention, shape desire, and profit from human weakness. The stories, platforms, and technologies forming this generation are too often built without truth, without conviction, and without responsibility.',
    solution: 'Blue Ox Kampus exists to answer that directly. We are raising a generation of African builders, creatives, and storytellers who are discipled in faith, sharpened in craft, and committed to shaping culture through media, technology, and storytelling.',
    techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Redis', 'AWS S3', 'Twilio'],
    features: [
      'Hire an intern pod',
      'Build with us',
      'Activate a creative space',
      'Train with us',
    ]
  },
  {
    id: '4',
    slug: 'nextgenhims',
    name: 'NextGenHIMS',
    tag: 'Hospital Information System',
    category: 'web',
    url: 'https://nextgenhims.org',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    subtitle: 'Modern hospital management for better patient care',
    logoPath: '/images/nextgenhims/logo.png',
    logoStyle: 'light',
    screenshotCount: 2,
    overview: 'NextGenHIMS is a comprehensive Hospital Information Management System designed for small to medium-sized healthcare facilities, streamlining patient records, billing, and clinical workflows.',
    challenge: 'Small hospitals struggled with fragmented systems for patient records, billing, and inventory, leading to inefficiencies and errors in patient care.',
    solution: 'We developed an integrated platform that centralizes all hospital operations, from patient admission to discharge, with role-based access for different staff members.',
    techStack: ['React', 'Node.js', 'MongoDB', 'HL7 FHIR', 'AWS', 'Socket.io'],
    features: [
      'Electronic Health Records (EHR) management',
      'Appointment scheduling and queue management',
      'Pharmacy and inventory tracking',
      'Billing and insurance claims processing',
      'Laboratory and diagnostic integration',
      'Staff management and shift scheduling'
    ]
  },
  {
    id: '5',
    slug: 'davinci-analytics',
    name: 'Da Vinci Analytics',
    tag: 'School Reporting System',
    category: 'web',
    url: 'https://davincianalytics.site',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    subtitle: 'Automated school report generation and student analytics',
    logoPath: '/images/davincianalytics/logo.png',
    logoStyle: 'light',
    screenshotCount: 3,
    imageFolder: 'davincianalytics',
    overview: 'Da Vinci Analytics transforms how schools generate student reports and track academic performance, automating term reports and providing insights for teachers and parents.',
    challenge: 'Teachers spent countless hours creating report cards manually, with limited ability to track student progress over time or identify learning gaps.',
    solution: 'We built an analytics platform that automatically generates comprehensive student reports, tracks performance trends, and provides actionable insights to educators.',
    techStack: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'PDF Generator'],
    features: [
      'Automated report card generation',
      'Performance trend analysis and predictions',
      'Class and subject-level analytics',
      'Parent portal for real-time progress tracking',
      'Custom grading schemes and comment banks',
      'Bulk report printing and digital distribution'
    ]
  },
  {
    id: '10',
    slug: 'lightbeam-media',
    name: 'Lightbeam Media',
    tag: 'Christian Content Library',
    category: 'web',
    url: 'https://lightbeam-two.vercel.app/',
    gradient: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
    subtitle: 'Digital library for Christian teaching and resources',
    logoPath: '/images/lightbeam/logo.png',
    logoStyle: 'light',
    screenshotCount: 3,
    imageFolder: 'lightbeam',
    overview: 'Lightbeam Media is a digital platform providing access to sermons, Bible studies, and Christian educational content for churches and individual believers.',
    challenge: 'Churches and ministries had valuable teaching content trapped in old formats (tapes, CDs) with no easy way to share and organize digital resources.',
    solution: 'We created a searchable digital library with content management, tagging, and streaming capabilities, making Christian teaching accessible worldwide.',
    techStack: ['Next.js', 'Sanity CMS', 'Video.js', 'Algolia Search', 'AWS S3', 'CDN'],
    features: [
      'Searchable sermon and teaching library',
      'Audio and video streaming',
      'Topic and scripture tagging',
      'Playlist creation and sharing',
      'Download for offline listening',
      'Ministry and speaker profiles'
    ]
  },
  {
    id: '14',
    slug: 'blueox-business',
    name: 'BlueOx Business System',
    tag: 'Business Management Platform',
    category: 'web',
    url: 'https://system.blueoxgroup.eu/',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    subtitle: 'All-in-one business management platform',
    logoPath: '/images/blueox/logo.png',
    logoStyle: 'light',
    screenshotCount: 2,
    imageFolder: 'blueox',
    overview: 'BlueOx Business System is a comprehensive business management platform that integrates financial management, invoicing, inventory, CRM, and industry-specific modules for modern businesses.',
    challenge: 'Businesses were struggling with disconnected tools and manual processes for accounting, invoicing, inventory, and operations, wasting countless hours on spreadsheets and multiple platforms.',
    solution: 'We created an all-in-one platform with automated workflows, multi-currency support, and industry-specific modules that saves businesses 15+ hours weekly and generates invoices 95% faster.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Multi-currency API'],
    features: [
      'Automated bookkeeping and invoicing',
      'Multi-currency support (USD, EUR, GBP, UGX)',
      'Real-time financial reporting and analytics',
      'Inventory and asset management',
      'CRM and customer management',
      'Industry-specific modules (Tours, Fleet, Hotel, Restaurant POS, Retail)',
      'API access and integrations',
      'White-label option for enterprise'
    ],
    results: [
      { metric: '15+ hrs', description: 'Saved per week per business' },
      { metric: '95%', description: 'Faster invoice generation' },
      { metric: '99.9%', description: 'Platform uptime guarantee' }
    ]
  },
  {
    id: '2',
    slug: 'headshotcam',
    name: 'HeadshotCam',
    tag: 'AI Professional Headshots',
    category: 'saas-ai',
    url: 'https://headshot.cam',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    subtitle: 'Professional headshots powered by AI, no photographer needed',
    featured: true,
    logoPath: '/images/headshot/logo.png',
    logoStyle: 'light',
    logoBackgroundColor: '#d1f0ea',
    screenshotCount: 3,
    imageFolder: 'headshot',
    overview: 'HeadshotCam generates professional-quality headshots using AI, eliminating the need for expensive photo shoots. Perfect for LinkedIn profiles, company websites, and professional portfolios.',
    challenge: 'Professional photography is expensive and time-consuming. Remote workers and small businesses needed an affordable way to get high-quality headshots quickly.',
    solution: 'We created an AI system that generates professional headshots from casual photos. Users upload 5-10 selfies, and our AI produces studio-quality headshots in multiple styles.',
    techStack: ['React', 'Node.js', 'Stable Diffusion', 'AWS', 'PostgreSQL', 'Stripe'],
    features: [
      'AI-generated headshots in 30+ professional styles',
      'Background customization (office, studio, outdoor)',
      'Outfit and lighting variations',
      '4K resolution exports',
      'Team packages for companies'
    ],
    results: [
      { metric: '5K+', description: 'Professionals served' },
      { metric: '50+', description: 'Headshots per user on average' },
      { metric: '95%', description: 'Customer satisfaction rate' }
    ]
  },
  {
    id: '1',
    slug: 'picflair',
    name: 'Picflair',
    tag: 'AI Photo Transformation',
    category: 'saas-ai',
    url: 'https://picflair.art',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    subtitle: 'Transform ordinary photos into extraordinary art with AI',
    featured: true,
    logoPath: '/images/picflair/logo.png',
    logoStyle: 'light',
    logoBackgroundColor: '#ede9fe',
    screenshotCount: 2,
    overview: 'Picflair is an AI-powered photo transformation platform that enables users to turn their everyday photos into stunning artistic creations. Built for creators, marketers, and photography enthusiasts who want professional-grade results without learning curve.',
    challenge: 'Photo editing tools are either too complex for beginners or too limited for achieving creative results. Users needed a solution that combines professional quality with simplicity.',
    solution: 'We built a web-based AI platform that uses advanced machine learning models to apply artistic transformations. The interface focuses on one-click transformations while providing customization options for advanced users.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel', 'Stripe'],
    features: [
      'One-click AI transformations with 20+ artistic styles',
      'Real-time preview before processing',
      'Batch processing for multiple images',
      'High-resolution export up to 4K',
      'Custom style training for brand consistency'
    ],
    results: [
      { metric: '10K+', description: 'Photos transformed in first month' },
      { metric: '4.8/5', description: 'Average user rating' },
      { metric: '60%', description: 'User retention rate' }
    ]
  },
  {
    id: '11',
    slug: 'instantugc',
    name: 'InstantUGC',
    tag: 'UGC Ad Generator',
    category: 'saas-ai',
    url: 'https://instantugc.pro',
    gradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    subtitle: 'AI-generated user-generated content ads',
    logoPath: '/images/instantug/1.png',
    logoStyle: 'light',
    logoText: 'InstantUGC',
    logoBackgroundColor: '#a855f7',
    screenshotCount: 2,
    imageFolder: 'instantug',
    overview: 'InstantUGC helps brands create authentic-looking user-generated content ads using AI, without needing real customers or influencers.',
    challenge: 'Brands need UGC-style ads for social media but struggle with finding creators, managing relationships, and scaling production.',
    solution: 'We built an AI platform that generates realistic UGC-style video ads, complete with AI avatars, scripts, and editing, ready to launch in minutes.',
    techStack: ['Next.js', 'AI Avatar API', 'Video Processing', 'OpenAI', 'Stripe', 'AWS'],
    features: [
      'AI avatar selection (age, gender, ethnicity)',
      'Script generation for product benefits',
      'Text-to-speech with natural voices',
      'Automatic video editing and captions',
      'Multiple variations for A/B testing',
      'Direct export for Facebook and TikTok ads'
    ]
  },
  {
    id: '3',
    slug: 'glosacco',
    name: 'GloSACCO',
    tag: 'SACCO Management Platform',
    category: 'web',
    url: 'https://glosacco.com',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    subtitle: 'Complete financial management for savings and credit cooperatives',
    featured: true,
    logoPath: '/images/glosacco/1.png',
    logoStyle: 'light',
    logoText: 'Glo SACCO',
    logoBackgroundColor: '#1a4d3e',
    screenshotCount: 3,
    overview: 'GloSACCO is a comprehensive management platform for Savings and Credit Cooperative Organizations (SACCOs), streamlining member management, loan processing, and financial reporting.',
    challenge: 'SACCOs in East Africa were managing operations manually with spreadsheets and paper records, leading to errors, inefficiency, and limited member service.',
    solution: 'We built a cloud-based platform that automates SACCO operations from member onboarding to loan disbursement, with real-time reporting and mobile access.',
    techStack: ['Next.js', 'Django', 'PostgreSQL', 'Redis', 'AWS', 'M-Pesa API'],
    features: [
      'Member registration and KYC management',
      'Automated loan application and approval workflow',
      'Savings account management with interest calculation',
      'Real-time financial reporting and analytics',
      'Mobile money integration for deposits and withdrawals',
      'SMS notifications for transactions'
    ],
    results: [
      { metric: '15+', description: 'SACCOs using the platform' },
      { metric: '10K+', description: 'Active members' },
      { metric: '$2M+', description: 'Loans processed' }
    ]
  },

  {
    id: '7',
    slug: 'post-once',
    name: 'Post Once',
    tag: 'Social Media Scheduler',
    category: 'saas-ai',
    url: 'https://postonce.pro',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    subtitle: 'Schedule and publish to all social platforms from one place',
    logoPath: '/images/postonce/logo.png',
    logoStyle: 'light',
    logoBackgroundColor: '#000000',
    screenshotCount: 2,
    imageFolder: 'postonce',
    overview: 'Post Once is a social media management tool that allows creators and businesses to schedule and publish content across multiple platforms simultaneously.',
    challenge: 'Content creators and small businesses waste hours posting the same content separately to Twitter, LinkedIn, Facebook, and Instagram.',
    solution: 'We built a unified scheduling platform with AI-powered caption optimization, letting users post to all platforms with one click while maintaining platform-specific formatting.',
    techStack: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Social Media APIs', 'Bull Queue'],
    features: [
      'Multi-platform posting (Twitter, LinkedIn, Facebook, Instagram)',
      'AI caption optimization for each platform',
      'Visual content calendar',
      'Bulk scheduling and CSV import',
      'Analytics and engagement tracking',
      'Team collaboration and approval workflows'
    ]
  },
  {
    id: '9',
    slug: 'expenseum',
    name: 'Expenseum',
    tag: 'Expense Tracker',
    category: 'mobile',
    url: 'https://play.google.com/store/apps/details?id=ug.global.cash&pcampaignid=web_share',
    gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    subtitle: 'Smart expense tracking with receipt scanning',
    logoPath: '/images/expenseum/logo.png',
    logoStyle: 'light',
    logoBackgroundColor: '#000000',
    screenshotCount: 3,
    overview: 'Expenseum helps individuals and small businesses track expenses effortlessly with AI-powered receipt scanning and automatic categorization.',
    challenge: 'People struggle to track expenses consistently, and manual entry is tedious. Receipts pile up, making expense reporting a nightmare.',
    solution: 'We built a mobile app that uses AI to scan receipts, extract details, and categorize expenses automatically, with cloud backup and export features.',
    techStack: ['React Native', 'Python', 'OCR API', 'Firebase', 'Chart.js'],
    features: [
      'AI receipt scanning and data extraction',
      'Automatic expense categorization',
      'Budget tracking and alerts',
      'Multi-currency support',
      'Export to Excel and PDF',
      'Tax category tagging for businesses'
    ]
  },
  {
    id: '13',
    slug: 'open-clawbot',
    name: 'Openclaw',
    tag: 'AI Assistant Platform',
    category: 'saas-ai',
    url: 'https://www.open-clawbot.com/',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    subtitle: 'Deploy AI assistants to any channel in seconds',
    logoPath: '/images/openclawbot/logo.png',
    logoStyle: 'light',
    logoText: 'Openclaw',
    logoBackgroundColor: '#000000',
    screenshotCount: 1,
    imageFolder: 'openclaw',
    overview: 'Open-Clawbot is an AI assistant deployment platform that allows businesses to quickly deploy conversational AI bots across multiple messaging channels including Telegram, Discord, and WhatsApp.',
    challenge: 'Businesses struggle to deploy and manage AI assistants across multiple messaging platforms, requiring separate integrations and technical expertise for each channel.',
    solution: 'We built a unified platform that enables one-click deployment of AI assistants to multiple messaging channels, with seamless integration and centralized management.',
    techStack: ['Next.js', 'Python', 'OpenAI API', 'Telegram Bot API', 'Discord API', 'WhatsApp API'],
    features: [
      'Deploy AI assistants in seconds',
      'Multi-channel support (Telegram, Discord, WhatsApp)',
      'Google authentication for easy onboarding',
      'Centralized bot management dashboard',
      'Automated message handling',
      'Scalable cloud infrastructure'
    ]
  },
   {
    id: '13',
    slug: 'bible banter',
    name: 'Bible Banter',
    tag: 'Bible study app',
    category: 'web',
    url: 'https://bible-banter.vercel.app',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    subtitle: 'Deploy AI assistants to any channel in seconds',
    logoPath: '/images/openclawbot/logo.png',
    logoStyle: 'light',
    logoText: 'Openclaw',
    logoBackgroundColor: '#000000',
    screenshotCount: 1,
    imageFolder: 'openclaw',
    overview: 'Open-Clawbot is an AI assistant deployment platform that allows businesses to quickly deploy conversational AI bots across multiple messaging channels including Telegram, Discord, and WhatsApp.',
    challenge: 'Businesses struggle to deploy and manage AI assistants across multiple messaging platforms, requiring separate integrations and technical expertise for each channel.',
    solution: 'We built a unified platform that enables one-click deployment of AI assistants to multiple messaging channels, with seamless integration and centralized management.',
    techStack: ['Next.js', 'Python', 'OpenAI API', 'Telegram Bot API', 'Discord API', 'WhatsApp API'],
    features: [
      'Deploy AI assistants in seconds',
      'Multi-channel support (Telegram, Discord, WhatsApp)',
      'Google authentication for easy onboarding',
      'Centralized bot management dashboard',
      'Automated message handling',
      'Scalable cloud infrastructure'
    ]
   }
   ,
   {
    id: '13',
    slug: 'bible battle',
    name: 'Bible Battle',
    tag: 'Bible study app',
    category: 'web',
    url: 'https://bible-banter.vercel.app',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    subtitle: 'Deploy AI assistants to any channel in seconds',
    logoPath: '/images/openclawbot/logo.png',
    logoStyle: 'light',
    logoText: 'Openclaw',
    logoBackgroundColor: '#000000',
    screenshotCount: 1,
    imageFolder: 'openclaw',
    overview: 'Open-Clawbot is an AI assistant deployment platform that allows businesses to quickly deploy conversational AI bots across multiple messaging channels including Telegram, Discord, and WhatsApp.',
    challenge: 'Businesses struggle to deploy and manage AI assistants across multiple messaging platforms, requiring separate integrations and technical expertise for each channel.',
    solution: 'We built a unified platform that enables one-click deployment of AI assistants to multiple messaging channels, with seamless integration and centralized management.',
    techStack: ['Next.js', 'Python', 'OpenAI API', 'Telegram Bot API', 'Discord API', 'WhatsApp API'],
    features: [
      'Deploy AI assistants in seconds',
      'Multi-channel support (Telegram, Discord, WhatsApp)',
      'Google authentication for easy onboarding',
      'Centralized bot management dashboard',
      'Automated message handling',
      'Scalable cloud infrastructure'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}
