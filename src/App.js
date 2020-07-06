import React from 'react';
import './App.scss';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import BoardContainer from "./components/Board/BoardContainer";
// BrowserRouter  basename={process.env.PUBLIC_URL} - hashRouter for dev
function App() {

  return (

        <BrowserRouter>
            <div className="app-wrapper">
                <Navbar />
                <Switch>
                    <Route path="/" exact render={() => <h1>About this project</h1>}/>
                    <Route path="/about" component={About}/>

                    <Route path="/board/:name" component={BoardContainer}/>
                    <Route path="/board" component={BoardContainer}/>
                    <Redirect to={'/'}/>
                </Switch>
            </div>
        </BrowserRouter>


  );
}

export default App;
