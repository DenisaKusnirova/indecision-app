import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.addNewOption = this.addNewOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  addNewOption(e){
    e.preventDefault()
    // next we want to grab an option text
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => ({error: error}))

    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return(
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.addNewOption}>
          <input className="add-option__input" type="text" name="option"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}
