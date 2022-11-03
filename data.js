export const about = {
  text: "I am an established Software Developer currently studying Computer Science. Always motivated to learn new skills and my main goal is to build software that satisfy my clients needs",
  img: "/profil.jpg",
};

export const portfolio = [
  {
    title: "Manageme - E-learning platform",
    img: "manageme.PNG",
    description:
      "Web app to administer, document, track, and report on training programs.",
    features: [
      "Support of multiple content types (e.g., text, audio, images, video)",
      "User-generated content",
      "Structured storage of learning materials",
      "Course creation tools",
    ],
    tools: ["Angular", "Spring boot", "MySQL"],
    source: "https://github.com/hammambys/manageme",
  },
  {
    title: "Vehicle Detection System",
    description:
      "Detect object of interest (Car) in video frames and count number of cars detected.",
    features: ["Detect cars in highway"],
    tools: ["Python", "OpenCV"],
    source: "https://github.com/hammambys/road-cars-tracking",
  },
  {
    title: "Landing page - Association Robotique ENSI",
    img: "are.PNG",
    description:
      "Participated in the design and development of the official website of Association Robotique ENSI",
    features: ["Beautiful design", "Contact form"],
    tools: ["React", "Figma"],
    link: "http://www.ar-ensi.tn/",
  },
  {
    title: "Mumia - Marketplace website",
    img: "mumia.PNG",
    description: "Designed and developed full marketplace website from scratch",
    features: [
      "Payment system (Stripe,Paypal)",
      "Simple signup/signin process",
      "Vendor Dashboard",
      "Easy Custom Search & Navigation",
      "Mobile Friendliness",
      "Payment gateways(stripe,paypal)",
      "Ratings & Reviews",
    ],
    tools: ["MongoDB", "React", "Redux", "Express", "Node.js"],
    source: "https://github.com/hammambys/mumia-app",
  },
];
