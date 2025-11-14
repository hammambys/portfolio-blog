export const about = {
  text: `Welcome to my corner of the digital world!
  
  I'm Hammem Ben Younes, a passionate developer with a desire for turning ideas into interactive experiences, an observant eye for detail and a love for clean, efficient code.
  
  I specialize in crafting custom web, mobile and desktop solutions.

  Let's collaborate to bring your vision to life!`,
  img: "/images/profil.jpg",
};

export const portfolio = [
  {
    title: "AI Baby name generator",
    summary:
      "AI-powered web app built with FastAPI and LangChain that suggests unique and meaningful names depending on user preferences",
    description: `This is a personal project that leverages the power of AI to help parents find the perfect name for their baby.
      The application uses FastAPI for the backend and LangChain to interact with LLMs, providing users with unique and meaningful name suggestions based on their preferences.`,
    features: [
      "AI-powered name suggestions",
      "User preference input",
      "Unique and meaningful names",
    ],
    tools: ["FastAPI", "Python", "LangChain", "Groq API"],
    source: "https://github.com/hammambys/human-name-generator",
    link: "https://human-name-generator.onrender.com",
    slug: "baby-name-generator",
    screenshots: ["/images/baby_name_2.png"],
    img: "/images/baby_name_2.png",
  },
  {
    title: "AI Business Advisor Council",
    summary:
      "AI-powered web app that evaluates business ideas and expert feedback using Groq API",
    img: "/images/advisor_1.png",
    description: `This is a personal project that leverages the power of AI to help entrepreneurs evaluate their business ideas.
      It is like having a advisor council composed of Strategist, Technical expert and Legal advisor to provide feedback on your business idea.
      The application uses LangChain to interact with LLMs via Groq API, providing users with comprehensive evaluations and expert advice.`,
    features: [
      "AI-powered business idea evaluation",
      "Expert feedback from multiple perspectives",
      "Comprehensive analysis and advice",
    ],
    tools: ["Streamlit", "Python", "LangChain", "Groq API"],
    source: "https://github.com/hammambys/business-mentoring-council",
    link: "https://business-advisor-council.streamlit.app",
    slug: "business-advisor-council",
    screenshots: ["/images/advisor_1.png"],
  },
  {
    title: "Full-stack e-learning platform - Manageme",
    summary:
      "An e-learning project management courses platform built with Angular and Spring Boot that enables interactive course management ",
    description: `This was an academic project at the end of second year in college which is an e-learning platform designed to manage training programs and educational courses related to project management. 
      This platform supports multiple content types, allowing educators and trainers to create a rich, interactive learning experience.
      It enables users to generate their own content, providing a collaborative learning environment.`,
    features: [
      "E-learning platform",
      "Course management",
      "Interactive learning experience",
      "Content creation tools",
      "Support of multiple content types (e.g., text, audio, images, video)",
    ],
    tools: ["Angular", "Spring boot", "MySQL"],
    source: "https://github.com/hammambys/manageme",
    slug: "manageme",
    screenshots: ["/images/manageme_1.jpg", "/images/manageme_2.jpg"],
    img: "/images/manageme_2.jpg",
  },
  {
    title: "Landing page - Association Robotique ENSI",
    summary:
      "Landing page for the official website of Association Robotique ENSI",
    img: "/images/are.PNG",
    description: `This is my first real-world coding project while I was in college which is the design and development of the official website for the Association Robotique ENSI. 
      The landing page features a modern design, reflecting the innovative spirit of the association.`,
    features: ["Landing page", "Contact form", "Photo gallery"],
    tools: ["React", "Figma", "Bootstrap"],
    link: "http://www.ar-ensi.tn/",
    slug: "landing-page-are",
    screenshots: ["/images/are.png"],
  },
  {
    title: "Mumia - Full-stack e-commerce web application",
    summary:
      "A jumia.com clone built with React and Express.js that enables online buying and selling of products",
    img: "/images/mumia.PNG",
    description: `This is a fun project i did which consists of cloning jumia.com, a popular e-commerce platform in my region. 
      This project is fully-featured marketplace website designed from scratch to facilitate online buying and selling. 
      It includes a range of features to enhance the user experience, such as a streamlined signup/signin process, vendor dashboards, and integrated payment systems. 
      It is designed to be mobile-friendly, ensuring accessibility across all devices.`,
    features: [
      "Payment system (Stripe,Paypal)",
      "Simple signup/signin process",
      "Vendor Dashboard",
      "Easy Custom Search & Navigation",
      "Mobile Friendliness",
      "Payment gateways(stripe,paypal)",
      "Ratings & Reviews",
    ],
    tools: ["MongoDB", "React", "Redux", "Express.js", "Node.js"],
    source: "https://github.com/hammambys/mumia-app",
    slug: "mumia",
    screenshots: ["/images/mumia.png"],
  },
  {
    title: "Full-stack website for consulting firm Cabinet Rabii",
    summary:
      "A website for the consulting firm 'Cabinet Rabii Absi' built with Node.js and Express.js",
    img: "/images/consulting_3.png",
    description: `This is a freelance project which consists of developing a website for the consulting firm 'Cabinet Rabii Absi'
      The website includes a landing page, a blog, appointement scheduling system, an admin dashboard to manage clients and blog posts ...`,
    features: [
      "Landing page",
      "Blog",
      "Appointment scheduling",
      "Admin dashboard",
      "Mobile Friendliness",
    ],
    tools: ["Express.js", "Node.js", "Handlebars"],
    source: "https://github.com/hammambys/site-consulting",
    slug: "consulting",
    screenshots: ["/images/consulting_1.jpg", "/images/consulting_2.jpg"],
  },
  {
    title: "PowerZone - Landing page",
    summary:
      "Landing page for local gym PowerZone built with HTML,CSS and Bootstrap",
    img: "/images/powerzone.PNG",
    description: `This is a freelance project which consists of developing a landing page for gym PowerZone
      The landing page features a modern design, reflecting the innovative spirit of the gym.`,
    features: ["Landing page", "Contact form", "Responsive design"],
    tools: ["HTML", "CSS", "Bootstrap"],
    source: "https://github.com/hammambys/power-zone-website",
    slug: "landing-page-powerzone",
    screenshots: ["/images/powerzone.png"],
  },
];

