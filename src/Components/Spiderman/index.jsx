import React, { Component } from 'react'
import imgName from '../../images/ed663199338341 1.png'
import spiderman from '../../images/HD-wallpaper-miles-morales-ps5-spiderman-watch-removebg-preview 1.png'

import './style.css'
export default class Spiderman extends Component {
    render() {
        return (
            <div className='Spiderman'>
                <img src={imgName} id="imgName" alt="" />
                <img src={spiderman} id="spiderman" alt="" />
                <p>Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks.</p>
            </div>
        )
    }
}
