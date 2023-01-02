import React, { Component } from 'react'
import img from '../../images/FRIENDS.png'
import './style.css'
export default class Friends extends Component {
  render() {
    return (
      <div className='Friends'>
        <h3>friends</h3>
        <img src={img} alt="" />
      </div>
    )
  }
}
