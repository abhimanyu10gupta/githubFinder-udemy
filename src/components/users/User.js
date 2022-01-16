import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";




 function User(props) {
    const params = useParams();
     useEffect(()=> {
         props.getUser(params.login).then();
     }, [])
     const {name, avatar_url,  location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = props.user;
     const {loading} = props;
        return (
            <div>{name}</div>
        )

}

export default User
