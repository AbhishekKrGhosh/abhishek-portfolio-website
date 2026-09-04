import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer>
        <p>Made with care by Abhishek Kumar © 2026</p>
      </footer>
    </>
  );
}

export default App;
