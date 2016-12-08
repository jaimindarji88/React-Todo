import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from 'TodoApp'

// custom styles
import './styles/app.sass'

// Load foundation
import 'foundation-sites/dist/foundation.min.css'

ReactDOM.render(
  <ToDo />,
  document.getElementById('root')
);
