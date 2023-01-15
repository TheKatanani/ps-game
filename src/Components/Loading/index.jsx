import React, { Component } from 'react';
import './styles.css'; // import the stylesheet

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-message">Loading...</p>
      </div>
    );
  }
}

export default Loading;
