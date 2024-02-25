import SignUp from './pages/SignUp';
import { LogInRoute } from './pages/LogIn';
import React from 'react';
import GameDay from './pages/GameDay';
import UserList from './pages/UserList';
import User from './pages/User';
import {   Route , Routes, useNavigate   } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Plans from './pages/Plans'
import Setting from './pages/Setting'
import PageNotFound from './Components/PageNotFound';
const AppWithUseNavegate =()=>{
  const Navigate=useNavigate();
  return <App Navigate={Navigate}/>
}
class App extends React.Component {
  state={
    initialGmail:false,
    isAuthorized: false,
  }
  byGmail = (v=false)=>{
    this.setState({initialGmail:v})
  }
  
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) this.setState({ isAuthorized: true });
  }

  login = () => this.setState({ isAuthorized: true });

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this.setState({ isAuthorized: false });
    this.props.Navigate("/")
  };

 render(){
   return (
    <>
        {this.state.isAuthorized?(
          <Routes>
            <Route path="/" element={<Home logout={this.logout}/>}>
              <Route index element={<GameDay />}/>
              <Route path="Profile" element={<Profile/>}/>
              <Route path="Users" element={<UserList/>}/>
              <Route path="Users/:id" element={<User/>}/>
              <Route path="Plans" element={<Plans/>}/>
              <Route path="Setting" element={<Setting/>}/>
              <Route path="*" element={<PageNotFound/>}/>
            </Route> 
          </Routes>
        ):(
          <Routes>
            <Route path="/" element={<LogInRoute byGmail={this.byGmail} login={this.login} initialGmail={this.state.initialGmail}/>}/>
            <Route path="/SignUp" element={<SignUp  byGmail={this.byGmail}/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
          )}
    </>
 )
}
}

export default AppWithUseNavegate;
