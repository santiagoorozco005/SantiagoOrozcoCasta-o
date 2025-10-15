import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  User,
  MessageSquare
} from "lucide-react";
import "./Contacto.css";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear formulario
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
    alert('¡Mensaje enviado! Te contactaré pronto.');
  };

  const contactInfo = [
    {
      icono: <Mail size={24} />,
      titulo: "Email",
      valor: "santioro1736gmail.com",
      enlace: "mailto:[tu-email@ejemplo.com]"
    },
    {
      icono: <Phone size={24} />,
      titulo: "Teléfono",
      valor: "+57 302 232 7957",
      enlace: "https://wa.me/+573022327957"
    },
    {
      icono: <MapPin size={24} />,
      titulo: "Ubicación",
      valor: "Armenia, Quindío, Colombia",
      enlace: "#"
    }
  ];

  const redesSociales = [
    {
      icono: <Linkedin size={24} />,
      nombre: "LinkedIn",
      enlace: "[https://linkedin.com/in/tu-perfil]",
      color: "#0077b5"
    },
    {
      icono: <Github size={24} />,
      nombre: "GitHub",
      enlace: "[https://github.com/tu-usuario]",
      color: "#333"
    }
  ];

  return (
    <section className="contacto" id="contacto">
      <h1 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        Contáctame
      </h1>

      <div className="contacto-container">
        <div 
          className="contacto-info"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="info-header">
            <h2>¡Hablemos!</h2>
            <p>
              Estoy siempre interesado en nuevas oportunidades y proyectos 
              emocionantes. Si tienes una idea, un proyecto en mente, o 
              simplemente quieres saludar, no dudes en contactarme.
            </p>
          </div>

          <div className="info-items">
            {contactInfo.map((item, index) => (
              <div key={index} className="info-item">
                <div className="info-icono">
                  {item.icono}
                </div>
                <div className="info-content">
                  <h3>{item.titulo}</h3>
                  <a href={item.enlace} target="_blank" rel="noopener noreferrer" className="info-valor">
                    {item.valor}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="redes-sociales">
            <h3>Sígueme en:</h3>
            <div className="redes-lista">
              {redesSociales.map((red, index) => (
                <a
                  key={index}
                  href={red.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="red-social"
                  style={{ '--color': red.color }}
                >
                  {red.icono}
                  <span>{red.nombre}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="contacto-form"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">
                <User size={18} />
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <Mail size={18} />
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">
                <MessageSquare size={18} />
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleInputChange}
                required
                placeholder="¿De qué quieres hablar?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">
                <MessageSquare size={18} />
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Cuéntame sobre tu proyecto o idea..."
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <Send size={20} />
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      <div 
        className="contacto-footer"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p>
          © 2024 Santiago Orozco Castaño. Desarrollado con ❤️ y mucho café ☕
        </p>
      </div>
    </section>
  );
};
