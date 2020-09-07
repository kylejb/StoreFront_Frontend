import React, { useState } from 'react';
import AppRoute from './app.routes';
import ItemsContainer from './Containers/ItemsContainer';
import UsersContainer from './Containers/UsersContainer';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AppRoute />
      <ItemsContainer />
      <UsersContainer user={user} />
    </div>
  );
}

export default App;
