import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    type: "FULL STACK · MERN",
    name: "Shared Diary",
    description:
      "A collaborative diary platform where multiple people can write, edit and journal together in real time — with secure logins and account-wide theming.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "Redux Toolkit",
    ],
    links: [
      { label: "Live Demo", href: "https://shared-diary-2.onrender.com" },
      {
        label: "GitHub",
        href: "https://github.com/AbhishekKrGhosh/shared_diary",
      },
    ],
    features: [
      "JWT Authentication",
      "Google OAuth",
      "Real-time collaboration",
      "Redux Toolkit",
      "Encrypted passwords",
      "Custom themes",
    ],
  },
  {
    number: "02",
    type: "FULL STACK · MERN · CHROME EXTENSION",
    name: "JobTracker",
    description:
      "A job application tracker with a clean dashboard, plus a companion Chrome extension that logs applications straight from the job listing — and syncs resumes to Google Drive so nothing gets lost.",
    tech: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google OAuth",
      "Google Drive API",
    ],
    links: [
      { label: "Live Demo", href: "https://applytracker-xzub.onrender.com" },
    ],
    features: [
      "Chrome extension logging",
      "Google OAuth + Drive sync",
      "Resume tracking",
      "Search & status filters",
      "Toast notifications",
      "Mobile responsive",
    ],
  },
  {
    number: "03",
    type: "ANDROID · KOTLIN",
    name: "AniAssist",
    description:
      "An Android app built to help animals in need — reporting injured animals, reuniting lost pets with their owners, and connecting rescuers with the community nearby.",
    tech: ["Kotlin", "Firebase", "Google Geolocation API", "Android Sensors"],
    links: [
      { label: "GitHub", href: "https://github.com/AbhishekKrGhosh/AniAssist" },
    ],
    features: [
      "Lost & found pet matching",
      "Firebase auth & storage",
      "Real-time database sync",
      "Location-based rescue posts",
      "Shake-to-report gesture",
      "Smooth native animations",
    ],
  },
  {
    number: "04",
    type: "IOT · EMBEDDED SYSTEMS",
    name: "Flood Detection & Management System",
    description:
      "An IoT flood monitoring system that watches rising river levels using ESP32 sensors, triggers an automatic pump to divert water into a reservoir, and alerts nearby residents before it becomes a disaster.",
    tech: ["ESP32", "IoT Sensors", "Cloud Logging", "C++ / Arduino"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AbhishekKrGhosh/Flood-Detection-and-Management-System",
      },
    ],
    features: [
      "Real-time water level sensing",
      "Automated pump control",
      "Rainfall false-positive filtering",
      "Cloud data logging",
      "Early flood alerts",
      "Low-cost hardware design",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-label">04 — PROJECTS</div>

      <Reveal>
        <h2 className="section-title">
          Things I've <span>built.</span>
        </h2>
      </Reveal>

      <div className="project-list">
        {projects.map((project, i) => (
          <Reveal className="project-card" key={project.name} delay={i * 0.08}>
            <div className="project-number">{project.number}</div>

            <div className="project-main">
              <p className="project-type">{project.type}</p>

              <h2>{project.name}</h2>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank">
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="project-features">
              {project.features.map((feature, idx) => (
                <div key={feature}>
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                  {feature}
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
