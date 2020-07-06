import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.scss'

const Navbar = (props) => {
    return (
        <nav className="nav">
            <NavLink
                to="/"
                exact
            >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/rules" >Rules</NavLink>
            <NavLink to={{
                pathname: '/board/'
            }}>Board game</NavLink>
        </nav>
    );
}
export default  Navbar;