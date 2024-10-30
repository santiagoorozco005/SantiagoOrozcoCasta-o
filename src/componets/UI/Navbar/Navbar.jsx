import { Itemnavbar } from "../Itemnavbar/Itemnavbar"
import "./Navbar.css"


export const Navbar = () => {
    const scrollToAbout = () => {
        const aboutSection = document.querySelector(".expertise");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const studies = () => {
        const study = document.querySelector(".expertise-raid");
        if (study) {
            study.scrollIntoView({ behavior: "smooth" });
        }
        }
    

        return( 
            <>
            <ul>
            <a
          onClick={(e) => {
            e.preventDefault();
            scrollToAbout();
          }}
          href="#"
        >
          ¿Quien Soy?
        </a>
        </ul>
        <ul>
            <a
          onClick={(e) => {
            e.preventDefault();
            scrollToAbout();
          }}
          href="#"
        >
          Mi Familia
        </a>
        </ul>
        <ul>
            <a
          onClick={(e) => {
            e.preventDefault();
            studies();
          }}
          href="#"
        >
          Mis Estudios
        </a>
        </ul>
            </>
    )
}