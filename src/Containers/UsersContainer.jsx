import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserForm from '../Components/UserForm';

function UsersContainer(props) {
    const [token, setToken] = useState("");

    // fetch helper function
    const fetchUser = async (bodyObj) => {
        let endPoint, fetchMethod, url = `http://localhost:3001/api/v1/${token === "" ? (endPoint = 'login') : (endPoint = 'profile')}`;
        
        // fetchMethod === 'GET' ? myHeader = ('Authorization':`bearer ${token}`) : null

        const options = {
            method: `${endPoint === 'login' ? fetchMethod = 'POST' : fetchMethod = 'GET'}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(bodyObj)
        };

        // let response = await fetch(url, options)
    }


    const handleSignup = async (bodyObj) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ user: { bodyObj } })
        };
        let response = await fetch("http://localhost:3001/api/v1/login", options);
        let data = await response.json();
        setToken(data.jwt);
    }

    const handleLogin = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `bearer ${token}`
            }
        };
        let response = await fetch("http://localhost:3001/api/v1/profile", options);
        let data = await response.json();
        console.log(data);
    }  

    return (
        <>
            <h1>UsersContainer</h1>
            <Switch>
                <Route path="/signup" render={() => <UserForm token={token} handleSubmit={handleSignup}/>}/>
                <Route path="/login" render={() => <UserForm token={token} handleSubmit={handleLogin}/>}/>
            </Switch>
        </>
        
    );
}

export default UsersContainer;