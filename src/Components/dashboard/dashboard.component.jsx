import React, { Component } from 'react';
import DashboardRouter from './dashboard.routes';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
    
    render() {
        return (
            <div className="main">
                <h4>eCommerce Dashboard</h4>
                <nav>
                   <NavLink 
                       className="nav-main-anchor" 
                       to="orders">
                       Orders
                   </NavLink>
                   <NavLink 
                       className="nav-main-anchor"    
                       to="transactions">
                       Transactions
                   </NavLink>
                </nav>
                <div>
                    <DashboardRouter/>
                </div>
            </div>
        );
    }
}

export default Dashboard;