import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx'
import Foundation from 'foundation-sites'

// Load foundation
import 'foundation-sites/dist/foundation.min.css'
console.log(Foundation)
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
