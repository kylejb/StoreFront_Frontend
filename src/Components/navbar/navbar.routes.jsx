import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Orders from './orders.component';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm'



class NavbarRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/orders" component={Orders} />
                <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} handleUserState={this.props.handleUserState} />} />
                <Route path="/register" render={(routerProps) => <RegistrationForm {...routerProps} handleUserState={this.props.handleUserState} />} />
                
            </div>
        );
    }
}

export default NavbarRouter;