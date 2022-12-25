import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import React from 'react';
class App extends React.Component {
  state={
    datashow:"LogIn",
    initialGmail:false
  }
 render(){
  
   return (
    <>
      {this.state.datashow==="LogIn"?<LogIn app={this} initialGmail={this.state.initialGmail}/>:<SignUp app={this}/>}
    </>
  );
}
}

export default App;
