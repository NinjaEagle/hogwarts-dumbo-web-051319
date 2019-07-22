import React, {Component} from 'react'
import hogs from '../porkers_data';
import mudblood from '../hog-imgs/mudblood.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import piggy from '../hog-imgs/piggy_smalls.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import rainbowdash from '../hog-imgs/rainbowdash.jpg'
import truffle from '../hog-imgs/truffleshuffle.jpg'
import bay from '../hog-imgs/bay_of_pigs.jpg'
import prosciutto from '../hog-imgs/the_prosciutto_concern.jpg'
import galaxy from '../hog-imgs/galaxy_note.jpg'
import leggo from '../hog-imgs/leggo_my_eggo.jpg'
import augustus from '../hog-imgs/augustus_gloop.jpg'


const pigs = {
  'Mudblood': mudblood,
  'porkchop': porkchop,
  'Cherub': cherub,
  'Piggy smalls': piggy,
  'Trouble' : trouble,
  'Sobriety' : sobriety,
  'Rainbowdash' : rainbowdash,
  'Truffle' : truffle,
  'Bay of Pigs' : bay,
  'The Prosciutto Concern' : prosciutto,
  'Galaxy Note' : galaxy,
  'Leggo My Eggo' : leggo,
  'Augustus Gloop' : augustus
}

export default class Index extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		hover: false
  	 }
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  render() {
    let content = null
    if (this.state.hover) {
      content = (
        <div>
          <p> Specialty: {this.props.specialty}</p>
          <p> Greased: {this.props.greased}</p>
        </div>
      )
   } else {
    content = (
      <div>
        <h1> Name: {this.props.name} </h1>
      </div>
    )
   }
    const isHovered = this.state.hover;
    // console.log(isHovered)
    return (

      <div className="pigTile">
      <div onMouseEnter={this.toggleHover}  onMouseLeave={this.toggleHover}>
      {content}
      </div>
        <img src = {pigs[this.props.name]}/>

      </div>
    )
  }
}
