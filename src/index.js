// PROPS- allow the components to communicate
// this- referece to the current instance of a component
// STATE- allows our components to manage the data, it rerenders the app when
// those data changes
// STATELESS FUNCTIONAL COMPONENT:
// const User = (props) => {
//   return(
//     <div>
//       <p>Name: {props.name} </p>
//       <p>Age: </p>
//     </div>
//   )
// }

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss'


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
