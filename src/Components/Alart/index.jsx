import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        <Link className="Alert-InBtn Btn-Right" to="/">LogIn</Link>
         <button className="Alert-InBtn Btn-Left" onClick={this.props.close}>close</button>
        </div>
         <Logo className="logIn"/>
      </div>
    )
  }
}
