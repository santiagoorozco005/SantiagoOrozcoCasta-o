import { Itemnavbar } from "../Itemnavbar/Itemnavbar"
import "./Navbar.css"


export const Navbar = () => {
    return( 
        <nav>
                <Itemnavbar text="¿Quien soy?"/>
                <Itemnavbar text="Mi familia"/>
                <Itemnavbar text="Mis estudios"/>
            
        </nav>
    )
}