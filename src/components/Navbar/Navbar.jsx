import React from "react";
import {Link} from "react-router-dom";
import "./navbar.scss";


const Navbar = () => {
    return (
        <nav className="nav">
            <Link
                to="/"
            >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/rules" >Rules</Link>
            <Link to={{
                pathname: '/board/'
            }}>Board game</Link>
            <Link to="/Plans" >Plans</Link>
            <Link to="/winners" >winners</Link>

        </nav>
    );
};
export default  Navbar;