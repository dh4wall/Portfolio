import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import Icon from "../components/Icon";
import { projectCategories } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const GIF_FALLBACK =
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTlnaWlja2RlZXI5dWUyaTkwcXBsdGM1dmhpZngzdm10NDIxM2xtdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ggsPCNJznX7nX2RC6i/giphy.gif";

const ProjectCard = ({ project }) => (
  <div className="proj-card card-border rounded-xl overflow-hidden group">
    {/* Media */}
    <div className="proj-card-media">
      {project.videoPath && !project.videoPath.includes("drive.google") ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={project.videoPath} type="video/mp4" />
        </video>
      ) : (
        <img
          src={project.imgPath || GIF_FALLBACK}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = GIF_FALLBACK;
          }}
        />
      )}
      {/* Hover overlay */}
      <div className="proj-card-overlay">
        <div className="proj-card-links">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link-btn"
            >
              <Icon name="external-link" size={13} strokeWidth={2.5} /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link-btn proj-link-ghost"
            >
              <Icon name="github" size={13} strokeWidth={2.5} /> GitHub
            </a>
          )}
          {project.videoPath && project.videoPath.includes("drive.google") && (
            <a
              href={project.videoPath}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link-btn"
            >
              <Icon name="external-link" size={13} strokeWidth={2.5} /> Watch Demo
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Info */}
    <div className="proj-card-body">
      <div className="proj-card-top">
        <h3 className="proj-card-title">{project.title}</h3>
        <span className="proj-card-year">{project.date}</span>
      </div>
      <p className="proj-card-desc">{project.description}</p>
      <div className="proj-card-tags">
        {project.techStack.map((tech, i) => (
          <span key={i} className="proj-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState(projectCategories[0].id);

  useGSAP(() => {
    gsap.from(".proj-tab-bar", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: "#projects", start: "top 80%", once: true },
    });
  });

  const activeCategory = projectCategories.find((c) => c.id === activeTab);

  return (
    <section id="projects" className="flex-center section-padding xl:px-0">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="My Projects" sub="— Explore my Work" />

        {/* Tab bar */}
        <div className="proj-tab-bar">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`proj-tab-btn ${activeTab === cat.id ? "active" : ""}`}
            >
              <span className="proj-tab-icon"><Icon name={cat.icon} size={14} strokeWidth={2} /></span>
              <span>{cat.label}</span>
              <span className="proj-tab-count">{cat.projects.length}</span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="proj-cards-grid">
          {activeCategory?.projects.map((project, i) => (
            <ProjectCard key={`${activeTab}-${i}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;