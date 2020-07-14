import React from "react";

const About = (props) => {
    return (
        <div className="page">

            <h2 className="page-title">About page</h2>

            <div className="page-text">
                It's a little game that i found when studies at school.
                <br/>
                First time (10 years ago) i made formula and when i choised developer life
                i made first project (honestly very bad, with Jquery and bootstrap)
                <br/>
                and now i want to make best app with this stack:
                react, redux, react-router-dom, react-hooks, scss, webpack
                <br/>
                I WIll add next versions with time.
                <br/>
                now its like model
                <br/>
                design 3/10 (without good design) <br/>
                code finish 1/10 (just for trying game) <br/> server 0/10 (none)
            </div>

            <div className="page-text">
                <span className={'page-data'}>13.07.2020  </span>
                <span className="page-text-little">update v.1.10</span> <br/>
                Was add <br/>
                - night theme<br/>
            </div>


            <div className="page-text">
                <span className={'page-data'}>12.07.2020  </span>
                <span className="page-text-little">update v.1.00</span> <br/>
                Was add <br/>
                - write result (name + score) <br/>
                - winners (with server)
            </div>

            <div className="page-text">
                <span className={'page-data'}>06.07.2020  </span>
                <span className="page-text-little">update v.0.81</span> <br/>
                Design was updated <br/>
                Btn new-game was added.
            </div>


            <div className="page-text">
                   <span className={'page-data'}>0.3.07.2020  </span>
                <span className="page-text-little"> first realise v.0.8 </span>
                <br/>
                Free play, table, score. So, single player can play.

            </div>
       </div>
    );
}

export default About;