import React from "react";
import {NavLink} from "react-router-dom";

const Rules = props => {
    return (
        <div className='page'>
            <h2 className="page-title">
                Rules
            </h2>


            <div className="page-text">
                On each turn, a player has a maximum of three rolls. After a third roll, the player must stop rolling and proceed to scoring. Each player will have 12 turns during the game. After each turn, the player must enter a score in one of the rows on the score sheet
            </div>
            <div className={"text-block"}>
                <NavLink
                    to="/board"
                    exact
                   сlassName={'btn btn-main-action'}
                >Play!</NavLink>
            </div>
        </div>
    )
}

export default Rules;