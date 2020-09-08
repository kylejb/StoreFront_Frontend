import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Navbar from './Components/navbar/navbar.component';
// import LoginForm from './Components/LoginForm';


class AppRoute extends Component {

    render() {
        const history = createBrowserHistory();
        return (
                <Route path="/" render={(routerProps) => <Navbar {...routerProps} handleUserState={this.props.handleUserState} />} />
            
        );
    }
}

export default AppRoute;