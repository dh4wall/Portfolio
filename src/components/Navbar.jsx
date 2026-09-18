import { useState, useEffect } from "react";

const navLinks = [
  { name: "Work",        link: "#work" },
  { name: "Projects",   link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education",  link: "#education" },
  { name: "Skills",     link: "#skills" },
  { name: "Contact",    link: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  const handleNavClick = (link) => {
    setMenuOpen(false);
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {/* Logo */}
        <a href="#hero" className="logo">
          Dhawal Shinde
        </a>

        {/* Desktop nav */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/docs/C2K231271_DhawalShinde_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn group"
        >
          <div className="inner">
            <span>Resume</span>
          </div>
        </a>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line mid ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(({ link, name }) => (
            <button
              key={name}
              className="mobile-menu-link"
              onClick={() => handleNavClick(link)}
            >
              {name}
            </button>
          ))}
          <a
            href="/docs/C2K231271_DhawalShinde_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-resume"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;