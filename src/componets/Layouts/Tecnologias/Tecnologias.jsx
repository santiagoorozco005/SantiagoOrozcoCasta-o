import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Code, 
  Database, 
  Palette, 
  Settings, 
  Globe, 
  Smartphone,
  Server,
  GitBranch,
  Terminal,
  Layers
} from "lucide-react";
import "./Tecnologias.css";

export const Tecnologias = () => {
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

  const categoriasTecnologias = [
    {
      titulo: "Lenguajes de Programación",
      icono: <Code size={40} />,
      tecnologias: [
        { nombre: "JavaScript", nivel: 90, color: "#f7df1e" },
        { nombre: "Python", nivel: 85, color: "#3776ab" },
        { nombre: "Java", nivel: 80, color: "#ed8b00" },
        { nombre: "PHP", nivel: 75, color: "#777bb4" },
        { nombre: "TypeScript", nivel: 70, color: "#3178c6" },
        { nombre: "C#", nivel: 65, color: "#239120" }
      ]
    },
    {
      titulo: "Frontend",
      icono: <Palette size={40} />,
      tecnologias: [
        { nombre: "React", nivel: 90, color: "#61dafb" },
        { nombre: "HTML5", nivel: 95, color: "#e34f26" },
        { nombre: "CSS3", nivel: 90, color: "#1572b6" },
        { nombre: "Next.js", nivel: 80, color: "#000000" },
        { nombre: "Vue.js", nivel: 70, color: "#4fc08d" },
        { nombre: "Sass", nivel: 75, color: "#cc6699" }
      ]
    },
    {
      titulo: "Backend",
      icono: <Server size={40} />,
      tecnologias: [
        { nombre: "Node.js", nivel: 85, color: "#339933" },
        { nombre: "Express.js", nivel: 80, color: "#000000" },
        { nombre: "Django", nivel: 75, color: "#092e20" },
        { nombre: "Flask", nivel: 70, color: "#000000" },
        { nombre: "Spring Boot", nivel: 65, color: "#6db33f" },
        { nombre: "Laravel", nivel: 60, color: "#ff2d20" }
      ]
    },
    {
      titulo: "Bases de Datos",
      icono: <Database size={40} />,
      tecnologias: [
        { nombre: "MySQL", nivel: 85, color: "#4479a1" },
        { nombre: "MongoDB", nivel: 80, color: "#47a248" },
        { nombre: "PostgreSQL", nivel: 75, color: "#336791" },
        { nombre: "Firebase", nivel: 70, color: "#ffca28" },
        { nombre: "SQLite", nivel: 80, color: "#003b57" },
        { nombre: "Redis", nivel: 60, color: "#dc382d" }
      ]
    },
    {
      titulo: "Herramientas y DevOps",
      icono: <Settings size={40} />,
      tecnologias: [
        { nombre: "Git", nivel: 90, color: "#f05032" },
        { nombre: "Docker", nivel: 75, color: "#2496ed" },
        { nombre: "VS Code", nivel: 95, color: "#007acc" },
        { nombre: "Postman", nivel: 85, color: "#ff6c37" },
        { nombre: "Linux", nivel: 80, color: "#fcc624" },
        { nombre: "AWS", nivel: 65, color: "#ff9900" }
      ]
    },
    {
      titulo: "Desarrollo Móvil",
      icono: <Smartphone size={40} />,
      tecnologias: [
        { nombre: "React Native", nivel: 75, color: "#61dafb" },
        { nombre: "Flutter", nivel: 60, color: "#02569b" },
        { nombre: "Ionic", nivel: 65, color: "#3880ff" },
        { nombre: "Cordova", nivel: 55, color: "#e8e8e8" }
      ]
    }
  ];

  const herramientasAdicionales = [
    "Figma", "Adobe XD", "Photoshop", "Illustrator", "Slack", "Trello", 
    "Jira", "Notion", "GitHub", "GitLab", "Bitbucket", "Webpack", 
    "Vite", "Babel", "ESLint", "Prettier", "Jest", "Cypress"
  ];

  return (
    <section className="tecnologias">
      <h1 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        Tecnologías y Herramientas
      </h1>

      <div className="tecnologias-container">
        {categoriasTecnologias.map((categoria, index) => (
          <div
            key={index}
            className="categoria-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 100}
          >
            <div className="categoria-header">
              <div className="categoria-icono">
                {categoria.icono}
              </div>
              <h2>{categoria.titulo}</h2>
            </div>

            <div className="tecnologias-lista">
              {categoria.tecnologias.map((tech, techIndex) => (
                <div key={techIndex} className="tech-item">
                  <div className="tech-info">
                    <span className="tech-nombre">{tech.nombre}</span>
                    <span className="tech-porcentaje">{tech.nivel}%</span>
                  </div>
                  <div className="tech-barra">
                    <div 
                      className="tech-progreso"
                      style={{
                        width: `${tech.nivel}%`,
                        backgroundColor: tech.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div 
        className="herramientas-adicionales"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2>
          <Layers size={30} />
          Herramientas Adicionales
        </h2>
        <div className="herramientas-grid">
          {herramientasAdicionales.map((herramienta, index) => (
            <div
              key={index}
              className="herramienta-tag"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={index * 50}
            >
              {herramienta}
            </div>
          ))}
        </div>
      </div>

      <div 
        className="tech-stats"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="stat-card">
          <Terminal size={40} />
          <h3>[X]+</h3>
          <p>Lenguajes de Programación</p>
        </div>
        <div className="stat-card">
          <Globe size={40} />
          <h3>[X]+</h3>
          <p>Frameworks y Librerías</p>
        </div>
        <div className="stat-card">
          <GitBranch size={40} />
          <h3>[X]+</h3>
          <p>Herramientas de Desarrollo</p>
        </div>
      </div>
    </section>
  );
};
