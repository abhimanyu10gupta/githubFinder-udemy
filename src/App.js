import './App.css';
import React, {useState, Fragment} from 'react';
import Navbar from "./components/layout/navabr";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/pages/about";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

import axios from "axios";
import githubReducer from "./context/github/githubReducer";

const App = () => {

    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    // Search Github Users



    // get single Github user
    const getUser = async (username) => {
        setLoading(true);
        const res = await axios.get('https://api.github.com/users/'+username+'?&client_id='+process.env.REACT_APP_GITHUB_CLIENT_ID+'&client_secret='+process.env.REACT_APP_GITHUB_CLIENT_SECRET);
        setUser(res.data);
        setLoading(false);
    }

    // Get User Repos
    const getUserRepos = async (username) => {
        setLoading(true);
        const res = await axios.get('https://api.github.com/users/'+username+'/repos?per_page=5&sort=created:asc&client_id='+process.env.REACT_APP_GITHUB_CLIENT_ID+'&client_secret='+process.env.REACT_APP_GITHUB_CLIENT_SECRET);
        setRepos(res.data);
        setLoading(false);
    }

    // Clear users from state
    const clearUsers = () => {
        setUsers([]);
        setLoading(false);
    }

    // set Alerts
    const showAlert = (message, type) => {
        setAlert({message, type});
        setTimeout(() => setAlert(null), 4000)
    }

    return (
        <GithubState>
            <Router>
                <div className="App">
                    <Navbar />
                    <div className={"container"}>
                        <Alert alert={alert} />
                        <Routes>
                            <Route
                                exact
                                path={"/"}
                                element={
                                <Fragment>
                                    <Search
                                        clearUsers={clearUsers}
                                        showClear={users.length > 0}
                                        setAlert={showAlert}
                                    />
                                    <Users loading={loading} users={users}/>
                                </Fragment>
                            }/>
                            <Route exact path={"/about"} element={<About/>} />
                            <Route exact path={'/user/:login'} element={
                                <User getUser={getUser}
                                      user={user}
                                      getUserRepos={getUserRepos}
                                      repos={repos}
                                      loading={loading}/>
                            }/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </GithubState>
    );
}

export default App;
