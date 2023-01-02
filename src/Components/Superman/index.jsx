import React, { Component } from 'react'
import superman from '../../images/Suicidesquadteaser 1.png'
import './style.css'
export default class Superman extends Component {
    render() {
        return (
            <div className='Superman'>
                <img src={superman} id="Superman" alt="" />
                <p>Be part of the Suicide Squad and kill the Justice League!
<p>-Amanda Waller</p></p>
            </div>
        )
    }
}
