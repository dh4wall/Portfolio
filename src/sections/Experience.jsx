import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard"; // Re-added

export const projectCards = [
  {
    title: "PrepBuddy",
    date: "2024",
    imgPath: "/images/projectdetails/prepbuddyicon.png",
    description: "An AI-powered interview preparation platform with mock interviews and personalized feedback.",
    githubLink: "https://github.com/dh4wall/PrepBuddy",
    liveLink: "https://prep-buddy-seven.vercel.app/",
    videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858600/PrepBuddy_hdrgpj.mp4",
    images: [],
    techStack: ["Nextjs", "Vapi", "Firebase"],
  },
  {
    title: "ScreenDrop",
    date: "2024",
    imgPath: "/images/screendrop_thumb.png",
    description: "A screen recording and sharing platform with cloud storage and easy sharing features.",
    githubLink: "https://github.com/dh4wall/ScreenDrop",
    liveLink: "https://screendrop.onrender.com/",
    videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858609/ScreenDrop_wwdz7h.mp4",
    images: [],
    techStack: ["Nextjs", "BunnyCDN", "Arcjet"],
  },
  {
    title: "PDF Extractor",
    date: "2024",
    imgPath: "/images/pdfextractor_thumb.png",
    description: "A website to upload, extract data from invoices, edit them, and save the modified versions with ease.",
    githubLink: "https://github.com/dh4wall/PDF-Extractor",
    liveLink: "https://pdf-extractor-web-murex.vercel.app/",
    videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858579/PDFextractor_egae7h.mp4", // No video, will use GIF
    images: [],
    techStack: ["Reactjs", "MongoDB", "Gemini AI" ],
  },

  {
    title: "StockSage",
    date: "2024",
    imgPath: "/images/stock_thumb.png",
    description: "An AI-driven stock market analysis tool providing insights and predictions.",
    githubLink: "https://github.com/dh4wall/StockSage",
    liveLink: "https://stock-sage-mu.vercel.app/",
    videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858598/Stocksage_e55x2w.mp4",
    images: [],
    techStack: ["RE Charts", "PostgreSQL", "Gemini AI"],
  },

  {
    title: "SudokuUniverse",
    date: "2024",
    imgPath: "/images/sudoku_thumb.png",
    description: "An interactive Sudoku solver with step-by-step solutions using backtracking algorithms.",
    githubLink: "https://github.com/dh4wall/SudokuUniverse",
    liveLink: "https://sudoku-universe.vercel.app/",
    videoPath: "https://res.cloudinary.com/dro80pkoi/video/upload/v1757858589/SudokuUniverse_bq6np0.mp4",
    images: [],
    techStack: ["React.js", "Express.js", "backtracking" ],
  },
  
  {
    title: "Portfolio Website",
    date: "2024",
    imgPath: "/images/portfolio_thumb.png",
    description: "A personal portfolio website showcasing projects and skills.",
    githubLink: "https://github.com/dh4wall/Portfolio",
    liveLink: "https://dh4wall.vercel.app/",
    videoPath: null, // No video, will use GIF
    images: [],
    techStack: ["ReactJS", "GSAP", "Three.js"],
  },

  {
    title: "BrickBreaker",
    date: "2024",
    imgPath: "/images/brick_thumb.png",
    description: "A classic arcade-style brick breaker game built with JavaScript.",
    githubLink: "https://github.com/dh4wall/brick-breaker",
    videoPath: null,
    images: [],
    techStack: ["PyGame", "Python"],
  },
  {
    title: "Sprintify",
    date: "2024",
    imgPath: "/images/sprintify_thumb.png",
    description: "A project management tool for agile teams with Kanban boards and task tracking.",
    githubLink: "https://github.com/username/sprintify",
    videoPath: null,
    images: [],
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
  }
  
];

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    try {
      console.log("GSAP Initializing...");
      gsap.utils.toArray(".timeline-card").forEach((card) => {
        gsap.from(card, {
          xPercent: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".skills-section", {
        opacity: 0,
        yPercent: 30,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
      console.log("GSAP Initialized Successfully");
    } catch (error) {
      console.error("GSAP Error:", error);
    }
  }, []);

  return (
    <section
      id="projects"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="My Projects" sub="🚀 Explore my Work" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {projectCards.map((project) => (
              <div
                key={project.title}
                className="exp-card-wrapper timeline-card flex flex-col xl:flex-row gap-8"
              >
                <div className="xl:w-3/6">
                  <div className={`video-container rounded-xl overflow-hidden shadow-lg border border-blue-300 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,128,255,0.7)] ${!project.videoPath ? 'w-96' : ''}`}>
                    {project.videoPath ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                        style={{ objectFit: "cover" }}
                        onError={() => console.log("Video load failed:", project.videoPath)}
                      >
                        <source src={project.videoPath} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTlnaWlja2RlZXI5dWUyaTkwcXBsdGM1dmhpZngzdm10NDIxM2xtdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ggsPCNJznX7nX2RC6i/giphy.gif"
                        alt={`${project.title} placeholder`}
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="xl:w-3/6">
                  <h1 className="font-bold text-4xl xl:text-5xl mb-4 text-white">
                    {project.title}
                  </h1>
                  {/* Links between title and card */}
                  <div className="mb-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-50 underline hover:text-white mr-4 z-60"
                        style={{ pointerEvents: "auto", position: "relative" }}
                        onClick={() => console.log("Live link clicked:", project.liveLink)}
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-50 underline hover:text-white z-60"
                      style={{ pointerEvents: "auto", position: "relative" }}
                      onClick={() => console.log("GitHub link clicked:", project.githubLink)}
                    >
                      View on GitHub
                    </a>
                  </div>
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-30">
                    <GlowCard card={project}>
                      <div className="z-60">
                        <p className="my-5 text-white-50">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-blue-600 text-white-50 text-sm px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,128,255,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,128,255,0.7)] hover:bg-blue-500"
                              style={{ boxShadow: "0 0 5px rgba(0, 128, 255, 0.5)" }} // Base glow
                              onMouseEnter={(e) => (e.target.style.boxShadow = "0 0 15px rgba(0, 128, 255, 0.7)")}
                              onMouseLeave={(e) => (e.target.style.boxShadow = "0 0 5px rgba(0, 128, 255, 0.5)")}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </GlowCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-section mt-32">
          <TitleHeader title="Technical Skills" sub="🛠️ My Toolbox" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
            <div className="skills-category shadow-[0_0_10px_rgba(0,128,255,0.3)] rounded-lg p-4">
              <h3 className="text-2xl font-semibold text-blue-50 mb-4">Languages</h3>
              <ul className="space-y-2">
                <li className="skills-item bg-black-200 text-white-50">C++</li>
                <li className="skills-item bg-black-200 text-white-50">Python</li>
                <li className="skills-item bg-black-200 text-white-50">JavaScript/TypeScript</li>
              </ul>
            </div>
            <div className="skills-category shadow-[0_0_10px_rgba(0,128,255,0.3)] rounded-lg p-4">
              <h3 className="text-2xl font-semibold text-blue-50 mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="skills-item bg-black-200 text-white-50">ReactJS</li>
                <li className="skills-item bg-black-200 text-white-50">Next.js</li>
                <li className="skills-item bg-black-200 text-white-50">Tailwind CSS</li>
                <li className="skills-item bg-black-200 text-white-50">Redux</li>
                <li className="skills-item bg-black-200 text-white-50">threejs</li>
              </ul>
            </div>
            <div className="skills-category shadow-[0_0_10px_rgba(0,128,255,0.3)] rounded-lg p-4">
              <h3 className="text-2xl font-semibold text-blue-50 mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="skills-item bg-black-200 text-white-50">Express.js</li>
                <li className="skills-item bg-black-200 text-white-50">Python FastAPI</li>
                <li className="skills-item bg-black-200 text-white-50">WebSockets</li>
              </ul>
            </div>
            <div className="skills-category shadow-[0_0_10px_rgba(0,128,255,0.3)] rounded-lg p-4">
              <h3 className="text-2xl font-semibold text-blue-50 mb-4">Database</h3>
              <ul className="space-y-2">
                <li className="skills-item bg-black-200 text-white-50">MongoDB</li>
                <li className="skills-item bg-black-200 text-white-50">PostgreSQL</li>
                <li className="skills-item bg-black-200 text-white-50">MySQL</li>
                <li className="skills-item bg-black-200 text-white-50">Prisma</li>
                <li className="skills-item bg-black-200 text-white-50">Drizzle</li>
                <li className="skills-item bg-black-200 text-white-50">Firebase Firestore</li>
              </ul>
            </div>
            <div className="skills-category shadow-[0_0_10px_rgba(0,128,255,0.3)] rounded-lg p-4">
              <h3 className="text-2xl font-semibold text-blue-50 mb-4">Tools</h3>
              <ul className="space-y-2">
                <li className="skills-item bg-black-200 text-white-50">Git</li>
                <li className="skills-item bg-black-200 text-white-50">Figma</li>
                <li className="skills-item bg-black-200 text-white-50">Bootstrap</li>
                <li className="skills-item bg-black-200 text-white-50">ShadCN</li>
                <li className="skills-item bg-black-200 text-white-50">Canvas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;