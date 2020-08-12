import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from "jquery";
import Choices from "./Choices.js";

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    newChoice: "",
    listOfChoices: ["choice 1", "choice 2", "hello", "choice 4", "choice 5", "choice 6"],
    selectedChoices: []
  }
}

  callbackFunction = (childData) => {
    this.setState({selectedChoices: childData})
  }

  render() {
  return (
    <Choices min={3} max={6} initialChoices={this.state.listOfChoices}/>
  )}
}

export default App;
