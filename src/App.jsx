import { useEffect } from "react";
import ContactSection from "./components/ContactSection";
import ClubSection from "./components/ClubSection";
import GallerySection from "./components/GallerySection";
import ProjectsSection from "./components/ProjectsSection";
import "./index.css";
import logo from "./assets/logo.png";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleScroll();
    window.addEventListener("hashchange", handleScroll);

    return () => window.removeEventListener("hashchange", handleScroll);
  }, []);

  return (
    <div>
      <nav className="nav">
        <div className="logoContainer">
          <img src={logo} alt="Technex 10" className="logo" />
          <span className="brand">Technex 10</span>
        </div>

        <div className="links">
          <a href="#nosotros">Nosotros</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <header className="hero">
        <div className="overlay">
          <h1>Club de Robótica Technex 10</h1>
          <p>
            Innovación, tecnología y aprendizaje para transformar ideas en proyectos.
          </p>
          <div className="botones-hero">
  <a href="#proyectos" className="boton">
    Ver proyectos
  </a>

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSeJjAFw2WyoXHZExQy637wtnlMalYA6k8R5MB_PFTrZdQvnkw/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className="boton"
  >
    Sumate al Club
  </a>
</div>

<p className="texto-inscripcion">
  Completá el formulario de inscripción y sumate a las actividades del Club Technex10.
</p>
        </div>
      </header>

      <section className="seccion" id="nosotros">
        <h2>Sobre nosotros</h2>
        <p>
          Somos un espacio de aprendizaje, creatividad y desarrollo tecnológico,
          donde los estudiantes exploran la robótica, la programación,
          la electrónica y el pensamiento matemático.
        </p>
      </section>

      <ProjectsSection />
      <GallerySection />
      <ClubSection />
      <ContactSection />
    </div>
  );
}

export default App;