import React, {useReducer} from 'react';
import axios from 'axios'
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";

import {
    SEARCH_USERS,
    SET_ALERT,
    SET_LOADING,
    GET_REPOS,
    GET_USER,

} from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    //Search Users

    //Get User

    // Get repos

    //Clear Users

    // Set Loading

    return <GithubContext.Provider
        value = {{
            users: state.users,
            user:state.user,
            repos:state.repos,
            loading: state.loading,
        }}>

        {props.children}
    </GithubContext.Provider>
}

export default GithubState
