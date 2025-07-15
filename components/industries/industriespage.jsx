import { Link } from "react-router-dom"


function IndustriesPage(){
    return(
        <>
        <div>Industries</div>
            <nav>
                <Link to="/Construction">Construction</Link>
                <Link to="/Agriculture">Agriculture</Link>
                <Link to="/Oil+Gas">Oil and Gas</Link>
                <Link to="/Intermodal">Intermodal</Link>
                <Link to="/Recycling">Recycling</Link>
                <Link to="/Retail">Retail</Link>
                <Link to="/Specialized">Specialized</Link>
            </nav>
        </>
    )
}
export default IndustriesPage