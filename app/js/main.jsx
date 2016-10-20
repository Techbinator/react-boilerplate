import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MainLayout from './layouts/MainLayout';
import Homepage from './components/Homepage';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Homepage}/>
            <Route path="/test" component={Homepage}/>
        </Route>
    </Router>
), document.getElementById('app'));
