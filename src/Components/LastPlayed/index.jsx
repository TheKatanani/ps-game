import React, { Component } from 'react'
import LastItem from '../LastItem'
import img1 from '../../images/Ellipse 2.png'
import img2 from '../../images/Ellipse 3.png'
import img3 from '../../images/Ellipse 4.png'
import img4 from '../../images/Ellipse 5.png'
import './style.css'
export default class LastPlayed extends Component {
    render() {
        const myData = [
            {
                text: "Hogwarts Legacy 50%",
                img: img1
            },
            {
                text: "God Of War: Ragnarök 72.5%",
                img: img2
            },
            {
                text: "Crash Bandicoot N. Sane Trilogy 34%",
                img: img3
            },
            {
                text: "Dying Light 2 Stay Human 100%",
                img: img4
            }
        ]
        return (
            <div className="LastPlayed">
                <h3>last played</h3>
                {myData.map((el) => <LastItem img={el.img} text={el.text} key={el.text} />)}
            </div>
        )
    }
}
