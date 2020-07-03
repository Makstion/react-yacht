import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.scss'

const Navbar = (props) => {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            exact
                            activeClassName={'wfm-active'}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeStyle={{
                            color: 'blue'
                        }}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: '/board/'
                        }}>Board game</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default  Navbar;