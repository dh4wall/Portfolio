// Navigation links
const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
];

const words = [
  { text: "Software Developer", imgPath: "/images/ideas.svg" },
  { text: "Competitive Programmer", imgPath: "/images/concepts.svg" },
  { text: "Math Enthusiast", imgPath: "/images/designs.svg" },
  { text: "Software Developer", imgPath: "/images/ideas.svg" },
  { text: "Competitive Programmer", imgPath: "/images/concepts.svg" },
  { text: "Math Enthusiast", imgPath: "/images/designs.svg" },
  { text: "Software Developer", imgPath: "/images/ideas.svg" },
  { text: "Competitive Programmer", imgPath: "/images/concepts.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  { name: "Frontend Developer", imgPath: "/images/logos/react.png" },
  { name: "Full Stack Developer", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Devops", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  { name: "Frontend Developer", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Full Stack Developer", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "Backend Developer", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "Interactive Developer", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Devops", modelPath: "/models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

// ─── EDUCATION ───────────────────────────────────────────────────────────────
const educationData = [
  {
    degree: "B.E. — Computer Engineering",
    institute: "SCTR's Pune Institute of Computer Technology (PICT)",
    grade: "9.85 CGPA",
    year: "Sept 2023 – June 2027",
    description: "Currently pursuing B.E. in Computer Engineering. Active in competitive programming, open-source development, and building full-stack products.",
    icon: "monitor",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institute: "Vidya Valley North Point Jr. College",
    grade: "81%",
    year: "2022",
    description: "Completed 12th grade (Science stream) with focus on Mathematics, Physics & Chemistry.",
    icon: "graduation-cap",
  },
  {
    degree: "10th Grade — C.B.S.E",
    institute: "City International School",
    grade: "94.4%",
    year: "2020",
    description: "Completed 10th grade with distinction. Strong foundation in Mathematics and Science.",
    icon: "school",
  },
];

// ─── WORK EXPERIENCE ─────────────────────────────────────────────────────────
const workExperienceData = [
  {
    role: "Summer Intern",
    company: "TCS Innovation Labs",
    location: "Mumbai, Maharashtra",
    logo: "/images/logos/node.png",
    date: "June 2026 – Aug 2026",
    description: "Worked in agile sprints on a scalable data architecture for healthcare data ingestion, retrieval, and ML processing.",
    responsibilities: [
      "Engineered scalable backend services using Node.js and GraphQL, containerized with Podman for Azure deployment.",
      "Implemented event-driven architecture using Kafka to decouple system components.",
      "Collaborated in agile sprints to develop healthcare data pipelines optimized for ML algorithm processing.",
    ],
    techStack: ["Node.js", "GraphQL", "Kafka", "Podman", "Azure"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Agribid Private Limited",
    location: "Remote",
    logo: "/images/logos/react.png",
    date: "Jan 2026 – April 2026",
    description: "Developed a specialized API platform to facilitate Agristack integration with a responsive frontend and robust backend.",
    responsibilities: [
      "Developed a specialized API platform to facilitate Agristack integration.",
      "Built responsive and intuitive frontend interface using Next.js and Tailwind CSS.",
      "Engineered robust backend services using FastAPI with SQLite for efficient data management.",
    ],
    techStack: ["Next.js", "Tailwind CSS", "FastAPI", "SQLite"],
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
const achievementsData = [
  {
    title: "Meta Hacker Cup Round 2",
    value: "#1298",
    label: "Global Rank",
    description: "Achieved global rank of 1298 in Meta Hacker Cup Round 2.",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/1670498357553624",
    icon: "trophy",
    color: "#1877F2",
  },
  {
    title: "LeetCode Knight",
    value: "1860",
    label: "Max Rating",
    description: "Achieved Knight badge with a maximum rating of 1860 on LeetCode.",
    link: "https://leetcode.com/u/dh4wall/",
    icon: "sword",
    color: "#FFA116",
  },
  {
    title: "CodeChef — 3 Stars",
    value: "1641",
    label: "Max Rating",
    description: "Achieved a maximum rating of 1641 (3 Stars) on CodeChef.",
    link: "https://www.codechef.com/users/dh4wall",
    icon: "star",
    color: "#5B4638",
  },
  {
    title: "Codeforces Specialist",
    value: "1426",
    label: "Max Rating",
    description: "Achieved Specialist rank with a maximum rating of 1426 on Codeforces.",
    link: "https://codeforces.com/profile/dh4wall",
    icon: "target",
    color: "#1F8DD6",
  },
];

// ─── PROJECTS (categorized) ───────────────────────────────────────────────────
const projectCategories = [
  {
    id: "fullstack",
    label: "Full Stack",
    icon: "globe",
    projects: [
      {
        title: "PrepBuddy",
        date: "2024",
        imgPath: "/images/projectdetails/prepbuddyicon.png",
        description: "An AI-powered mock interview platform with voice-based interviews via Vapi and AI-generated questions using Gemini.",
        githubLink: "https://github.com/dh4wall/PrepBuddy",
        liveLink: "https://prep-buddy-seven.vercel.app/",
        videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858600/PrepBuddy_hdrgpj.mp4",
        techStack: ["Next.js", "Vapi", "Firebase", "Gemini AI"],
      },
      {
        title: "ScreenDrop",
        date: "2024",
        imgPath: "/images/screendrop_thumb.png",
        description: "A screen recording and sharing platform with cloud storage and easy sharing features.",
        githubLink: "https://github.com/dh4wall/ScreenDrop",
        liveLink: "https://screendrop.onrender.com/",
        videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858609/ScreenDrop_wwdz7h.mp4",
        techStack: ["Next.js", "BunnyCDN", "Arcjet"],
      },
      {
        title: "StockSage",
        date: "2024",
        imgPath: "/images/stock_thumb.png",
        description: "An AI-driven stock market analysis tool providing insights and predictions.",
        githubLink: "https://github.com/dh4wall/StockSage",
        liveLink: "https://stock-sage-mu.vercel.app/",
        videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858598/Stocksage_e55x2w.mp4",
        techStack: ["Recharts", "PostgreSQL", "Gemini AI"],
      },
      {
        title: "Giripremi",
        date: "2025",
        imgPath: "/images/projectdetails/prepbuddyicon.png",
        description: "A scalable shop operations platform with robust relational database schemas and performant backend architecture.",
        githubLink: "https://github.com/dh4wall/GiriPremi",
        liveLink: null,
        videoPath: null,
        techStack: ["FastAPI", "MySQL", "Python"],
      },
      {
        title: "PDF Extractor",
        date: "2024",
        imgPath: "/images/pdfextractor_thumb.png",
        description: "A website to upload, extract data from invoices, edit them, and save the modified versions with ease.",
        githubLink: "https://github.com/dh4wall/PDF-Extractor",
        liveLink: "https://pdf-extractor-web-murex.vercel.app/",
        videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858579/PDFextractor_egae7h.mp4",
        techStack: ["React.js", "MongoDB", "Gemini AI"],
      },
    ],
  },
  {
    id: "hackathon",
    label: "Hackathon",
    icon: "zap",
    projects: [
      {
        title: "SamudraWatch",
        date: "2025",
        imgPath: "/images/projectdetails/prepbuddyicon.png",
        description: "An ocean hazard analysis platform aggregating data from manual reports and real-time social media, with Redis caching reducing API latency by 60%.",
        githubLink: "https://github.com/dh4wall",
        liveLink: null,
        videoPath: "https://drive.google.com/file/d/1tcxi3fjnNeytGb86Zi2Z8IQoqOmKekXH/view?usp=sharing",
        techStack: ["Leaflet", "Redis", "FastAPI", "PostgreSQL"],
      },
      {
        title: "Sprintify",
        date: "2024",
        imgPath: "/images/sprintify_thumb.png",
        description: "A project management tool for agile teams with Kanban boards and task tracking built during a hackathon.",
        githubLink: "https://github.com/username/sprintify",
        liveLink: null,
        videoPath: null,
        techStack: ["Next.js", "Tailwind CSS", "Firebase"],
      },
    ],
  },
  {
    id: "systems",
    label: "Systems & Games",
    icon: "gamepad",
    projects: [
      {
        title: "SudokuUniverse",
        date: "2024",
        imgPath: "/images/sudoku_thumb.png",
        description: "An interactive Sudoku solver with step-by-step solutions using backtracking algorithms.",
        githubLink: "https://github.com/dh4wall/SudokuUniverse",
        liveLink: "https://sudoku-universe.vercel.app/",
        videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858589/SudokuUniverse_bq6np0.mp4",
        techStack: ["React.js", "Express.js", "Backtracking"],
      },
      {
        title: "BrickBreaker",
        date: "2024",
        imgPath: "/images/brick_thumb.png",
        description: "A classic arcade-style brick breaker game built with Python.",
        githubLink: "https://github.com/dh4wall/brick-breaker",
        liveLink: null,
        videoPath: null,
        techStack: ["PyGame", "Python"],
      },
    ],
  },
];

const expCards = [
  {
    review: "Dhawal brought creativity and technical expertise to the team, significantly improving our frontend performance.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Dhawal's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Dhawal's work on Appwrite's mobile app brought a high level of quality and efficiency.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review: "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png" },
  { name: "fb", imgPath: "/images/fb.png" },
  { name: "x", imgPath: "/images/x.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  educationData,
  workExperienceData,
  achievementsData,
  projectCategories,
};
