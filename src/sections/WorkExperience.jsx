import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import Icon from "../components/Icon";
import { workExperienceData, achievementsData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".work-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        }
      );
    });

    gsap.utils.toArray(".ach-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.5, delay: i * 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".ach-grid", start: "top 85%", once: true },
        }
      );
    });
  });

  return (
    <section id="experience" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">

        {/* ── Work Experience ── */}
        <TitleHeader title="Work Experience" sub="— Where I've Applied My Skills" />
        <div className="work-cards-grid mt-16">
          {workExperienceData.map((exp, index) => (
            <div key={index} className="work-card card-border rounded-2xl p-8">
              {/* Header */}
              <div className="work-card-header">
                <div className="work-logo-wrapper">
                  <img src={exp.logo} alt={exp.company} />
                </div>
                <div className="work-header-text">
                  <h3 className="work-role">{exp.role}</h3>
                  <p className="work-company">{exp.company}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="work-date-badge">{exp.date}</span>
                    <span className="work-location-badge">
                      <Icon name="map-pin" size={11} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '3px' }} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="work-description">{exp.description}</p>

              {/* Responsibilities */}
              <ul className="work-responsibilities">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="work-responsibility-item">
                    <span className="work-bullet">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="work-tech-stack">
                {exp.techStack.map((tech, i) => (
                  <span key={i} className="work-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Achievements ── */}
        <div className="mt-28">
          <TitleHeader title="Achievements" sub="— Competitive Programming & Beyond" />
          <div className="ach-grid mt-12">
            {achievementsData.map((ach, i) => (
              <a
                key={i}
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ach-card card-border rounded-2xl p-6 group"
              >
                <div className="ach-icon">
                  <Icon name={ach.icon} size={26} strokeWidth={1.75} style={{ color: ach.color }} />
                </div>
                <div className="ach-value">{ach.value}</div>
                <div className="ach-label">{ach.label}</div>
                <div className="ach-title">{ach.title}</div>
                <p className="ach-desc">{ach.description}</p>
                <div className="ach-arrow">↗</div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
