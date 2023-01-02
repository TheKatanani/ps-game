import React, { Component } from 'react'
import './syle.css'
export default class LastItem extends Component {
    render() {
        const { img, text } = this.props
        return (
            <div className='LastItem'>
                <img src={img} alt="" />
                <p>{text}</p>
            </div>
        )
    }
}
