import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";
import "./Proyectos.css";

export const Proyectos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      mirror: true,
      anchorPlacement: "center-bottom",
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Datos de ejemplo para proyectos - reemplaza con tus proyectos reales
  const proyectos = [
    {
      id: 1,
      titulo: "[Nombre del Proyecto 1]",
      descripcion: "[Descripción detallada del proyecto, tecnologías utilizadas, problemas resueltos, etc.]",
      tecnologias: ["React", "Node.js", "MongoDB", "CSS"],
      imagen: "/api/placeholder/400/250",
      enlaceDemo: "#",
      enlaceGithub: "#",
      categoria: "web",
      estado: "Completado"
    },
    {
      id: 2,
      titulo: "[Nombre del Proyecto 2]",
      descripcion: "[Descripción detallada del proyecto, tecnologías utilizadas, problemas resueltos, etc.]",
      tecnologias: ["JavaScript", "HTML", "CSS", "API"],
      imagen: "/api/placeholder/400/250",
      enlaceDemo: "#",
      enlaceGithub: "#",
      categoria: "web",
      estado: "En desarrollo"
    },
    {
      id: 3,
      titulo: "[Nombre del Proyecto 3]",
      descripcion: "[Descripción detallada del proyecto, tecnologías utilizadas, problemas resueltos, etc.]",
      tecnologias: ["React Native", "Firebase", "JavaScript"],
      imagen: "/api/placeholder/400/250",
      enlaceDemo: "#",
      enlaceGithub: "#",
      categoria: "mobile",
      estado: "Completado"
    },
    {
      id: 4,
      titulo: "[Nombre del Proyecto 4]",
      descripcion: "[Descripción detallada del proyecto, tecnologías utilizadas, problemas resueltos, etc.]",
      tecnologias: ["Python", "Django", "PostgreSQL"],
      imagen: "/api/placeholder/400/250",
      enlaceDemo: "#",
      enlaceGithub: "#",
      categoria: "backend",
      estado: "Completado"
    }
  ];

  const getCategoryIcon = (categoria) => {
    switch (categoria) {
      case "web":
        return <Globe size={20} />;
      case "mobile":
        return <Smartphone size={20} />;
      case "backend":
        return <Code size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  return (
    <section className="proyectos">
      <h1 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        Mis Proyectos
      </h1>

      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div
            key={proyecto.id}
            className="proyecto-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 200}
          >
            <div className="proyecto-imagen">
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <div className="proyecto-overlay">
                <div className="proyecto-links">
                  <a 
                    href={proyecto.enlaceDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-demo"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                  <a 
                    href={proyecto.enlaceGithub} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link-github"
                  >
                    <Github size={20} />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="proyecto-content">
              <div className="proyecto-header">
                <div className="categoria">
                  {getCategoryIcon(proyecto.categoria)}
                  <span>{proyecto.categoria}</span>
                </div>
                <div className={`estado ${proyecto.estado.toLowerCase().replace(' ', '-')}`}>
                  {proyecto.estado}
                </div>
              </div>

              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>

              <div className="tecnologias">
                {proyecto.tecnologias.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="proyectos-cta" data-aos="fade-up" data-aos-duration="1000">
        <h3>¿Interesado en colaborar?</h3>
        <p>Siempre estoy abierto a nuevos proyectos y oportunidades de colaboración.</p>
        <a href="#contacto" className="cta-button">
          Contáctame
        </a>
      </div>
    </section>
  );
};
