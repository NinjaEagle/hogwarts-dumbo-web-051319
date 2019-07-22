import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div>
      <select>
        <option value = 'default'> Default </option>
        <option value = 'name'> Name </option>
        <option value = 'weight'> Weight </option>
      </select>
      <button className = 'greased-hogs' onClick ={this.props.clickButton}>See Only Greased Hogs </button>
      <button className = 'name-sort' onClick={this.sortAscending}>Sort By Name A-Z</button>
      </div>
    );
  }

}

export default Filter;
