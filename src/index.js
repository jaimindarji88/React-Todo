import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './components/TodoApp';
import { Provider } from 'react-redux';

// import redux tools
var actions = require('./actions/reduxActions');
var store = require('./store/configureStore').config();

store.dispatch(actions.initTodos());

// custom styles
import './styles/app.sass'

// Load foundation
import 'foundation-sites/dist/foundation.min.css'

ReactDOM.render(
    <Provider store={store}>
        <ToDo />
    </Provider>,
    document.getElementById('root')
);
