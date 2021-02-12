import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Navbar() {
    return(
       

    <nav className="navbar navbar-expand-sm bg-dark">
        <ul className="navbar-nav">
            <Link className="nav-link" to="/About">
                <li className="nav-item">About</li>
            </Link>
            <Link className="nav-link" to="/Cantact">
                <li className="nav-item">Cantact</li>
            </Link>
            <Link className="nav-link" to="/Countries">
                <li className="nav-item">Contries</li>
            </Link>
        </ul>
    </nav>
    );
}

export default Navbar;