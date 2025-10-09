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
              [Aquí puedes escribir una descripción personal sobre ti, tus 
              intereses, tu pasión por la programación, tus objetivos 
              profesionales, etc. Por ejemplo: "Soy un desarrollador apasionado 
              por crear soluciones tecnológicas innovadoras..."]
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
              [Describe tus pasiones: programación, tecnología, aprendizaje 
              continuo, resolver problemas, crear aplicaciones, etc.]
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
              [Describe tus objetivos profesionales: convertirte en un 
              desarrollador senior, especializarte en ciertas tecnologías, 
              crear tu propia empresa, etc.]
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
          <h3>[X]</h3>
          <p>Años de Experiencia</p>
        </div>
        <div
          className="stat-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          <h3>[X]</h3>
          <p>Proyectos Completados</p>
        </div>
        <div
          className="stat-item"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <h3>[X]</h3>
          <p>Tecnologías Dominadas</p>
        </div>
      </div>
    </section>
  );
};
