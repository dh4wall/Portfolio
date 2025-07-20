import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate loading for UX
    setTimeout(() => {
      setShowMessage(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      // Scroll to message section
      if (messageRef.current) {
        messageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
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
                    placeholder="What’s your good name?"
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
                    placeholder="What’s your email address?"
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
          <div className="xl:col-span-7 min-h-96 contact-3d-container">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
        {showMessage && (
          <div ref={messageRef} className="contact-message">
            <h2 className="contact-message-title">
              Haha, this doesn't work!
            </h2>
            <p className="contact-message-text">
              But I can make you a custom component if you hire me! 😎
            </p>
            <div className="contact-message-socials">
              <a
                href="https://www.linkedin.com/in/dhawalshinde"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-message-link"
              >
                LinkedIn
              </a>
              <a
                href="mailto:dhawalshinde14@gmail.com"
                className="contact-message-link"
              >
                Email: dhawalshinde14@gmail.com
              </a>
              <a
                href="https://github.com/dh4wall"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-message-link"
              >
                GitHub
              </a>
              <a
                href="https://x.com/Dhaw4l"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-message-link"
              >
                Twitter
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;