import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import Icon from "../components/Icon";
import ContactExperience from "../components/models/contact/ContactExperience";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhawalshinde",
    icon: "linkedin",
    color: "#0077B5",
  },
  {
    label: "GitHub",
    href: "https://github.com/dh4wall",
    icon: "github",
    color: "#d9ecff",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/Dhaw4l",
    icon: "twitter",
    color: "#1DA1F2",
  },
  {
    label: "dhawalshinde14@gmail.com",
    href: "mailto:dhawalshinde14@gmail.com",
    icon: "mail",
    color: "#EA4335",
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setShowMessage(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => {
        if (messageRef.current) {
          messageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }, 1200);
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="— Have questions or ideas? Let's connect."
        />

        <div className="contact-grid mt-16">
          {/* Form Column */}
          <div className="contact-form-col">
            <div className="flex-center card-border rounded-xl p-10 h-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* 3D Model Column */}
          <div className="contact-3d-col">
            <div className="contact-3d-inner bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>

        {/* Easter Egg Message */}
        {showMessage && (
          <div ref={messageRef} className="contact-easter-egg">
            <div className="easter-egg-emoji">
              <Icon name="check-circle" size={48} strokeWidth={1.5} className="text-blue-400 mx-auto" />
            </div>
            <h2 className="easter-egg-title">
              Haha, this doesn't actually send!
            </h2>
            <p className="easter-egg-subtitle">
              But I'm just a message away. Reach me through any of these:
            </p>
            <div className="easter-egg-links">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="easter-egg-link-btn"
                >
              <span className="easter-egg-link-icon">
                    <Icon name={s.icon} size={15} strokeWidth={2} style={{ color: s.color }} />
                  </span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;