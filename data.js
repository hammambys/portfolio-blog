export const about = {
  text: `Welcome to my corner of the digital world! I'm Hammem Ben Younes, a passionate developer
  with a desire for turning ideas into interactive experiences. With a observant eye for detail and a love
  for clean, efficient code, I specialize in crafting custom web, mobile and desktop solutions.
  Let's collaborate to bring your vision to life!`,
  img: "/profil.jpg",
};

export const portfolio = [
  {
    title: "Manageme - E-learning platform",
    img: "/manageme.PNG",
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
  },
  {
    title: "Landing page - Association Robotique ENSI",
    img: "/are.PNG",
    description:
      `This is my first real-world coding project while I was in college. Which is the design and development of the official website for the Association Robotique ENSI. 
      The landing page features a modern design, reflecting the innovative spirit of the association.`,
    features: ["Landing page", "Contact form","Photo gallery"],
    tools: ["React", "Figma","Bootstrap"],
    link: "http://www.ar-ensi.tn/",
    slug: "landing-page-are",
  },
  {
    title: "Mumia - Marketplace website",
    img: "/mumia.PNG",
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
  },
];

export const experience = [
  {
    date: "2023 — Present",
    title: "Software Engineer",
    company: "FIS",
    description: "Worked with the UBIX Bespoke team to develop and maintain custom enhancements in UBIX software for 10+ clients in financial sector around the world",
    technologies: ["Python", "PL/SQL"],
  }
];