import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import WorkExperience from "./sections/WorkExperience";
import Education from "./sections/Education";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  // Two-stage: loader animates → fades out (isLoaded=true) → removed from DOM (loaderGone=true)
  const [isLoaded, setIsLoaded] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  const handleLoaderDone = () => {
    setIsLoaded(true);
    // Give the CSS fade-out 650ms to finish before removing from DOM
    setTimeout(() => setLoaderGone(true), 650);
  };

  return (
    <>
      {/* Loader sits on top as position:fixed — removed from DOM once done */}
      {!loaderGone && <Loader onComplete={handleLoaderDone} />}

      {/* Site content — always rendered (helps preload 3D models/videos during loader) */}
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <WorkExperience />
      <Education />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;