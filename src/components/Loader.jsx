import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Individual floating particle
const Particle = ({ style }) => (
  <div className="loader-particle" style={style} />
);

const Loader = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const ringRef = useRef(null);
  const ring2Ref = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const barRef = useRef(null);
  const pctRef = useRef(null);
  const tagRef = useRef(null);
  const glowRef = useRef(null);

  // Build 24 random particles — memoised so they don't regenerate
  const [particles] = useState(() =>
    Array.from({ length: 24 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${2 + Math.random() * 2.5}px`,
      height: `${2 + Math.random() * 2.5}px`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
      opacity: 0.15 + Math.random() * 0.4,
    }))
  );

  useEffect(() => {
    // Prevent body scroll while loading
    document.body.style.overflow = "hidden";

    const TOTAL_DURATION = 2.8; // total loading feel

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.body.style.overflow = "";
        onComplete?.();
      },
    });

    // 1. Glow + rings appear
    tl.fromTo(
      glowRef.current,
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 0.9 }
    )
      .fromTo(
        ringRef.current,
        { opacity: 0, scale: 0.4, rotation: -120 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.85, ease: "back.out(1.6)" },
        "<+0.05"
      )
      .fromTo(
        ring2Ref.current,
        { opacity: 0, scale: 0.3, rotation: 120 },
        { opacity: 0.45, scale: 1, rotation: 0, duration: 0.85, ease: "back.out(1.6)" },
        "<+0.08"
      )
      // 2. Name slides up
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 36, letterSpacing: "0.25em" },
        { opacity: 1, y: 0, letterSpacing: "-0.02em", duration: 0.75 },
        "-=0.4"
      )
      // 3. Subtitle
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.25"
      )
      // 4. Tag line
      .fromTo(
        tagRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.1"
      )
      // 5. Progress bar fills up — drives the percentage counter
      .fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: TOTAL_DURATION - 1.2,
          ease: "power1.inOut",
          transformOrigin: "left center",
          onUpdate() {
            const pct = Math.round(this.progress() * 100);
            if (pctRef.current) pctRef.current.textContent = `${pct}%`;
          },
        },
        "-=0.1"
      )
      // 6. Fade out overlay
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.55,
        ease: "power2.inOut",
      });

    // Keep ring spinning throughout
    gsap.to(ringRef.current, {
      rotation: "+=360",
      duration: 7,
      repeat: -1,
      ease: "none",
    });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div ref={overlayRef} className="loader-overlay">
      {/* Animated particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      {/* Radial gradient glow */}
      <div ref={glowRef} className="loader-glow" />

      <div className="loader-content">
        {/* Outer decorative rings */}
        <div className="loader-rings-wrap">
          <div ref={ringRef} className="loader-ring loader-ring-outer" />
          <div ref={ring2Ref} className="loader-ring loader-ring-inner" />

          {/* Center name block */}
          <div className="loader-center">
            <h1 ref={nameRef} className="loader-name">
              D<span className="loader-accent">H</span>AWAL
            </h1>
            <p ref={subtitleRef} className="loader-subtitle">
              Software Developer
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="loader-bar-wrap">
          <div className="loader-bar-track">
            <div ref={barRef} className="loader-bar" />
          </div>
          <span ref={pctRef} className="loader-pct">0%</span>
        </div>

        <p ref={tagRef} className="loader-tag">Initializing portfolio...</p>
      </div>
    </div>
  );
};

export default Loader;
