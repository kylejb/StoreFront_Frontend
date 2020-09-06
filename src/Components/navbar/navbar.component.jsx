import React, { Component } from 'react';
import NavbarRouter from './navbar.routes';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
    
    render() {
        return (
            <>
                <header>Shop Header Here</header>
                <div className="nav-header">
                   <nav>
                        <NavLink 
                            className="nav-link"
                            to="orders">
                            { "Orders " } 
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="transactions">
                            {" Transactions "}
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="cart">
                            {" Cart "}
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="login">
                            {" Login "}
                        </NavLink>
                    </nav>
                </div>
                <NavbarRouter />
            </>
        );
    }
}

export default Dashboard;