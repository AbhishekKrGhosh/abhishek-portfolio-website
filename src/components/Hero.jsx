import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">📱 APP DEVELOPER · SOFTWARE ENGINEER</p>

        <h1>
          Hi, I'm Abhishek
          <br />
          <span>I build apps that people love.</span>
        </h1>

        <p className="hero-description">
          I'm a mobile-first developer crafting React Native and full-stack
          products that feel warm, fast and reliable. Currently building the
          shopping and livestream experience at <strong>Kindlife</strong> —
          turning tricky engineering problems into simple, delightful screens.
        </p>

        <div className="hero-buttons">
          <a href="#experience" className="btn primary">
            My work at Kindlife →
          </a>

          <a href="/Abhishek_Kumar_CV.pdf" download className="btn secondary">
            Download CV ↓
          </a>

          <a href="#contact" className="btn ghost">
            Let's talk
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://linkedin.com/in/abhishek-ghosh-dev" target="_blank">
            LinkedIn ↗
          </a>

          <a href="https://github.com/AbhishekKrGhosh" target="_blank">
            GitHub ↗
          </a>

          <a href="mailto:abhishek.andri05@gmail.com">Email ↗</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="orb" />

        <motion.div
          className="phone-mockup"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="phone-camera" />
          <div className="phone-screen">
            <div className="app-topbar">
              <span className="app-dot" />
              <span className="app-title">Kindlife</span>
            </div>

            <div className="app-card app-card-live">
              <span className="live-badge">● LIVE</span>
              <div className="app-card-bars">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="app-card app-card-row" />
            <div className="app-card app-card-row" />

            <div className="app-tabbar">
              <span className="tab-dot active" />
              <span className="tab-dot" />
              <span className="tab-dot" />
              <span className="tab-dot" />
            </div>

            <div className="phone-home-bar" />
          </div>
        </motion.div>

        <motion.div
          className="floating-tag tag-one"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          React Native
        </motion.div>

        <motion.div
          className="floating-tag tag-two"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          iOS · Android
        </motion.div>

        <motion.div
          className="floating-tag tag-three"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Node.js
        </motion.div>
      </motion.div>
    </section>
  );
}
