import React from "react";
import './Navbar.scss';
import { NavLink } from "react-router-dom";
import Visitors from "./Visitors/Visitors";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/dialog">Messages</NavLink>
      <NavLink to="/Users">Find Users</NavLink>
      <NavLink to="/Notifications">Notifications </NavLink>
      <NavLink to="/Music">Music</NavLink>
      <NavLink to="/setting">settings</NavLink>

      <div></div>
      <Visitors 
      // visitorData={props.state.visitorData} 
      />
    </nav>
  );
};

export default Navbar;
