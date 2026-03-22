import { useState } from "react";

const proyectos = {
  velocistas: [
    {
      titulo: "Robot Velocista",
      descripcion:
        "Diseñado para seguir líneas con precisión y velocidad, aplicando sensores, control PID y optimización mecánica.",
      imagen: "/images/robots/robot1.jpg",
    },
    {
      titulo: "Velocista en competencia",
    descripcion:
    "Participación en pruebas de pista y entrenamiento, buscando mejorar tiempos, estabilidad y respuesta en curvas.",
    imagen: "/videos/velocista3.mp4",
    tipo: "video",
    },
  ],
  futbol: [
    {
      titulo: "Robot de Fútbol",
      descripcion:
        "Proyecto orientado al desarrollo de estrategias, movilidad y control para competencias de robótica futbolística.",
      imagen: "/images/robots/robot2.jpg",
    },
    {
      titulo: "Equipo de fútbol robótico",
      descripcion:
        "Trabajo colaborativo para integrar diseño, programación y pruebas de juego en equipo.",
      imagen: "/images/robots/robot11.jpg",
    },
  ],
  sumo: [
    {
      titulo: "Robot Sumo",
      descripcion:
        "Diseñado para detectar al oponente, mantenerse dentro del dohyo y aplicar estrategias de empuje y evasión.",
      imagen: "/images/robots/sumo1.jpg",
    },
    {
      titulo: "Robot Minisumo",
      descripcion:
        "Versión compacta para competencias de minisumo, donde se combinan potencia, equilibrio y rapidez de reacción.",
      imagen: "/images/robots/minisumo1.jpg",
    },
  ],
  innovacion: [
    {
      titulo: "Bastón Inteligente",
      descripcion:
        "Proyecto de innovación tecnológica pensado para aportar soluciones reales, integrando sensores y accesibilidad.",
      imagen: "/images/robots/baston1.jpg",
    },
    {
      titulo: "Desarrollos Tecnológicos",
      descripcion:
        "Espacio destinado a propuestas creativas donde la robótica y la electrónica se ponen al servicio de la comunidad.",
      imagen: "/images/robots/baston3.jpg",
    },
  ],
};

export default function ProjectsSection() {
  const [categoria, setCategoria] = useState("velocistas");

  return (
    <section className="projects-section" id="proyectos">
      <h2>Nuestros Proyectos</h2>
      <p className="projects-subtitle">
        Cada línea de trabajo del Club Technex 10 representa esfuerzo, aprendizaje,
        innovación y desafíos reales.
      </p>

      <div className="tabs-proyectos">
        <button
          className={categoria === "velocistas" ? "tab active" : "tab"}
          onClick={() => setCategoria("velocistas")}
        >
          Velocistas
        </button>

        <button
          className={categoria === "futbol" ? "tab active" : "tab"}
          onClick={() => setCategoria("futbol")}
        >
          Fútbol
        </button>

        <button
          className={categoria === "sumo" ? "tab active" : "tab"}
          onClick={() => setCategoria("sumo")}
        >
          Sumo / Minisumo
        </button>

        <button
          className={categoria === "innovacion" ? "tab active" : "tab"}
          onClick={() => setCategoria("innovacion")}
        >
          Innovación
        </button>
      </div>

      <div className="projects-grid">
        {proyectos[categoria].map((proyecto, index) => (
          <div className="project-card" key={index}>
            {proyecto.tipo === "video" ? (
  <video className="project-image" controls>
    <source src={proyecto.imagen} type="video/mp4" />
    Tu navegador no soporta video.
  </video>
) : (
  <img
    src={proyecto.imagen}
    alt={proyecto.titulo}
    className="project-image"
  />
)}
            <div className="project-content">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}