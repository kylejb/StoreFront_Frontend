import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Orders from './orders.component';
import Transactions from './transactions.component';

class DashboardRouter extends Component {

    render() {
        return (
            <div>
                <Route path="/orders" component={Orders}/>
                <Route path="/transactions" 
                    component={Transactions}/>
            </div>
        );
    }
}

export default DashboardRouter;