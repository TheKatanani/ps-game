import React, { Component } from 'react'
import Logo from '../Logo'
import './style.css'
export default class Alert extends Component {
  render() {
    return (
        <div className="Alert">
        <h2 className="Alert-InText">
        successfully registered
        </h2>
        <div className='AlertBtns'>
        <button className="Alert-InBtn Btn-Right" onClick={this.props.Login}>LogIn</button>
         <button className="Alert-InBtn Btn-Left" onClick={this.props.close}>close</button>
        </div>
         <Logo className="logIn"/>
      </div>
    )
  }
}
