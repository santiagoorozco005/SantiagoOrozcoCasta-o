import { Navbar } from "../UI/Navbar/Navbar"
import "./Header.css"

export const Header = () => {
    return(
        <>
        <header>
            <div className="header-top">
            <h3>DEVELOPER</h3>
            <Navbar/>
            </div>
            <h1>SANTIAGO OROZCO CASTAÑO</h1>
        </header>
        </>
    )
}