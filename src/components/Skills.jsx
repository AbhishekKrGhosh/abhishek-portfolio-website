import Reveal from "./Reveal";

const skills = {
  Languages: ["JavaScript", "TypeScript", "Kotlin", "C++", "C", "Python"],

  Frontend: ["React Native", "React.js", "HTML", "CSS"],

  Backend: ["Node.js", "Express.js", "Socket.IO"],

  "State Management": ["Redux", "Redux Toolkit", "Context API"],

  "Database & Cloud": ["MongoDB", "SQL", "Firebase"],

  Tools: ["Git", "SVN", "Android Studio", "Xcode", "Postman", "Jira", "Figma"],

  "Core Concepts": [
    "Data Structures & Algorithms",
    "OOP",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-label">05 — SKILLS</div>

      <Reveal>
        <h2 className="section-title">
          My <span>toolbox.</span>
        </h2>
      </Reveal>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal className="skill-group" key={category} delay={i * 0.06}>
            <h3>{category}</h3>

            <div className="skill-list">
              {items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
