import './styles.css'
import React from 'react';
import { Link } from 'react-router-dom';
import DeleteUser from '../DeleteUser';
class TableRow extends React.Component {
    
    render() {
        return (
            <tr>
                <th>{this.props.row}</th>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.password}</td>
                <td className='id'>{this.props.id}</td>
                <td>{this.props.isAdmin?"true":"false"}</td>
                <td>{this.props.createdAt}</td>
                <td>{this.props.updatedAt}</td>
                <td className='more'>
                <Link to={`/Users/${this.props.id}`}><button className='visit'>visit user</button></Link>
                    <DeleteUser id={this.props.id}/>
                </td>
            </tr>
        )
    }
}

export default TableRow;
