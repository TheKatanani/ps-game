import React, { Component } from 'react';
import './styles.css'; // import the stylesheet

class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found-container">
        <h1 className="title">404: Page Not Found</h1>
        <p className="message">Sorry, the page you were looking for could not be found.</p>
      </div>
    );
  }
}

export default PageNotFound;
