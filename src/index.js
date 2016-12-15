import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './components/TodoApp';
import { Provider } from 'react-redux';
import TodoAPI from './api/TodoAPI'

// import redux tools
var actions = require('./actions/reduxActions');
var store = require('./store/configureStore').config();

store.subscribe(()=>{
    var state = store.getState();
    console.log('New', state);

    TodoAPI.setTodos(state.todos);
});

var initTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initTodos));

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
