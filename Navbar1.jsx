import { Link } from "react-router-dom";
import "./css/Navbar1.css";

function Navbar1(){
    return(
        
            <nav className="nav">
                <div className="navbar-brand">
                    <Link to="/">Movie App</Link>
                    
                </div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/Favorite" className="nav-link">Favorite</Link>
                </div>

            </nav>
        
    );
}
export default Navbar1