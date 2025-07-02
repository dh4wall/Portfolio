import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

 // Rename this to your projects list
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";


export const projectCards = [
  {
    title: "Weather App",
    date: "2024",
    imgPath: "/images/weather_thumb.png", // For GlowCard
    logoPath: "/images/weather_logo.png",
    images: [ // Project showcase images
      "/images/weather_app1.png",
      "/images/weather_app2.png",
    ],
  },
  {
    title: "Portfolio Website",
    date: "2024",
    imgPath: "/images/portfolio_thumb.png",
    logoPath: "/images/portfolio_logo.png",
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
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="projects"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="My Projects"
          sub="🚀 Explore my Work"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {projectCards.map((project) => (
              <div key={project.title} className="exp-card-wrapper timeline-card">
                <div className="xl:w-2/6">
                  <GlowCard card={project}>
                    <div>
                      <img src={project.imgPath} alt="project-img" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={project.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{project.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{project.date}
                        </p>
                        <div className="flex flex-wrap gap-5">
                          {project.images.map((image, index) => (
                            <img key={index} src={image} alt={`project-${index}`} className="rounded-xl w-64 h-auto" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
