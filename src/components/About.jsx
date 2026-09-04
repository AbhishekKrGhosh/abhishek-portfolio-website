import Reveal from "./Reveal";

const stats = [
  { icon: "📡", value: "20×", label: "Livestream capacity scaled up" },
  { icon: "⚡", value: "90m → 30s", label: "Push notification delivery" },
  { icon: "👥", value: "2,000+", label: "Concurrent livestream users" },
  { icon: "🚀", value: "2+", label: "Years building real products" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-label">01 — ABOUT</div>

      <div className="about-grid">
        <Reveal>
          <h2>
            Building products,
            <br />
            <span>not just features.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="about-text">
          <p>
            I'm a mobile &amp; full-stack developer currently at{" "}
            <strong>Kindlife</strong>, where I spend my days in React Native,
            Node.js and real-time systems — building the app that people
            actually shop and livestream on.
          </p>

          <p>
            I like the messy, satisfying parts of engineering: livestreaming,
            quick commerce, checkout flows, deep links, push notifications and
            the real-time plumbing that holds it all together.
          </p>

          <p>
            More than anything, I care about how software <em>feels</em> to use
            — fast, stable, and a little bit delightful. That's the bar I hold
            my own work to.
          </p>
        </Reveal>
      </div>

      <div className="stats">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="stat-card">
            <span className="stat-icon">{stat.icon}</span>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
