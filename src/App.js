import React from 'react';
import './App.scss';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import BoardContainer from "./components/Board/BoardContainer";
import Rules from "./components/Rules/Rules";
import HeaderContainer from "./components/Header/HeaderContainer";
import Plans from "./components/Plans/Plans";
// BrowserRouter  basename={process.env.PUBLIC_URL} - hashRouter for dev
function App() {

  return (

        <BrowserRouter basename="/react-yacht">
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <Switch>
                    <Route path="/" exact render={() =><div className="page"> <h1 className="page-title">Hello!.</h1>
                    <div className="page-text"> My name is Maksim and i develop this app. Look more at the next pages</div></div>}/>
                    <Route path="/about" component={About}/>
                    <Route path="/rules" component={Rules}/>
                    <Route path="/plans" component={Plans}/>
                    <Route path="/board/:name" component={BoardContainer}/>
                    <Route path="/board" component={BoardContainer}/>
                    <Redirect to={'/'}/>
                </Switch>
            </div>
        </BrowserRouter>


  );
}

export default App;
