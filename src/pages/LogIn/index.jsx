import React, { Component } from "react";
import Container from "../../Components/Container";
import GoogleIcon from "../../images/flat-color-icons_google.svg";
import Github from "../../images/Vectorgithub.png";
import Ln from "../../images/Vectorin.png";
import Twitter from "../../images/Vectortwitter.png";
import Button from "../../Components/Button";
import MainText from "../../Components/MainText";
import Logo from "../../Components/Logo";
import "./style.css";
import FormText from "../../Components/FormText";
import Input from "../../Components/Input";
import Or from "../../Components/Or";
import LogInImg from "../../images/superscene-34-joystick_trans 1.png";
import LogInIcons from "../../Components/LogInIcons";
import logInPassword from "../../images/VectorpasswordIcon.png";

const initialData = {
  gmail: {
    liEmail: "exampleGmail@gmai.com",
    liPassword: "example123",
  },
  github: {
    liEmail: "exampleGithub@gmai.com",
    liPassword: "example123",
  },
  linkedIn: {
    liEmail: "exampleLinkedIn@gmai.com",
    liPassword: "example123",
  },
  twitter: {
    liEmail: "exampleTwitter@gmai.com",
    liPassword: "example123",
  },
};

const defaults = {
  liEmail: "",
  liPassword: "",
  passwordType:"password"
};
export default class LogIn extends Component {
  state = {
    liEmail: this.props.initialGmail ? initialData.gmail.liEmail :"",
    liPassword: this.props.initialGmail ? initialData.gmail.liPassword :"",
    myData: defaults,
    passwordType:"password"
  };

  handleLogIn = (by) => {
    this.setState({
      liEmail: initialData[by].liEmail,
      liPassword: initialData[by].liPassword,
    });
  };

  goToSignUp = () => {
    this.props.app.setState({ datashow: "SginUp" });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", this.state);
    this.setState((prevState) => ({
      myData: {
        liEmail: prevState.liEmail,
        liPassword: prevState.liPassword,
      },
      ...defaults,
    }));
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
                  id="liEmail"
                  type="email"
                  placeholder="Write your email"
                  label="Your email"
                  value={this.state.liEmail}
                />

                {/* TO ADD THE ICON TO THE INPUT */}

                <div className={`logInPassword ${this.state.passwordType}`}>
                  <span>
                    <img src={logInPassword} alt="" onClick={()=>{
                      this.setState({passwordType:
                        this.state.passwordType==="password"?"text":"password"})
                    }}/>
                  </span>
                  <Input
                    onChange={this.handleChangeInput}
                    id="liPassword"
                    type={this.state.passwordType}
                    placeholder="Password"
                    label="Enter your password"
                    value={this.state.liPassword}
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
                  <span onClick={() => this.props.pageShow("SignUp")}>Register</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
