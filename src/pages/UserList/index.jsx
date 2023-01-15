import TableRow from '../../Components/TableRow'
import axios from "axios";
import React from 'react';
import './styles.css'
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import { API } from '../../Components/API';
export default class UserList extends React.Component {
   state = {
            users: [],
            error:null
        };
    componentDidMount() {
        axios
            .get(`${API}/users`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(error => {
                this.setState({error})
            });
    }
    render() {
        const { users,error} = this.state;
        if(error){
            if(error.response.status===401)
            return <Error mainMessage="you are not admin" error={error}/>
            return <p>{error.message}</p>
        }
        if (!users.length) {
            return <Loading/>;
        }
        return (
            <div>
                <h1>Users List</h1>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">password</th>
                            <th scope="col">id</th>
                            <th scope="col">isAdmin</th>
                            <th scope="col">createdAt</th>
                            <th scope="col">updatedAt</th>
                            <th scope="col">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <TableRow key={user._id}
                                row={i + 1}
                                name={user.name}
                                email={user.email}
                                password={user.password}
                                isAdmin={user.isAdmin}
                                id={user._id}
                                createdAt={user.createdAt}
                                updatedAt={user.updatedAt}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
