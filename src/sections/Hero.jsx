import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { useMediaQuery } from "react-responsive";

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

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
    gsap.fromTo(
      ".hero-sub-text",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(
      ".hero-cta",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.8, duration: 0.7, ease: "power2.out" }
    );
  });

  return (
    <section id="hero" className="hero-section">
      {/* Background image */}
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Text Content */}
        <header className="hero-left">
          <div className="hero-text">
            <h1>
              I&apos;m a{" "}
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span key={index} className="word-item">
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 flex-shrink-0"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
          </div>

          <p className="hero-sub-text text-white-50 md:text-xl relative z-10 pointer-events-none">
            Hi, I&apos;m Dhawal — a developer based in Pune, India. I build
            fast, scalable, and delightful digital experiences.
          </p>

          {/* Quick stats */}
          <div className="hero-quick-stats">
            <div className="hero-stat">
              <span className="hero-stat-val">9.85</span>
              <span className="hero-stat-lbl">CGPA</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-val">1860</span>
              <span className="hero-stat-lbl">LeetCode</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-val">10+</span>
              <span className="hero-stat-lbl">Projects</span>
            </div>
          </div>

          {/* CTA — always visible, especially critical on mobile */}
          <div className="hero-cta">
            <Button
              text="Explore my work"
              className="md:w-80 md:h-16 w-full h-14"
              id="counter"
            />
            {/* Mobile hint — subtle scroll nudge */}
            {isMobile && (
              <p className="hero-mobile-hint">
                Tap the button above to navigate ↑
              </p>
            )}
          </div>
        </header>

        {/* RIGHT: 3D Model — desktop only via CSS (display:none on mobile) */}
        <figure className="hero-right">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/* Mobile 3D — decorative, pointer-events off so page scrolls */}
      {isMobile && (
        <div className="hero-3d-mobile">
          <HeroExperience />
        </div>
      )}
    </section>
  );
};

export default Hero;