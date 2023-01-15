import React, { Component } from 'react'
import ProfileImg from '../../images/ProfileImg.png'
import axios from 'axios';
import './style.css'
import { API } from '../API';
export default class Welcome extends Component {
    state={
        user:'user',
    }
    componentDidMount(){
        axios
      .get(`${API}/users/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        this.setState({ user: response.data.name });
      })
      .catch(error => {
        console.log(error);
      });
    }
    render() {
        return (
            <div className='Welcome'>
                <p>Welcome back, {this.state.user}!</p>
                <img src={ProfileImg} alt="" />
            </div>
        )
    }
}
