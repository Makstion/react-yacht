import React, {Suspense, useEffect} from 'react';
import './App.scss';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import BoardContainer from "./components/Board/BoardContainer";
import Rules from "./components/Rules/Rules";
import Plans from "./components/Plans/Plans";
import Winners from "./components/Winners/Winners";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialalizeApp} from "./redux/settings/settingReducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Prealoder from "./components/common/Preloader/Preloader";
// BrowserRouter  basename={process.env.PUBLIC_URL} - hashRouter for dev


const App = (props) => {

    useEffect(() => {
        props.initialalizeApp();
    }, []);


  return (

        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={"app-wrapper " + (props.settings.isDark ? 'theme--dark' : 'theme--default')}>
                <React.Suspense fallback={<Prealoder />}>
                    <HeaderContainer />
                    <Navbar />
                    <Switch>
                        <Route path="/" exact render={() =>
                            <div className="page"> <h1 className="page-title">Dear guest</h1>
                                <div className="page-text">
                                    Hello! My name is Maksim and i develop this app. Look more at the next pages
                                </div>
                            </div>}
                        />
                        <Route path="/about" component={About}/>
                        <Route path="/rules" component={Rules}/>
                        <Route path="/plans" component={Plans}/>
                        <Route path="/winners" component={Winners}/>
                        <Route path="/board/:name" component={BoardContainer}/>
                        <Route path="/board" component={BoardContainer}/>
                        <Redirect to={'/'}/>
                        <Route component={() => (<div>404 Not found </div>)} />
                    </Switch>
                </React.Suspense>
            </div>
        </BrowserRouter>


  );
};

const mapStateToProps = (state) => {
    return {
        settings: state.settings,
    };
};

export default compose(
    connect(mapStateToProps, {
        initialalizeApp
    }),
)(App);


