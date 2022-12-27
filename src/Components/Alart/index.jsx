import React, { Component } from 'react'
import Logo from '../Logo'
import './style.css'
export default class Alert extends Component {
  render() {
    return (
        <div class="Alert">
        <h2 class="Alert-InText">
        successfully registered
        </h2>
        <div className='AlertBtns'>
        <button class="Alert-InBtn Btn-Right" onClick={this.props.Login}>LogIn</button>
         <button class="Alert-InBtn Btn-Left" onClick={this.props.close}>close</button>
        </div>
         <Logo className="logIn"/>
      </div>
    )
  }
}
