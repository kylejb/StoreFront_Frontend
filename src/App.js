import React, { useState } from 'react';
import AppRoute from './app.routes';
import ShopContainer from './Containers/ShopContainer';
import {Redirect} from 'react-router-dom'


const App = () => {
  const [user, setUser] = useState(null),
        [token, setToken] = useState(null);
  
  const setAppState = (newUserObj, newUserToken) => {
    console.log("setAppState", newUserObj, newUserToken)
    setUser(newUserObj); setToken(newUserToken)
    return <Redirect to='/' />
    

  }

  return (
    <div className="App">
      <AppRoute handleUserState={setAppState} user={user} token={token} /> 
      <ShopContainer user={user} token={token} />
    </div>
  );
}

export default App;
