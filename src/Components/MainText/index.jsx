import React, { Component } from 'react'
import './style.css'
export default class MainText extends Component {
    render() {
        return (
            <div className={`mainText ${this.props.className}`}>
                <p >
                    I always observe the people who pass by when I ride an
                    escalator. I'll never see most of them again, so I imagine a lot
                    of things about their lives... about the day ahead of them.
                </p>
                <span>Hideo Kojima</span>
                <div className="after"></div>
        </div>
        )
    }
}
