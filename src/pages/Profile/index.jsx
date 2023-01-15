import axios from "axios";
import React from "react";
import { API } from "../../Components/API";
import Loading from "../../Components/Loading";
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    // Fetch user data from API here
    // and update the state with the user data
    axios
      .get(`${API}/users/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <Loading/>;
    }

    return (
      <div>
      <h1>Profile</h1>
      <table>
      <tbody>
          <tr>
          <td>Name:</td>
          <td>{user.name}</td>
          </tr>
          <tr>
          <td>Email:</td>
          <td>{user.email}</td>
          </tr>
          <tr>
          <td>Id:</td>
          <td>{user._id}</td>
          </tr>
          <tr>
          <td>Is Admin:</td>
          <td>{user.isAdmin?"true":"false"}</td>
          </tr>
      </tbody>
      </table>
  </div>
    );
  }
}
