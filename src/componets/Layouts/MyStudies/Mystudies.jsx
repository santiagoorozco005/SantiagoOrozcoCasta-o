import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Computer, Atom, Smartphone } from "lucide-react";
import "./Mystudies.css"

export const Mystudies = () => {
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
    <section className="expertise-raid">
      <h1 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        Mis Estudios
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
          <h2>Tecnico En Desarrollo De Software</h2>
          <h3>
          Durante los últimos dos años de mi etapa en el colegio, tuve la oportunidad de realizar un curso técnico en desarrollo de software, impartido por el SENA en la institución Marco Fidel Suárez, en Montenegro, Quindío. Esta experiencia fue clave en mi formación, ya que adquirí conocimientos en programación y diseño de sistemas, culminando con un certificado técnico que respalda mis habilidades en este campo.
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
          <h2>Tecnologo En Analisis Y Desarrollo De Software</h2>
          <h3>
            Actualmente, estoy cursando un Tecnólogo en Análisis y Desarrollo de
            Software en el SENA Centro de Comercio y Turismo en Armenia,
            Quindío. Este programa me ha permitido adquirir una sólida formación
            en programación, bases de datos y desarrollo de aplicaciones web,
            además de fomentar habilidades de resolución de problemas y trabajo
            en equipo. He tenido la oportunidad de aprender y trabajar con
            diversas tecnologías, incluyendo: JavaScript. Java HTML y CSS APIs Además, mi interés por el aprendizaje continuo me ha
            llevado a participar en proyectos prácticos y desafíos, donde aplico
            lo aprendido en situaciones reales.
          </h3>
        </div>
      </div>
    </section>
  );
};
