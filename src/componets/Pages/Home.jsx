import { AboutMe } from "../Layouts/Abouy me/About-me";
import { Header } from "../Layouts/Header";
import { Mystudies } from "../Layouts/MyStudies/Mystudies";


export const Home = () => {
    return (
        <>
        <Header />
        
        <AboutMe />

        <Mystudies/>
        </>
    );
};

