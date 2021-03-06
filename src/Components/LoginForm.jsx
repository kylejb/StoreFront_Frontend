import React, { useState } from 'react';

const LoginForm = ( props ) => {
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");
        // [passwordConfirmation, setPasswordConfirmation] = useState("");
        
        
    const handleSubmitHelper = async (e) => {
        e.preventDefault();

        let currentUserObj = { 
            email: email,
            password: password
        }

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
        props.handleUserState(data.user, data.jwt)
        props.history.push('/')
    }

    return (
        <>
            <h2>LoginForm</h2>
            <form onSubmit={handleSubmitHelper}>
                <input type="text" placeholder="email address" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="submit"/>
            </form>
        </>
    );
}

export default LoginForm;