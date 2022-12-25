import React, { Component } from 'react'
import './style.css'
export default class LogInIcons extends Component {
  render() {
    return (
      <div className='LogInIcon' onClick={this.props.onclick}>
        <img src={this.props.img} alt="" />
      </div>
    )
  }
}
