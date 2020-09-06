import React from 'react';
import AppRoute from './app.routes';
import ItemsContainer from './Containers/ItemsContainer';
import UsersContainer from './Containers/UsersContainer';
import './App.css';

const App = () => {
  // const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AppRoute />
      <ItemsContainer />
      <UsersContainer />
    </div>
  );
}

export default App;
