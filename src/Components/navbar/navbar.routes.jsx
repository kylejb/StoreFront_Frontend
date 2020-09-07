import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Orders from './orders.component';
import Transactions from './transactions.component';
import UserContainer from '../../Containers/UserContainer'
import LoginForm from '../LoginForm';


class NavbarRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/orders" component={Orders} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/signin" render={() => <UserContainer handleUserState={this.props.handleUserState} />} />
            </div>
        );
    }
}

export default NavbarRouter;