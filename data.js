export const about = {
  text: "I am an established Software Developer currently studying Computer Science. Always motivated to learn new skills and my main goal is to build software that satisfy my clients needs",
  img: "/profil.jpg",
};

export const portfolio = [
  {
    title: "Manageme - E-learning platform",
    img: "/manageme.PNG",
    summary:
      "Web app to administer, document, track, and report on training programs.",
    description:
      "Manageme is a comprehensive web application designed to administer, document, track, and report on training programs and educational courses. This platform supports multiple content types, allowing educators and trainers to create a rich, interactive learning experience. It enables users to generate their own content, providing a collaborative and customizable learning environment.",
    features: [
      "Support of multiple content types (e.g., text, audio, images, video)",
      "User-generated content",
      "Structured storage of learning materials",
      "Course creation tools",
    ],
    tools: ["Angular", "Spring boot", "MySQL"],
    source: "https://github.com/hammambys/manageme",
    slug: "manageme",
  },
  {
    title: "Vehicle Detection System",
    summary:
      "Detect object of interest (Car) in video frames and count number of cars detected.",
    description: "",
    features: ["Detect cars in highway"],
    tools: ["Python", "OpenCV"],
    source: "https://github.com/hammambys/road-cars-tracking",
    slug: "vehicle-detection",
  },
  {
    title: "Landing page - Association Robotique ENSI",
    img: "/are.PNG",
    summary:
      "Design and development of the official website of Association Robotique ENSI",
    description:
      "I was involved with two college peers in the design and development of the official website for the Association Robotique ENSI. The landing page features a sleek and modern design, reflecting the innovative spirit of the association. It includes a contact form to facilitate communication with members and visitors.",
    features: ["Beautiful design", "Contact form"],
    tools: ["React", "Figma"],
    link: "http://www.ar-ensi.tn/",
    slug: "landing-page-are",
  },
  {
    title: "Mumia - Marketplace website",
    img: "/mumia.PNG",
    summary: "Develop full marketplace website from scratch",
    description:
      "Mumia is a fully-featured marketplace website designed from scratch to facilitate online buying and selling. This platform includes a range of features to enhance the user experience, such as a streamlined signup/signin process, vendor dashboards, and integrated payment systems. It is designed to be mobile-friendly, ensuring accessibility across all devices.",
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
    slug: "mumia",
  },
];
