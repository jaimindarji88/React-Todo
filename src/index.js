import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './components/TodoApp';

// import redux tools
var actions = require('./actions/reduxActions');
var store = require('./store/configureStore').config();

store.subscribe(()=>{
    console.log('New', store.getState());
});

store.dispatch(actions.addTodo('et'));
store.dispatch(actions.setSearchText('asddasd'));
store.dispatch(actions.toggleShowCompleted());

// custom styles
import './styles/app.sass'

// Load foundation
import 'foundation-sites/dist/foundation.min.css'

ReactDOM.render(
  <ToDo />,
  document.getElementById('root')
);
