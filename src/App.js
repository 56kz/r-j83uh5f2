import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: ""
    }
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.form} onChange={this.updateForm.bind(this)}>form</textarea>
        <div className="counter">{this.state.form.length}</div>
      </div>
    );
  }

  updateForm(event){
    this.setState({
      form: event.target.value
    })
  }
}

export default App;
