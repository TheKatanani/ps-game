import SignUp from './pages/SignUp';
import { LogInRoute } from './pages/LogIn';
import React from 'react';
import GameDay from './pages/GameDay';
import {  Route , Routes   } from 'react-router-dom';
class App extends React.Component {
  state={
    initialGmail:false
  }
  byGmail = (v=false)=>{
    this.setState({initialGmail:v})
  }
 render(){
   return (
    <>
    <Routes >
      <Route path="/" element={<LogInRoute byGmail={this.byGmail} initialGmail={this.state.initialGmail}/>}/> 
      <Route path="/SignUp" element={<SignUp  byGmail={this.byGmail}/>}/>
      <Route path="/GameDay" element={<GameDay />}/>        
    </Routes >
    </>
  );
}
}

export default App;
