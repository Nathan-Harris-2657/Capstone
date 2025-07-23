import { Link } from "react-router-dom"

function TrailerPage(){
    return(
        <>
            <nav id="trailerMake">
                <Link to="/Fontaine">Fontaine Trailers</Link>
                <Link to="/Manac">Manac Trailers</Link>
                <Link to="/Reitnouer">Reitnour Trailers</Link>
                <Link to="/Great+Dane">Great Dane Trailers</Link>
                <Link to="/Benson+Transcraft">Benson Trailers</Link>
                <Link to="/Stoughton">Stoughton Trailers</Link>
            </nav>
        </>
    )
}
export default TrailerPage