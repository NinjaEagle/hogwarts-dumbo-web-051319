import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigCard from './PigCard.js'

class App extends Component {
  generatePigCards = () => {
    return hogs.map(hog => (<PigCard key ={hog.name} name={hog.name} specialty = {hog.specialty} greased ={hog.greased}/>))

  }
  state = {
    hogs,
    names: [],
  }
  sortAscending = () => {
      const { names } = this.state;
      names.sort((a, b) => a - b)
      this.setState({ names })
      console.log(names)
    }
debugger
  render() {
    return (
      <div className = "App">
          < Nav />
          <button onClick={this.sortAscending}>Sort By Name</button>
          <div className="ui grid container">
          {this.generatePigCards()}

          </div>
      </div>
    )
  }
}

export default App;
