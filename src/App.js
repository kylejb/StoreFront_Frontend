import React from 'react';
import AppRoute from './app.routes';
// import UserContainer from './Containers/UserContainer';
// import ItemsContainer from './Containers/ItemsContainer';
import UserItemsWrapper from './Containers/UserItemsWrapper';

const App = () => {
  // const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AppRoute />
      <UserItemsWrapper />
    </div>
  );
}

export default App;
