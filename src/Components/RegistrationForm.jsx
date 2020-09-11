import React, { useState } from 'react';

const RegistrationForm = ( props ) => {
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [name, setName] = useState("");
        
        
        const handleSubmitHelper = (e) => {
            e.preventDefault();
            handleRegistrationForm()
            props.handleUserState({name: name,email: email, password: password})
        }

   
    const handleRegistrationForm = async () => {
        

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ user: {name: name, email: email, password: password} })
        };

        let response = await fetch("http://localhost:3000/api/v1/users", options);
        let data = await response.json();
        console.log("handleRegistrationForm Fetch Response: ", data);
        props.handleUserState(data.user,data.jwt)
    }


    return (
        <>
            <h2>RegistrationForm</h2>
            <form onSubmit={handleSubmitHelper}>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="email address" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="submit"/>
            </form>
        </>
    );
}

export default RegistrationForm;