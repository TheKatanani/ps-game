import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../Components/Nav'
import Welcome from '../../Components/Welcome'
import './styles.css'
export default class Home extends Component {
    render() {
        return (<div className='Home'>
            <Nav logout={this.props.logout}/>
            <Welcome/>
            <div className='contint'>
                <Outlet/>
                {/* there profile and user list and main page 'gameday' */}
            </div>
        </div>
        )
    }
}