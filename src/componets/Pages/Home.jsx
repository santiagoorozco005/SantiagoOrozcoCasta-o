import { AboutMe } from "../Layouts/Abouy me/About-me";
import { Header } from "../Layouts/Header";
import { Mystudies } from "../Layouts/MyStudies/Mystudies";
import { QuienSoy } from "../Layouts/QuienSoy/QuienSoy";
import { Proyectos } from "../Layouts/Proyectos/Proyectos";
import { Tecnologias } from "../Layouts/Tecnologias/Tecnologias";
import { Contacto } from "../Layouts/Contacto/Contacto";


export const Home = () => {
    return (
        <>
        <Header />
        
        <QuienSoy />

        <AboutMe />

        <Mystudies/>

        <Proyectos />

        <Tecnologias />

        <Contacto />
        
        </>
    );
};
