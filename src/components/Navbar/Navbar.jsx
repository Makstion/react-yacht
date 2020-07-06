import React from "react";
import {Link} from "react-router-dom";
import './Navbar.scss'

const Navbar = (props) => {
    return (
        <nav className="nav">
            <Link
                to="/"
                exact
            >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/rules" >Rules</Link>
            <Link to="/Plans" >Plans</Link>
            <Link to={{
                pathname: '/board/'
            }}>Board game</Link>
        </nav>
    );
}
export default  Navbar;