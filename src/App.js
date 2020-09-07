import React, { useState } from 'react';
import AppRoute from './app.routes';
// import UserContainer from './Containers/UserContainer';
// import ItemsContainer from './Containers/ItemsContainer';
import ShopContainer from './Containers/ShopContainer';
import Navbar from './Components/navbar/navbar.component';

const App = () => {
  // const [user, setUser] = useState(null),
  //       [token, setToken] = useState(null);
  
  // const setAppState = (newUserObj, newUserToken) => {
  //   setUser(newUserObj); setToken(newUserToken)
  // }

  // prop for components below, if we use user state here: 
  return (
    <div className="App">
      <AppRoute handleUserState={"setAppState"}/> 
      <ShopContainer handleUserState={"setAppState"} />
    </div>
  );
}

export default App;
