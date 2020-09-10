import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Components/navbar/navbar.component';
// import { createBrowserHistory } from 'history'


class AppRoute extends Component {

    render() {
        return (
            <>
                <Route path="/" render={ (routerProps) => <Navbar {...routerProps} handleUserState={this.props.handleUserState} user={this.props.user} token={this.props.token} />} />
            </>

        );
    }
}

export default AppRoute;