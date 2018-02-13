// Visibility toggle + STATE

import React from 'react';
import ReactDOM from 'react-dom';

class Visibility extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && <p>Showing the details</p>}
      </div>
    )
  }
}

// Rendering____________________________________________________________________
  ReactDOM.render(
    <Visibility />,
    document.getElementById('app'))
