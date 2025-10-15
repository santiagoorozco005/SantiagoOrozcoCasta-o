import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { User, Heart, Target, MapPin } from "lucide-react";
import "./QuienSoy.css";

export const QuienSoy = () => {
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

  return (
    <section className="quien-soy">
      <h1 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        ¿Quién Soy?
      </h1>

      <div className="quien-soy-content">
        <div
          className="quien-soy-main"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="profile-section">
            <div className="profile-image">
              {/* Aquí puedes agregar tu foto de perfil */}
              <div className="placeholder-image">
                <User size={80} />
              </div>
            </div>
            <div className="profile-info">
              <h2>Santiago Orozco Castaño</h2>
              <p className="title">Desarrollador Full Stack</p>
              <div className="location">
                <MapPin size={16} />
                <span>Armenia, Quindío, Colombia</span>
              </div>
            </div>
          </div>

          <div className="description">
            <p>
              Tecnólogo en formación en Análisis y Desarrollo de Software con una fuerte especialización en el desarrollo web frontend. Mi pasión es construir aplicaciones web intuitivas y eficientes, utilizando tecnologías como React, JavaScript, HTML y CSS, e integrándolas con backends robustos en Spring Boot y diversas bases de datos. Me defino por mi capacidad de aprendizaje continuo, un enfoque claro en la obtención de resultados y una gran habilidad para el trabajo colaborativo en entornos ágiles (Scrum). Mi objetivo principal es aportar soluciones digitales innovadoras que no solo cumplan con los requisitos técnicos, sino que también generen valor y crecimiento para las organizaciones.
            </p>
          </div>
        </div>

        <div className="quien-soy-cards">
          <div
            className="info-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="card-icon">
              <Heart size={30} />
            </div>
            <h3>Pasiones</h3>
            <p>
              Me apasiona la resolución de problemas complejos a través del código, el aprendizaje constante de nuevas tecnologías y la creación de interfaces de usuario que sean tanto funcionales como estéticamente agradables. Disfruto trabajando en equipo para llevar ideas desde el concepto hasta un producto final pulido.
            </p>
          </div>

          <div
            className="info-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="card-icon">
              <Target size={30} />
            </div>
            <h3>Objetivos</h3>
            <p>
              Busco consolidarme como un desarrollador frontend de referencia, profundizando mis conocimientos en arquitecturas de software modernas y liderando proyectos de alto impacto. A largo plazo, aspiro a contribuir en el desarrollo de productos tecnológicos que mejoren la vida de las personas.
            </p>
          </div>
        </div>
      </div>

      <div className="personal-stats">
        <div
          className="stat-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <h3>+2</h3>
          <p>Años de Experiencia</p>
        </div>
        <div
          className="stat-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          <h3>4</h3>
          <p>Proyectos Completados</p>
        </div>
        <div
          className="stat-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <h3>+10</h3>
          <p>Tecnologías Dominadas</p>
        </div>
      </div>
    </section>
  );
};
