import React, { Component } from 'react'
import './style.css'
export default class PasswordStrong extends Component {
  render() {
    let passwordStrong = this.props.passwordStrength
    ,massege;


        if(passwordStrong==="strong"){
            massege='The password is strong'
        }else if(passwordStrong ==="medium"){
            massege='Not bad but you know you can do it better'
        }else if(passwordStrong ==="weak"){
            massege='The password is weak'
        }

    return (
      <div className={`PasswordStrong ${passwordStrong||""}`}>
        <div className='progres'>
            <span></span>
        </div>
        <p>{massege}</p>
      </div>
    )
  }
}
