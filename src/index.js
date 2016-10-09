import React from 'react';
import ReactDOM from 'react-dom';
import { observable, autorun } from 'mobx';

import App from './App.jsx';


ReactDOM.render( <App name='Guys' age={23}/>, document.getElementById('root'));


/*================
      mobX
================*/
let state = observable({
  name: ''
});

let state2 = observable({
  age: 0
});

autorun( () => {
  console.log(state.name);
  console.log(state2.age);
});

state.name = 'SirGuys';
state.name = 'Sarawut';
state2.age = 23;
