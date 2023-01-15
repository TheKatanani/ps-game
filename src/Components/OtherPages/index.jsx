import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './stayles.css'
export default class OtherPages extends Component {
    render() {
        return (
            <ul className="setting">
                <li>
                    <Link to="/">GameDay</Link>
                </li>
                <li>
                    <Link to="/Profile">Profile</Link>
                </li>
                <li>
                    <Link to='/Users'>Users List</Link>
                </li>
                <li>
                    <button onClick={this.props.logout}>logout</button>
                </li>
            </ul>
        )
    }
}
