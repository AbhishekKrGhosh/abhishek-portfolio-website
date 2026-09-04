import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-label">06 — CONTACT</div>

      <Reveal as="h2">
        Have an idea?
        <br />
        <span>Let's build it.</span>
      </Reveal>

      <Reveal as="p" delay={0.1}>
        I'm open to interesting engineering opportunities, challenging products
        and conversations around technology.
      </Reveal>

      <Reveal delay={0.18}>
        <a className="contact-email" href="mailto:abhishek.andri05@gmail.com">
          abhishek.andri05@gmail.com ↗
        </a>
      </Reveal>

      <Reveal delay={0.24} className="contact-buttons">
        <a href="/Abhishek_Kumar_CV.pdf" download className="btn primary">
          Download CV ↓
        </a>
      </Reveal>

      <Reveal delay={0.3} className="contact-links">
        <a href="https://linkedin.com/in/abhishek-ghosh-dev" target="_blank">
          LinkedIn
        </a>

        <a href="https://github.com/AbhishekKrGhosh" target="_blank">
          GitHub
        </a>

        <a href="tel:+918083208334">+91 80832 08334</a>
      </Reveal>
    </section>
  );
}
