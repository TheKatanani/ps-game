import React, { Component } from 'react'
import ProfileImg from '../../images/ProfileImg.png'
import './style.css'
export default class Welcome extends Component {
    render() {
        return (
            <div className='Welcome'>
                <p>Welcome back,
                    Jenny!</p>
                <img src={ProfileImg} alt="" />
            </div>
        )
    }
}
