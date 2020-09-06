import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Dashboard from './Components/dashboard/dashboard.component';

class AppRoute extends Component {

    render() {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <Route path="/" component={Dashboard}/>
            </Router>
        );
    }
}

export default AppRoute;