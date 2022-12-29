import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import React from 'react';
class App extends React.Component {
  state={
    datashow:"LogIn",
    initialGmail:false
  }
  pageShow = (bage,byGmail=false)=>{
    this.setState({datashow:bage,
    initialGmail:byGmail
    })
  }
 render(){
   return (
    <>
      {this.state.datashow==="LogIn" ? 
      <LogIn pageShow={this.pageShow} initialGmail={this.state.initialGmail}/> : 
      <SignUp pageShow={this.pageShow} />}
    </>
  );
}
}

export default App;
