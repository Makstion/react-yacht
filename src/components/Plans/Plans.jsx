import React from "react";
import "./Plans.scss";


const Plans = () => {
    return (
        <div className="page">
            <div>
                <p className="page-title"> Plans foor future of this app</p>
            </div>

            <ul className="plans-list">
                <li>Add Authentication</li>
                <li>Add data base of players with score</li>
                <li>Add dashboard with Scores of players</li>
                <li>Add multiplayer</li>
                <li> Add good design</li>
                <li>Add react-animation</li>
                <li>Add dark theme</li>
                <li>Add Prealoder</li>
                <li>Add opportunity to change lang (rus/eng)</li>
                <li>Mobile, tablet and xs PC screen size (media)</li>
            </ul>
        </div>
    )

}
export default Plans;