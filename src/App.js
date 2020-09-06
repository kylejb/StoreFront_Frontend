import React from 'react';
import ItemsContainer from './Containers/ItemsContainer';
import UsersContainer from './Containers/UsersContainer';
import './App.css';
import {BrowserRouter as Router,  Route} from 'react-router-dom';

function App() {
  return (
    <Router >
    <div className="App">
    <ItemsContainer/>

      <UsersContainer />
    </div>
    </Router>
  );
}

export default App;
