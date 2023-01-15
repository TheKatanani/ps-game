import React, { Component } from 'react';
import './styles.css'; // import the stylesheet

class Error extends Component {
    render() {
        const {error,mainMessage} = this.props;
        return (
            <div className="error-container">
                <div className='error'>
                    <p>{mainMessage}</p>
                    <p>{error.message}</p>
                </div>
            </div>
        );
    }
}

export default Error;
