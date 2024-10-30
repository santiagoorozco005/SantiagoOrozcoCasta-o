import { Navbar } from "../UI/Navbar/Navbar";
import { useState, useEffect } from "react";
import "./Header.css";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight - 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.querySelector(".expertise");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="header-wrapper">
            <header className={isScrolled ? "header-scrolled" : ""}>
                <div className="header-top">
                    <h3>DEVELOPER</h3>
                    <Navbar />
                </div>
                <h1>SANTIAGO OROZCO CASTAÑO</h1>

                <a
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToAbout();
                    }}
                    href="#"
                    className="botton"
                >
                    <i className="fa-solid fa-angles-down"></i>
                </a>
            </header>
        </div>
    );
};