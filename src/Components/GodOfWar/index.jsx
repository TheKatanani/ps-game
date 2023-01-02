import React, { Component } from 'react'
import imgName from '../../images/God-of-war-ragnarok--removebg-preview 1.png'
import godOfWar from '../../images/godOfWar.png'

import './style.css'
export default class GodOfWar extends Component {
    render() {
        return (
            <div className='GodOfWar'>
                <img src={imgName} id="imgName" alt="" />
                <img src={godOfWar} id="GodOfWar" alt="" />
                <p>Join in the new DLC with Kratos to learn more about him and his future.</p>
            </div>
        )
    }
}
