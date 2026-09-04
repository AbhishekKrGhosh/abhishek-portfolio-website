import Reveal from "./Reveal";
import kindlifeLogo from "../assets/kl.webp";

const points = [
  "Owned end-to-end development and maintenance of the Kindlife React Native application, building reusable components and scalable architecture.",
  "Led the React Native 0.73 → 0.85 upgrade, resolving native module, dependency and New Architecture compatibility issues.",
  "Built native bridge modules using Kotlin and Swift for location services and reverse geocoding.",
  "Engineered a Node.js Firebase Cloud Messaging service, reducing notification delivery from approximately 90 minutes to under 30 seconds.",
  "Built Socket.IO real-time infrastructure for cart, wishlist synchronization and livestream events.",
  "Optimized livestream infrastructure from ~100 to 2,000+ concurrent users, increasing capacity by approximately 20×.",
  "Implemented Android App Links and iOS Universal Links, replacing Firebase Dynamic Links.",
  "Designed a custom OTA update system for React Native and managed end-to-end Play Store and App Store releases.",
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-label">03 — EXPERIENCE</div>

      <Reveal className="experience-header">
        <div className="company-name">
          <img
            src={kindlifeLogo}
            alt="Kindlife logo"
            className="company-logo"
          />

          <div>
            <h2>Kindlife</h2>
            <p className="role">Associate Software Developer</p>
          </div>
        </div>

        <span className="date">Sep 2024 — Present</span>
      </Reveal>

      <div className="experience-content">
        <Reveal delay={0.1} className="company-intro">
          <p>Gurugram, Haryana</p>

          <div className="tech-pills">
            <span>React Native</span>
            <span>Node.js</span>
            <span>Socket.IO</span>
            <span>Kotlin</span>
            <span>Swift</span>
          </div>

          <div className="store-links">
            <span className="store-links-label">Live on</span>

            <a
              href="https://play.google.com/store/apps/details?id=com.kindlife&hl=en_IN"
              target="_blank"
            >
              Google Play ↗
            </a>

            <a
              href="https://apps.apple.com/in/app/kindlife/id1558677327"
              target="_blank"
            >
              App Store ↗
            </a>
          </div>
        </Reveal>

        <div className="experience-points">
          {points.map((point, i) => (
            <Reveal as="article" key={point} delay={i * 0.06}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{point}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
