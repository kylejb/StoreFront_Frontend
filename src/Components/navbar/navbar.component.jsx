import React, { Component } from 'react';
import NavbarRouter from './navbar.routes';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
    
    currentUser = () => {
        return ((this.props.user && this.props.user.email) || "login")
    }

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
                            to="/items/cart">
                            {" Cart "}
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to={this.currentUser}>
                            {" Login "}
                        </NavLink>
                    </nav>
                </div>
                <NavbarRouter handleUserState={this.props.handleUserState} user={this.props.user} />
            </>
        );
    }
}

export default Dashboard;