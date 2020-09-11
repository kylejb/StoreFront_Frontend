import React, { Component } from 'react';
import NavbarRouter from './navbar.routes';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
    constructor(){
        super()
        this.state=({
            clickStatus: undefined
        });
    }

    mouseChange = () =>{
        let status = this.state.clickStatus
        this.state.clickStatus? status=undefined: status="show"
        this.setState({
            ...this.state,
            clickStatus: status
        })
    }

    logInOrOut=()=>{

      return this.props.user ? ` Logout `: " "
    }
    
    
    currentUser = () => {
        return ((this.props.user && this.props.user.email) || "login")
    }

    render() {
        return (
            <>
                <header>Shop Header Here</header>
                <p id="menuButton" onClick={this.mouseChange}><strong>Menu</strong></p>
                <div id="navMenu" className={this.state.clickStatus} onMouseLeave={this.mouseChange}>
                   <nav>
                        <NavLink 
                            className="nav-link"
                            to="/">
                            <h2>
                                {" Home "} 
                            </h2>
                        </NavLink>
                        <NavLink
                            className="nav-link"

                            to="/items">
                            <h2>
                                {" Items "}
                            </h2>
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/checkout">
                            <h2>
                                {" Checkout "}
                            </h2>
                        </NavLink>
                        <NavLink
                            className="nav-link"

                            to="/register">
                            <h2>
                                {" Register"}
                            </h2>
                        </NavLink>

                        <NavLink
                            className="nav-link"

                            to="/">
                        <NavLink
                            className="nav-link"

                            to={this.currentUser}>
                            <h2>
                                {this.props.user? `WELCOME ${this.props.user.email}  `: " Login "} 
                            </h2>
                        </NavLink>
                            <h2>
                                {this.logInOrOut()}
                            </h2>
                        </NavLink>
                    </nav>
                </div>

                <NavbarRouter handleUserState={this.props.handleUserState} user={this.props.user} />

            </>
        );
    }
}

export default Dashboard;