import React, { Component } from 'react'
import GodOfWar from '../GodOfWar'
import Spiderman from '../Spiderman'
import Superman from '../Superman' 
import './style.css'
export default class NewGame extends Component {
    render() {
        return (
            <div className='NewGame'>
                <div className='newGameContainer'>
                <h3>New Game</h3>
                <div className="content">
                    <GodOfWar />
                    <Superman />   
                    <Spiderman />
                </div>
                </div>
            </div>
        )
    }
}
