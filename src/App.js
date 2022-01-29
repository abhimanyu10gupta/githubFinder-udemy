import './App.css';
import React, {Fragment} from 'react';
import Navbar from "./components/layout/navabr";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/pages/about";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
    return (
        <GithubState>
            <AlertState>
            <Router>
                <div className="App">
                    <Navbar />
                    <div className={"container"}>
                        <Alert/>
                        <Routes>
                            <Route
                                exact
                                path={"/"}
                                element={
                                <Fragment>
                                    <Search/>
                                    <Users/>
                                </Fragment>
                            }/>
                            <Route exact path={"/about"} element={<About/>} />
                            <Route exact path={'/user/:login'} element={<User/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </AlertState>
        </GithubState>
    );
}

export default App;
