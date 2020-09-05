import React from 'react';
import AppRoute from './app.routes';
import ItemsContainer from './Containers/ItemsContainer';
import UsersContainer from './Containers/UsersContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppRoute />
      <ItemsContainer />
      <UsersContainer />
    </div>
  );
}

export default App;
