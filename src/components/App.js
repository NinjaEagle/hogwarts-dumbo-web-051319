import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import PigCard from './PigCard.js';
import Filter from './Filter.js'

class App extends Component {
  generatePigCards = () => {
    return hogs.map(hog => (<PigCard key ={hog.name} name={hog.name} specialty = {hog.specialty} greased ={hog.greased}/>))

  }
  state = {
    hogs: hogs
  }

  clickedButton = event => {
    if (event.target.className === "greased-hogs") {
      const filteredHogs = hogs.filter(hog => hog.greased)
      this.setState({
        hogs: filteredHogs
      })
    }
  }
  sortAscending = () => {
      const sortByName = this.state.hogs.sort((a, b) => a.name.localeCompare(b.name))
      this.setState({ hogs: sortByName})
    }

  render() {
    return (
      <div className = "App">
          < Nav />
          < Filter clickedButton = {this.clickedButton} sortAscending= {this.sortAscending}/>

          <div className="ui grid container">
          {this.generatePigCards()}

          </div>
      </div>
    )
  }
}

export default App;
