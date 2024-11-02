export const about = {
  text: `Welcome to my corner of the digital world! I'm Hammem Ben Younes, a passionate developer
  with a desire for turning ideas into interactive experiences. With a observant eye for detail and a love
  for clean, efficient code, I specialize in crafting custom web, mobile and desktop solutions.
  Let's collaborate to bring your vision to life!`,
  img: "/images/profil.jpg",
};

export const portfolio = [
  {
    title: "Manageme - E-learning platform",
    summary:"An e-learning project management courses platform built with Angular and Spring Boot that enables interactive course management ",
    description:
      `This was an academic project at the end of second year in college which is an e-learning platform designed to manage training programs and educational courses related to project management. 
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
    screenshots:["/images/manageme_1.jpg","/images/manageme_2.jpg"],
    img:"/images/manageme_1.jpg"
  },
  {
    title: "Landing page - Association Robotique ENSI",
    summary:"Landing page for the official website of Association Robotique ENSI",
    img: "/images/are.PNG",
    description:
      `This is my first real-world coding project while I was in college which is the design and development of the official website for the Association Robotique ENSI. 
      The landing page features a modern design, reflecting the innovative spirit of the association.`,
    features: ["Landing page", "Contact form","Photo gallery"],
    tools: ["React", "Figma","Bootstrap"],
    link: "http://www.ar-ensi.tn/",
    slug: "landing-page-are",
    screenshots:["/images/are.png"]

  },
  {
    title: "Mumia - Marketplace website",
    summary:"A jumia.com clone built with React and Express.js that enables online buying and selling of products",
    img: "/images/mumia.PNG",
    description:
      `This is a fun project i did which consists of cloning jumia.com, a popular e-commerce platform in my region. 
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
    screenshots:["/images/mumia.png"]
  },
  {
    title: "Cabinet Rabii Absi website",
    summary:"A website for the consulting firm 'Cabinet Rabii Absi' built with Node.js and Express.js",
    img: "/images/consulting_2.jpg",
    description:
      `This is a freelance project which consists of developing a website for the consulting firm 'Cabinet Rabii Absi'
      The website includes a landing page, a blog, appointement scheduling system, an admin dashboard to manage clients and blog posts ...`,
    features: [
      "Landing page",
      "Blog",
      "Appointment scheduling",
      "Admin dashboard",
      "Mobile Friendliness"
    ],
    tools: ["Express.js", "Node.js","Handlebars"],
    source: "https://github.com/hammambys/site-consulting",
    slug: "consulting",
    screenshots:["/images/consulting_1.jpg","/images/consulting_2.jpg"]
  },
];

export const experience = [
  {
    date: "2023 — Present",
    title: "Software Engineer",
    link:"https://www.fisglobal.com/",
    company: "FIS",
    description: "Worked with the UBIX Bespoke team to develop, maintain and deliver custom enhancements in UBIX software for 10+ clients in financial sector around the world. Clients include BBVA, BNP, Pictet and more.",
    technologies: ["Python", "PL/SQL"],
  },
  {
    date: "Feb 2023 — Jul 2023",
    title: "Full-stack engineer intern",
    link:"https://gewinner.tn/",
    company: "Gewinner",
    description: "Designed, implemented and shipped a web application for medical device monitoring using MEAN stack",
    technologies: ["Angular", "MongoDB","Express.js","Node.js"],
  },
  {
    date: "Nov 2022 — Feb 2023",
    title: "Freelance developer",
    link:"https://gewinner.tn/",
    company: "Gewinner",
    description: `Created new features for the official company's website using Node.js, Angular and MongoDB.`,
    technologies: ["Angular", "MongoDB","Express.js","Node.js"],
  },
  {
    date: "Jun 2022 — Aug 2022",
    title: "QA engineer intern",
    link:"https://sama-consulting.com/",
    company: "Sama consulting",
    description: `Established a testing and validation process of medical laboratory management software using Cypress, identifying and reporting critical bugs.`,
    technologies: ["Cypress", "Jenkins","Turtoise SVN"],
  },

];