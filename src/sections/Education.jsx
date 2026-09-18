import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import Icon from "../components/Icon";
import { educationData } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    gsap.utils.toArray(".edu-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    gsap.fromTo(
      ".edu-timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: "#education",
          start: "top 70%",
          once: true,
        },
      }
    );
  });

  return (
    <section id="education" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Education Journey"
          sub="— Building Knowledge, One Milestone at a Time"
        />

        <div className="edu-timeline mt-20">
          {/* Vertical line */}
          <div className="edu-timeline-track">
            <div className="edu-timeline-line" />
          </div>

          <div className="edu-cards-col">
            {educationData.map((item, index) => (
              <div key={index} className="edu-card-row">
                {/* Timeline dot */}
                <div className="edu-dot-wrapper">
                  <div className="edu-dot">
                    <Icon name={item.icon} size={16} strokeWidth={2} className="text-blue-300" />
                  </div>
                </div>

                {/* Card */}
                <div className="edu-card card-border rounded-2xl p-6 md:p-8 flex-1">
                  {/* Year badge */}
                  <span className="edu-year-badge">{item.year}</span>

                  <h3 className="edu-degree">{item.degree}</h3>
                  <p className="edu-institute">{item.institute}</p>

                  {/* Grade pill */}
                  <div className="edu-grade-row">
                    <span className="edu-grade-pill">
                      <Icon name="trophy" size={13} strokeWidth={2} /> {item.grade}
                    </span>
                  </div>

                  <p className="edu-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
