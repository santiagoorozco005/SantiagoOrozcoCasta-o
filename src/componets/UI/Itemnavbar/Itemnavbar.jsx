import "./Itemnavbar.css"

export const Itemnavbar = ({link,text}) => {
    return( 
        <ul>
            <a href={link}>{text}</a>
        </ul>
    )
}