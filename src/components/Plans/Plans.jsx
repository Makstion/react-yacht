import React from "react";
import "./Plans.scss";
import {Link} from "react-router-dom";

const Plans = () => {
    return (
        <div className="page">
            <div>
                <p className="page-title"> Plans foor future of this app</p>
            </div>
                <span> If u want to see time of upgreding, <Link to='/about'>look here !  </Link></span>
                <ul className="plans-list">
                    <li>Add Authentication</li>
                    <Link to='/winners'>  <li className={'done'}>Done - Add data base of players with score</li> </Link>
                    <li>Add dashboard with Scores of players</li>
                    <li>Add multiplayer</li>
                    <li> Add good design</li>
                    <li>Add react-animation</li>
                    <li className={'done'}> Done - Add dark theme</li>
                    <li>Add Prealoder</li>
                    <li>Add opportunity to change lang (rus/eng)</li>
                    <li>Mobile, tablet and xs PC screen size (media)</li>
                </ul>

        </div>
    )

}
export default Plans;