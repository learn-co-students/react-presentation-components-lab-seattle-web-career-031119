import React, {Component} from "react";

class SimpleComponent extends Component {
  constructor() {
    super()
    this.state= {
      mood: "happy"
    }
  }

  handleClick = () => {
    let tempMood = ''
    if (this.state.mood === 'happy') {
      tempMood = 'sad'
    } else {
      tempMood = 'happy'
    }
    this.setState({
      mood: tempMood
    })
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent
