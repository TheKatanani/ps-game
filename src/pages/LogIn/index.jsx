import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";

import Container from "../../Components/Container";
import Button from "../../Components/Button";
import MainText from "../../Components/MainText";
import FormText from "../../Components/FormText";
import Logo from "../../Components/Logo";
import Input from "../../Components/Input";
import Or from "../../Components/Or";
import LogInIcons from "../../Components/LogInIcons";
// the images
import GoogleIcon from "../../images/flat-color-icons_google.svg";
import Github from "../../images/Vectorgithub.png";
import Ln from "../../images/Vectorin.png";
import Twitter from "../../images/Vectortwitter.png";
import LogInImg from "../../images/superscene-34-joystick_trans 1.png";
import logInPassword from "../../images/VectorpasswordIcon.png";
// to fill defult data in four buttons and defult gmail from the signUp 
const initialData = {
  gmail: {
    email: "exampleGmail@gmai.com",
    password: "example123",
  },
  github: {
    email: "exampleGithub@gmai.com",
    password: "example123",
  },
  linkedIn: {
    email: "exampleLinkedIn@gmai.com",
    password: "example123",
  },
  twitter: {
    email: "exampleTwitter@gmai.com",
    password: "example123",
  },
};

const defaults = {
  email: "",
  password: "",
  passwordType: "password"
};
export default class LogIn extends Component {
  // if the user click on the login used gmail fil the email &password by defult from the initialData objeact 
  state = {
    email: this.props.props.initialGmail ? initialData.gmail.email : "",
    password: this.props.props.initialGmail ? initialData.gmail.password : "",
    myData: defaults,
    passwordType: "password"
  };
  // just to return the byGmail state in app = false 
  componentDidMount() {
    this.props.props.initialGmail && this.props.props.byGmail()
  };
  handleLogIn = (by) => {
    this.setState({
      email: initialData[by].email,
      password: initialData[by].password,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // there is no DataBase to validation 
    // if in the input any data change tha path used useNavigate 
    if (this.state.email && this.state.password) {
      this.setState((prevState) => ({
        myData: {
          email: prevState.email,
          password: prevState.password,
        },
        ...defaults,
      }));
      console.log("before the Navigate");
      this.props.Navigate("/GameDay")
    }
  };
  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <Container>
        <div className="mainbox LogIn">
          {/* the left part */}

          <div className={`imgBox ${this.props.class || ""}`}>
            <Logo className="logIn" />
            <MainText className="logIn" />
            <img src={LogInImg} alt="" className="LogInImg" />
          </div>

          {/* REIGHT PART */}

          <div className="form">
            <div className="content">
              <FormText
                className="login"
                H1="Join the game!"
                P="Go inside the best gamers social network!"
              />
              <div className="icons">
                <LogInIcons
                  img={GoogleIcon}
                  onclick={() => this.handleLogIn("gmail")}
                />
                <LogInIcons
                  img={Github}
                  onclick={() => this.handleLogIn("github")}
                />
                <LogInIcons
                  img={Ln}
                  onclick={() => this.handleLogIn("linkedIn")}
                />
                <LogInIcons
                  img={Twitter}
                  onclick={() => this.handleLogIn("twitter")}
                />
              </div>

              {/* THE FORM  */}

              <form onSubmit={this.handleSubmit}>
                <Or />
                {/* <Input id="" type="" placeholder="" label=""/> */}
                <Input
                  onChange={this.handleChangeInput}
                  id="email"
                  type="email"
                  placeholder="Write your email"
                  label="Your email"
                  value={this.state.email}
                />

                {/* TO ADD THE ICON TO THE INPUT */}

                <div className={`logInPassword ${this.state.passwordType}`}>
                  <span>
                    <img src={logInPassword} alt="" onClick={() => {
                      this.setState({
                        passwordType:
                          this.state.passwordType === "password" ? "text" : "password"
                      })
                    }} />
                  </span>
                  <Input
                    onChange={this.handleChangeInput}
                    id="password"
                    type={this.state.passwordType}
                    placeholder="Password"
                    label="Enter your password"
                    value={this.state.password}
                  />
                </div>

                <Button
                  className="Login"
                  type="submit"
                  bgColor="#1565D8"
                  color="#fff"
                >
                  Login
                </Button>
                <p className="Register">
                  Don’t have an account?{" "}
                  <Link to="/SignUp">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
// to pass the Navigate to use it in class components
export function LogInRoute(props) {
  const Navigate = useNavigate();
  // pass all the props from the app 
  return <LogIn Navigate={Navigate} props={props} />
}