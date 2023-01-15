import React, { Component } from 'react'
import LastPlayed from '../../Components/LastPlayed'
import MostRecent from '../../Components/MostRecent'
import NewGame from '../../Components/NewGame'
import './style.css'
import Friends from '../../Components/Friends'
export default class GameDay extends Component {
  render() {
    return (<div className='GameDay'>
        <section>
          <NewGame />
        </section>
        <section className='sesstion2'>
          <LastPlayed />
          <MostRecent />
          <Friends />
        </section>
      </div>
    )
  }
}
