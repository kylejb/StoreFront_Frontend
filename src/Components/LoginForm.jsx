import React, { useState } from 'react';

const LoginForm = ( props ) => {
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [passwordConfirmation, setPasswordConfirmation] = useState("");
        
        
    const handleSubmitHelper = (e) => {
        e.preventDefault();
        props.handleSubmit({email: email, password: password})
    }


    return (
        <>
            <h2>LoginForm</h2>
            <form onSubmit={handleSubmitHelper}>
                <input type="text" placeholder="email address" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="text" placeholder="password confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                <input type="submit"/>
            </form>
        </>
    );
}

export default LoginForm;