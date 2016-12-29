import Router from './router/Router'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {hashHistory} from 'react-router';
import firebase from './firebase/index';

// import redux tools
var actions = require('./actions/reduxActions');
var store = require('./store/configureStore').config();

firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.initTodos());
        hashHistory.push('/todos');
    } else {
        store.dispatch(actions.logout());

        hashHistory.push('/');
    }
});

// custom styles
import './styles/app.sass'

// Load foundation
import 'foundation-sites/dist/foundation.min.css'

ReactDOM.render(
    <Provider store={store}>
        {Router}
    </Provider>,
    document.getElementById('root')
);
