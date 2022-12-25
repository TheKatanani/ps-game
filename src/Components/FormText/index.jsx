import React, { Component } from "react";
import "./stylw.css";
export default class FormText extends Component {
  render() {
    return (
      <div className={`FormText ${this.props.className||""}`}>
        <h1>{this.props.H1}</h1>
        <p>{this.props.P}</p>
      </div>
    );
  }
}
