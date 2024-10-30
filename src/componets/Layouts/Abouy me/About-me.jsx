import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Computer, Atom, Smartphone } from "lucide-react";
import "./About-me.css"

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      mirror: true,
      anchorPlacement: "center-bottom",
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <section className="expertise">
      <h1 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        Mi Experiencia
      </h1>

      <div className="expertise-grid">
        <div
          className="expertise-card"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-mirror="true"
        >
          <div className="card-icon">
            <Computer size={40} />
          </div>
          <h2>Desarrollo de Software</h2>
          <h3>
            Experiencia en programación funcional: PHP, Python, Java,
            JavaScript, TypeScript.
          </h3>
        </div>

        <div
          className="expertise-card"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-mirror="true"
        >
          <div className="card-icon">
            <Atom size={40} />
          </div>
          <h2>Desarrollo Frontend</h2>
          <h3>
            Apasionado por UI/UX. Más de 3 años de experiencia en desarrollo con
            HTML, CSS, JS, React y frameworks NextJS.
          </h3>
        </div>

        <div
          className="expertise-card"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-mirror="true"
        >
          <div className="card-icon">
            <Smartphone size={40} />
          </div>
          <h2>Desarrollo web movil</h2>
          <h3>
            Especializado en desarrollo de aplicaciones móviles híbridas y
            soluciones multiplataforma usando frameworks.
          </h3>
        </div>
      </div>
    </section>
  );
};
