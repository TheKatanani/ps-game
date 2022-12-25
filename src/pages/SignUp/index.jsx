import React, { Component } from "react";
import Container from "../../Components/Container";
import Dots from "../../images/Group.png";
import GoogleIcon from "../../images/flat-color-icons_google.svg";
import Button from "../../Components/Button";
import MainText from "../../Components/MainText";
import Logo from "../../Components/Logo";
import "./style.css";
import FormText from "../../Components/FormText";
import Input from "../../Components/Input";
import Or from "../../Components/Or";
import PasswordStrong from "../../Components/PasswordStrong";
import Back from "../../Components/Back";
import Checkbox from "../../Components/Checkbox";
const defaults = {
  email: "",
  password: "",
  Repeatpassword: "",
};
export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    Repeatpassword: "",
    myData: defaults,
    passwordStrong: "",
  };
  validate = (value) => {
    const strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      ),
      mediumRegex = new RegExp(
        "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
      );
    if (strongRegex.test(value) && value.length >= 6) {
      this.setState({ passwordStrong: "strong" });
    } else if (mediumRegex.test(value)&& value.length >= 6 ) {
      this.setState({ passwordStrong: "medium" });
    } else if(value.length >= 1){
      this.setState({ passwordStrong: "weak" });
    }else this.setState({ passwordStrong: "" });
  };

  goToLogIn = (gmail) => {
    this.props.app.setState({
      initialGmail: gmail ? true : false,
      datashow: "LogIn",
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.Repeatpassword) {
      this.setState((prevState) => ({
        myData: {
          email: prevState.email,
          password: prevState.password,
        },
        ...defaults,
      }));
    }
  };
  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
    if (id === "password") {
      this.validate(value);
    }
  };
  render() {
    return (
      <Container>
        <div className="mainbox signUp">
          <div className={`imgBox ${this.props.class || ""}`}>
            <Logo />
            <img src={Dots} alt="" className="dots" />
            <MainText color="#fff" />
          </div>
          <div className="form">
            <Back onclick={() => this.goToLogIn()} />
            <div className="content">
              <FormText
                H1="Register Individual Account!"
                P="For the purpose of gamers regulation, your details are required."
              />
              <form onSubmit={this.handleSubmit}>
                <Input
                  onChange={this.handleChangeInput}
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  label="Email address*"
                  value={this.state.email}
                />
                <Input
                  onChange={this.handleChangeInput}
                  id="password"
                  type="password"
                  placeholder="Password"
                  label="Create password*"
                  value={this.state.password}
                />
                <PasswordStrong passwordStrong={this.state.passwordStrong} />
                <Input
                  onChange={this.handleChangeInput}
                  id="Repeatpassword"
                  type="password"
                  placeholder="Repeat password"
                  label="Repeat password*"
                  value={this.state.Repeatpassword}
                />
                <Checkbox id="agree" label="I agree to terms & conditions" />
                <Button type="submit" bgColor="#1565D8" color="#fff">
                  Register Account
                </Button>
                <Or />
                <div className="LogInBtn">
                  <img src={GoogleIcon} alt="" className="icon" />
                  <Button
                    type="button"
                    bgColor="#fff"
                    onclick={() => this.goToLogIn(true)}
                    color="#000"
                  >
                    login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
