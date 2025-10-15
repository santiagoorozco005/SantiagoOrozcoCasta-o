import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";
import "./Proyectos.css";
import "../../../IMG/image.png";

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
      titulo: "EventHub",
      descripcion: "Eventhub es una plataforma web que facilita la creación, gestión y descubrimiento de eventos. Con una interfaz intuitiva y colores amigables, ofrece una experiencia fluida para organizadores y asistentes, permitiendo conectar personas, compartir experiencias y vivir los eventos de una forma moderna y sencilla.",
      tecnologias: ["React", "Node.js", "MongoDB", "CSS","JavaScript", "Java", "Spring Boot"],
      imagen: "../../../IMG/image.png",
      enlaceDemo: "https://event-eao8znvce-olisaurios-projects.vercel.app/",
      enlaceGithub: "https://github.com/santiagoorozco005/Event-Hub.git",
      categoria: "web",
      estado: "Completado"
    },
    {
      id: 2,
      titulo: "Bootcamp Analisis de Datos",
      descripcion: "Bootcasmp Análisis de Datos es un proyecto colaborativo desarrollado durante un curso intensivo de formación en análisis de datos. El objetivo principal del proyecto fue aplicar técnicas y herramientas de análisis de datos para extraer información valiosa y generar insights a partir de conjuntos de datos complejos. El proyecto abarcó desde la recopilación y limpieza de datos hasta el análisis exploratorio, la visualización y la interpretación de resultados, utilizando lenguajes y bibliotecas como Python, Pandas, NumPy y Matplotlib.",
      tecnologias: ["Python", "Pandas", "NumPy", "Matplotlib"],
      imagen: "/api/placeholder/400/250",
      enlaceDemo: "https://github.com/santiagoorozco005/Grupo-2-Analisis-De-Datos-BOOTCAMP.git",
      enlaceGithub: "https://github.com/santiagoorozco005/Grupo-2-Analisis-De-Datos-BOOTCAMP.git",
      categoria: "web",
      estado: "En desarrollo"
    },
    {
      id: 3,
      titulo: "Exclusive Wear",
      descripcion: "Exclusive Wear es una tienda virtual funcional especializada en la venta de zapatos. Permite a los usuarios explorar un catálogo de productos, visualizar detalles como precios, tallas y estilos, y realizar compras de forma rápida y segura. Su diseño está enfocado en ofrecer una experiencia moderna, intuitiva y accesible, facilitando la búsqueda y adquisición del calzado ideal desde cualquier dispositivo.",
      tecnologias: ["PHP", "JavaScript", "CSS", "MySQL"],
      imagen: "/api/placeholder/400/250",
      enlaceDemo: "https://github.com/santiagoorozco005/Exclusive-Wear.git",
      enlaceGithub: "https://github.com/santiagoorozco005/Exclusive-Wear.git",
      categoria: "web",
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
