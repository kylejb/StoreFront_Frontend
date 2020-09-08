import React, { useState } from 'react';

const RegistrationForm = ( props ) => {
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [passwordConfirmation, setPasswordConfirmation] = useState("");
        
        
    const handleSubmitHelper = (e) => {
        e.preventDefault();
        props.handleSubmit({email: email, password: password})
    }

    //* this form will be refactored after login functionality
    // handleRegistrationForm = async (newUserObj) => {
    //     console.log("Create New User Here", newUserObj)

    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //         },
    //         body: JSON.stringify({ user: newUserObj })
    //     };

    //     let response = await fetch("http://localhost:3000/api/v1/users", options);
    //     let data = await response.json();
    //     console.log("handleRegistrationForm Fetch Response: ", data);
    //     let newState = {...this.state}; newState.currentUser = data.user; newState.token = data.jwt;
    //     this.setState({newState});
    // }


    return (
        <>
            <h2>RegistrationForm</h2>
            <form onSubmit={handleSubmitHelper}>
                <input type="text" placeholder="email address" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="text" placeholder="password confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                <input type="submit"/>
            </form>
        </>
    );
}

export default RegistrationForm;