import React from "react";
// import './../scss/pages/Header.scss';
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-logo">
        <div className={'main-logo'}> &nbsp;</div>
      </div>
        <div className={'header-title'}>
            Yacht Game! Play now!
        </div>
        <div className={"header-btn-block"}>
              <NavLink
                to="/board"
                exact
                className={'btn btn-second-action'}
            >Play!</NavLink>
        </div>
      <div className="header-profile">
      </div>

      <div className="header-hum-menu"></div>
    </header>
  );
};

export default Header;
