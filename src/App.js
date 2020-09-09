import React, { useState } from 'react';
import AppRoute from './app.routes';


const App = () => {
  const [user, setUser] = useState(null),
        [token, setToken] = useState(null);
  
  const setAppState = (newUserObj, newUserToken) => {
    console.log("setAppState", newUserObj, newUserToken)
    setUser(newUserObj); setToken(newUserToken)

  }

  return (
    <div className="App">
      <AppRoute handleUserState={setAppState} user={user} token={token} /> 
    </div>
  );
}

export default App;
