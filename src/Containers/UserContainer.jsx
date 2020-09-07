import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationForm from '../Components/RegistrationForm';
import LoginForm from '../Components/LoginForm';

const UserContainer = ( props ) => {
    const [token, setToken] = useState(null),
          [currentUser, setCurrentUser] = useState(null);


    const handleLoginForm = async (currentUserObj) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ user: currentUserObj })
        };
        let response = await fetch("http://localhost:3000/api/v1/login", options);
        let data = await response.json();
        setToken(data.jwt); setCurrentUser(data.user);
    }

    const handleRegistrationForm = async (newUserObj) => {
        // console.log("Create New User Here", newUserObj)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ user: newUserObj })
        };

        let response = await fetch("http://localhost:3000/api/v1/users", options);
        let data = await response.json();
        // console.log("handleRegistrationForm Fetch Response: ", data);
        setToken(data.jwt);
    }

    console.log("UserContainer PROPS", props)

    return (
        <>
            <h4>User Container</h4>
            {/* <LoginForm handleSubmit={handleLoginForm} /> */}
            <Switch>
                <Route path="/signin" render={() => <LoginForm handleSubmit={handleLoginForm} />} />
                <Route path="/signup" render={() => <RegistrationForm handleSubmit={handleRegistrationForm} />}/>
            </Switch>
        </>
    );
}

export default UserContainer;



    // fetch helper function
    /*
    const fetchUser = async (bodyObj) => {
        let endPoint, fetchMethod, url = `http://localhost:3000/api/v1/${token === "" ? (endPoint = 'login') : (endPoint = 'profile')}`;
        
        //? fetchMethod === 'GET' ? myHeader = ('Authorization':`bearer ${token}`) : null

        const options = {
            method: `${endPoint === 'login' ? fetchMethod = 'POST' : fetchMethod = 'GET'}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(bodyObj)
        };

        //* let response = await fetch(url, options)
    }

    //* factor function for user auth flow within app
    const handlePrivledgedRequest = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `bearer ${token}`
            }
        };
        let response = await fetch("http://localhost:3000/api/v1/profile", options);
        let data = await response.json();
        console.log(data);
    }
    */