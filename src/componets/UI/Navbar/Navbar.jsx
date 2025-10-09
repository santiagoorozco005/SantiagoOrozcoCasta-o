import { Itemnavbar } from "../Itemnavbar/Itemnavbar"
import "./Navbar.css"


export const Navbar = () => {
    const scrollToSection = (sectionClass) => {
        const section = document.querySelector(sectionClass);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return( 
        <>
        <ul>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(".quien-soy");
                }}
                href="#"
            >
                ¿Quién Soy?
            </a> 
        </ul>
        
        <ul>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(".expertise");
                }}
                href="#"
            >
                Experiencia
            </a>
        </ul>

        <ul>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(".expertise-raid");
                }}
                href="#"
            >
                Estudios
            </a>
        </ul>

        <ul>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(".proyectos");
                }}
                href="#"
            >
                Proyectos
            </a>
        </ul>

        <ul>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(".tecnologias");
                }}
                href="#"
            >
                Tecnologías
            </a>
        </ul>

        <ul>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(".contacto");
                }}
                href="#"
            >
                Contacto
            </a>
        </ul>
        </>
    )
}
