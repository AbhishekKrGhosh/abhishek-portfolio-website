import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "about"],
    ["Highlights", "highlights"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Contact", "contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <span className="logo-mark">A</span>
        Abhishek
      </a>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}

        <a
          href="/Abhishek_Kumar_CV.pdf"
          download
          className="nav-resume"
          onClick={() => setOpen(false)}
        >
          Resume ↓
        </a>
      </div>
    </nav>
  );
}
