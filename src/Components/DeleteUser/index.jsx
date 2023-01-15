import  { Component } from 'react'
import axios from 'axios';

export default class DeleteUser extends Component {
    state = {
        isLoading: false,
        error: null
    }

handleDelete = async () => {
    this.setState({ isLoading: true });
    try {
        await axios.delete(`https://react-tt-api.onrender.com/api/users/${this.props.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
    } catch (err) {
        this.setState({ error: err });
    } finally {
        this.setState({ isLoading: false });
    }
}
render() {
    return (
        <>
            {this.state.isLoading ? (
                <button className='delete'>Loading...</button>
            ) : (<>
                {this.state.error && window.alert(this.state.error.message)}
                <button className='delete' onClick={this.handleDelete}>delete user</button>
            </>
            )}
        </>
    )
}
}