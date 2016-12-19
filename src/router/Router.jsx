import Todo from '../components/TodoApp';
import Login from '../components/Login';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from '../firebase/index'
import React from 'react';

var requireLogin = (nextState, replace, next)=>{
    if (!firebase.auth().currentUser){
        replace('/');
    }
    next();
};

var redirectIfLoggedIn = (nextState, replace, next)=> {
    if (firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
};

export default (
    <Router history={hashHistory}>
        <Route path='/'>
            <Route path='todos' component={Todo} onEnter={requireLogin} />
            <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
        </Route>
    </Router>
)