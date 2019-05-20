// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {

  constructor(props){
    super(props)

    this.state = {
      mood: this.props.mood || 'happy'
    }

    this.toggleMood = this.toggleMood.bind(this)
  }

  toggleMood() {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }

  render(){
    return <div onClick={this.toggleMood}>{this.state.mood}</div>;
  }
}
