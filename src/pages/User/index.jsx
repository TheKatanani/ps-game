import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import DeleteUser from '../../Components/DeleteUser';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import { API } from '../../Components/API';
 const useUserData = () => {
    const { id } = useParams();
    console.log(id);
    return <User id={id}/>;
}

 class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            error: null,
            isLoading: false
        }
    }
    componentDidMount() {
        const { id } = this.props;
        console.log(id);
        this.setState({ isLoading: true });
        axios.get(`${API}/users/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
        })
        .then((response) => {
            this.setState({ user: response.data, isLoading: false });
        })
        .catch((error) => {
            this.setState({ error: error, isLoading: false });
        });
    }

    render() {
        const { user,error,isLoading } = this.state;
        if (isLoading) {
            return <Loading/>;
          }
        if (error) {
            return <Error error={error}/>
        }
        return (
            <div>
                <h1>User Details</h1>
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
                    <tr>
                    <td>Created At:</td>
                    <td>{user.createdAt}</td>
                    </tr>
                    <tr>
                    <td>Updated At:</td>
                    <td>{user.updatedAt}</td>
                    </tr>
                    <tr>
                    <td>Delete User:</td>
                    <td><DeleteUser id={user._id}/></td>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
}
export default useUserData;

