import "./Itemnavbar.css"

export const Itemnavbar = ({link,text}) => {

    const scrollToAbout = () => {
        const aboutSection = document.querySelector(".expertise-raid");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

        return( 
            <ul>
            <a
          onClick={(e) => {
            e.preventDefault();
            scrollToAbout();
          }}
          href="#"
        >
          {text}
        </a>
        </ul>
    )
}