import React from 'react';
import './App.scss';
import {BrowserRouter, hashRouter Redirect, Route, Switch} from 'react-router-dom'
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import BoardContainer from "./components/Board/BoardContainer";

function App() {

  return (
// BrowserRouter - hashRouter for dev
        <hashRouter basename={process.env.PUBLIC_URL}>
            <div className="app-wrapper">
                <Navbar />
                <Switch>
                    <Route path="/" exact render={() => <h1>Home Page</h1>}/>
                    <Route path="/about" component={About}/>

                    <Route path="/board/:name" component={BoardContainer}/>
                    <Route path="/board" component={BoardContainer}/>
                    <Redirect to={'/'}/>
                </Switch>
            </div>
        </hashRouter>


  );
}

export default App;
