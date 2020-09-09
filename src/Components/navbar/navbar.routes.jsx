import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Orders from './orders.component';
import Transactions from './transactions.component';
import LoginForm from '../LoginForm';
// import UserContainer from '../../Containers/UserContainer'


class NavbarRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/orders" component={Orders} />
                {/* <Route path="/items" component={Transactions} /> */}
                <Route path="/login" render={(routerProps) => <LoginForm {...routerProps} handleUserState={this.props.handleUserState} />} />
            </div>
        );
    }
}

export default NavbarRouter;