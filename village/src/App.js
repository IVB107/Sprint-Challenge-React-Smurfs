import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount = () => {
    console.log(this.props);
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleAddSmurf = (e, smurf) => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data });
        // this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleEditSmurf = () => {

  }

  handleDeleteSmurf = (e, id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/smurf-form" render={props => 
          <SmurfForm 
            {...props}
            addSmurf={this.handleAddSmurf} 
          />
        }/>
        <Route exact path="/" render={props => 
          <Smurfs 
            {...props}
            smurfs={this.state.smurfs} 
            edit={this.handleEditSmurf}
            delete={this.handleDeleteSmurf}
          />
        }/>
      </div>
    );
  }
}

export default App;
