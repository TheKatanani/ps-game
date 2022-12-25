import React, { Component } from 'react'
import LogIN from '../../images/LogINLogo.png'
import SignUp from '../../images/Group 4.png'
export default class Logo extends Component {
  render() {
    return (
      <div className='Logo'>
        <img src={this.props.className==="logIn"?LogIN:SignUp} alt="" />
      </div>
    )
  }
}
