import React, { Component } from 'react'
import LastPlayed from '../../Components/LastPlayed'
import MostRecent from '../../Components/MostRecent'
import NewGame from '../../Components/NewGame'
import Welcome from '../../Components/Welcome'
import game from '../../images/Game-two (游戏).png'
import Like from '../../images/Like (喜欢).png'
import Setting from '../../images/Setting-two (设置).png'
import Puzzle from '../../images/Puzzle (拼图).png'
import Light from '../../images/LIGHT THEME.png'
import './style.css'
import Friends from '../../Components/Friends'
export default class GameDay extends Component {
  render() {
    return (<div className='GameDay'>
        <nav>
          <ul>
            <li><img src={game} alt="" /></li>
            <div>
              <li><img src={Like} alt="" /></li>
              <li><img src={Setting} alt="" /></li>
              <li><img src={Puzzle} alt="" /></li>
            </div>
            <li><img src={Light} alt="" /></li>
          </ul>
        </nav>
        <div className='contint'>
          <Welcome />
          <NewGame />
          <div className='sesstion2'>
            <LastPlayed />
            <MostRecent />
            <Friends/>
          </div>
        </div>
      </div>
    )
  }
}