export const experience = [
  {
    date: "2023 — Present",
    title: "Software Engineer",
    link: "https://www.fisglobal.com/",
    company: "FIS",
    description:
      "Worked with the UBIX Bespoke team to develop, maintain and deliver custom enhancements in UBIX software for 10+ clients in financial sector around the world. Clients include BBVA, BNP, Pictet and more.",
    technologies: ["Python", "PL/SQL"],
  },
  {
    date: "Feb 2023 — Jul 2023",
    title: "Full-stack engineer intern",
    link: "https://gewinner.tn/",
    company: "Gewinner",
    description:
      "Designed, implemented and shipped a web application for medical device monitoring using MEAN stack",
    technologies: ["Angular", "MongoDB", "Express.js", "Node.js"],
  },
  {
    date: "Nov 2022 — Feb 2023",
    title: "Freelance developer",
    link: "https://gewinner.tn/",
    company: "Gewinner",
    description: `Created new features for the official company's website using Node.js, Angular and MongoDB.`,
    technologies: ["Angular", "MongoDB", "Express.js", "Node.js"],
  },
  {
    date: "Jun 2022 — Aug 2022",
    title: "QA engineer intern",
    link: "https://sama-consulting.com/",
    company: "Sama consulting",
    description: `Established a testing and validation process of medical laboratory management software using Cypress, identifying and reporting critical bugs.`,
    technologies: ["Cypress", "Jenkins", "Turtoise SVN"],
  },
];
