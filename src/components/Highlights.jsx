import Reveal from "./Reveal";

const highlights = [
  {
    icon: "📈",
    title: "Scaled livestream to 2,000+ viewers",
    detail:
      "Re-engineered Kindlife's livestream infrastructure from ~100 to 2,000+ concurrent users — a 20× jump in capacity, without the app breaking a sweat.",
  },
  {
    icon: "🔔",
    title: "Notifications: 90 minutes → 30 seconds",
    detail:
      "Built a Node.js + Firebase Cloud Messaging service that turned a 90-minute notification delay into a near-instant, sub-30-second delivery.",
  },
  {
    icon: "🧩",
    title: "Owned the Kindlife app, end to end",
    detail:
      "Led development and maintenance of the Kindlife React Native app — reusable components, clean architecture, and releases people can trust.",
  },
  {
    icon: "⬆️",
    title: "React Native 0.73 → 0.85 upgrade",
    detail:
      "Navigated native module breakages, dependency conflicts and New Architecture migration to bring the app fully up to date.",
  },
  {
    icon: "🔗",
    title: "Native bridges & deep linking",
    detail:
      "Wrote Kotlin & Swift bridge modules for location and reverse geocoding, and shipped App Links / Universal Links to replace Firebase Dynamic Links.",
  },
  {
    icon: "🛠️",
    title: "Custom OTA update system",
    detail:
      "Designed an in-house over-the-air update system for React Native and managed end-to-end Play Store and App Store releases.",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="section highlights">
      <div className="section-label">02 — HIGHLIGHTS</div>

      <Reveal>
        <h2 className="section-title">
          Moments I'm <span>proud of.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="highlights-intro">
          A few things I've shipped and grown at Kindlife that I still smile
          about.
        </p>
      </Reveal>

      <div className="highlights-grid">
        {highlights.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.08}
            className="highlight-card"
          >
            <span className="highlight-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
