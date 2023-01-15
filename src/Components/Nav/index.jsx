import React, { Component } from 'react'
import game from '../../images/Game-two (游戏).png'
import Like from '../../images/Like (喜欢).png'
import Setting from '../../images/Setting-two (设置).png'
import Puzzle from '../../images/Puzzle (拼图).png'
import Light from '../../images/LIGHT THEME.png'
import './styles.css'
import OtherPages from '../OtherPages'
import { Link } from 'react-router-dom'
export default class Nav extends Component {
  state = {
    isVisible: false
};
handleSettingClick = () => {
  this.setState((prevState) => ({
    isVisible: !prevState.isVisible
  }));
}
  render() {
    return (
      <nav>
        <ul>
          <li><img src={game} alt="" /></li>
          <div>
            <li><Link to="/Plans"><img src={Like} alt=""/></Link></li>
            <li><Link to="/Setting"><img src={Setting} alt=""/></Link></li>
            <li className='relative'><img src={Puzzle} alt="" onClick={this.handleSettingClick}/>
                {this.state.isVisible&&<OtherPages id={"here the user id"} ref={this.ref1} logout={this.props.logout}/>}
            </li>
          </div>
          <li><img src={Light} alt="" /></li>
        </ul>
      </nav>
    )
  }
}
