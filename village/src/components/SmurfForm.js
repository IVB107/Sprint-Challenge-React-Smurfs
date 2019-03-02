import React, { Component } from 'react';
// import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount = () => {
    this.props.isEditing 
      ? this.setState({
          name: this.props.editSmurf.name,
          age: this.props.editSmurf.age,
          height: this.props.editSmurf.height
        })
      : null;
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = this.state;
    smurf.age = parseInt(smurf.age);
    this.props.addSmurf(event, smurf);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  submitEdit = (e) => {
    e.preventDefault();
    this.props.submitEdit(e, this.props.editId, this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form 
          onSubmit={(e) => this.props.isEditing ? this.submitEdit(e) : this.addSmurf(e)}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          {this.props.isEditing 
            ? <button type="submit">Update Smurf</button>
            : <button type="submit">Add to the village</button>
          }
        </form>
      </div>
    );
  }
}

export default SmurfForm;
