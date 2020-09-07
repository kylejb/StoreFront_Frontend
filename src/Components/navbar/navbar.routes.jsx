import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Orders from './orders.component';
import Transactions from './transactions.component';
// import LoginForm from '../../Components/LoginForm'
import UserContainer from '../../Containers/UserContainer';


class NavbarRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/orders" component={Orders} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/signin" component={UserContainer} />
            </div>
        );
    }
}

export default NavbarRouter;