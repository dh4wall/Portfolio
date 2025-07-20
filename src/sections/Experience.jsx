import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

export const projectCards = [
  {
    title: "PrepBuddy",
    date: "2024",
    imgPath: "/images/projectdetails/prepbuddyicon.png",
    description: "An AI-powered interview preparation platform with mock interviews and personalized feedback.",
    githubLink: "https://github.com/username/prepbuddy",
    images: [
      "/images/prepbuddy_home.png",
      "/images/prepbuddy_interview.png",
    ],
  },
  {
    title: "ScreenDrop",
    date: "2024",
    imgPath: "/images/screendrop_thumb.png",
    description: "A screen recording and sharing platform with cloud storage and easy sharing features.",
    githubLink: "https://github.com/username/screendrop",
    images: [
      "/images/screendrop_record.png",
      "/images/screendrop_dashboard.png",
    ],
  },
  {
    title: "SudokuSolver",
    date: "2024",
    imgPath: "/images/sudoku_thumb.png",
    description: "An interactive Sudoku solver with step-by-step solutions using backtracking algorithms.",
    githubLink: "https://github.com/username/sudokusolver",
    images: [
      "/images/sudoku_input.png",
      "/images/sudoku_solve.png",
    ],
  },
  {
    title: "DoodleHub",
    date: "2024",
    imgPath: "/images/doodle_thumb.png",
    description: "A collaborative drawing app for real-time sketching with friends.",
    githubLink: "https://github.com/username/doodlehub",
    images: [
      "/images/doodle_collab.png",
      "/images/doodle_canvas.png",
    ],
  },
  {
    title: "BrickBreaker",
    date: "2024",
    imgPath: "/images/brick_thumb.png",
    description: "A classic arcade-style brick breaker game built with JavaScript.",
    githubLink: "https://github.com/username/brickbreaker",
    images: [
      "/images/brick_gameplay.png",
      "/images/brick_start.png",
    ],
  },
  {
    title: "Sprintify",
    date: "2024",
    imgPath: "/images/sprintify_thumb.png",
    description: "A project management tool for agile teams with Kanban boards and task tracking.",
    githubLink: "https://github.com/username/sprintify",
    images: [
      "/images/sprintify_board.png",
      "/images/sprintify_tasks.png",
    ],
  },
  {
    title: "Portfolio Website",
    date: "2024",
    imgPath: "/images/portfolio_thumb.png",
    description: "A personal portfolio website showcasing projects and skills.",
    githubLink: "https://github.com/username/portfolio",
    images: [
      "/images/portfolio_home.png",
      "/images/portfolio_about.png",
    ],
  },
];

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate card sliding in from the left
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate expText sliding in from the right
      const expText = card.querySelector(".expText");
      gsap.from(expText, {
        opacity: 0,
        xPercent: 100,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate skills section
    gsap.from(".skills-section", {
      opacity: 0,
      yPercent: 50,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
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
              <div key={project.title} className="exp-card-wrapper timeline-card">
                <div className="xl:w-2/6">
                  <h1 className="font-bold text-4xl xl:text-5xl">{project.title}</h1>
                </div>
                <div className="xl:w-4/6">
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <GlowCard card={project}>
                      <div>
                        <p className="my-5 text-white-50">🗓️ {project.date}</p>
                        <p className="text-white-50 mb-5">{project.description}</p>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-50 underline hover:text-white"
                        >
                          View on GitHub
                        </a>
                        <div className="flex flex-wrap gap-5 mt-5">
                          {project.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${project.title}-${index}`}
                              className="rounded-xl w-64 h-auto"
                            />
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
            <div className="skills-category">
              <h3 className="text-2xl font-semibold text-blue-50 mb-4">Languages</h3>
              <ul className="space-y-2">
                <li className="skills-item bg-black-200 text-white-50">C++</li>
                <li className="skills-item bg-black-200 text-white-50">Python</li>
                <li className="skills-item bg-black-200 text-white-50">JavaScript/TypeScript</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3 className="text-2xl font-semibold text-blue-50 mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="skills-item bg-black-200 text-white-50">ReactJS</li>
                <li className="skills-item bg-black-200 text-white-50">Next.js</li>
                <li className="skills-item bg-black-200 text-white-50">Tailwind CSS</li>
                <li className="skills-item bg-black-200 text-white-50">Redux</li>
                <li className="skills-item bg-black-200 text-white-50">threejs</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3 className="text-2xl font-semibold text-blue-50 mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="skills-item bg-black-200 text-white-50">Express.js</li>
                <li className="skills-item bg-black-200 text-white-50">Python FastAPI</li>
                <li className="skills-item bg-black-200 text-white-50">WebSockets</li>
              </ul>
            </div>
            <div className="skills-category">
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
            <div className="skills-category">
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