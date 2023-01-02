import React, { Component } from 'react'
import './style.css'
import img from '../../images/png-clipart-disgaea-3-playstation-3-playstation-4-xbox-360-trophy-golden-cup-game-medal 1.png'
export default class MostRecent extends Component {
    render() {
        return (
            <div className='MostRecent'>
                <h3>most recent trophy</h3>
                <div className="box">
                    <img src={img} alt="" />
                    <div className="title">
                        <p>perfect KILL streak</p>
                        <p>You are in the 0.5%</p>
                    </div>
                    <p className="title"> </p>
                    <div className="desc">
                        <p>assassin's creed odyssey</p>
                        <p>last played: 34 hours ago</p>
                    </div>
                </div>
            </div>
        )
    }
}
