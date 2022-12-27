import React, { Component } from "react";
import "./style.css";
export default class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          required
          value={this.props.value}
          minLength="6"
          className={this.props.className}
        />
      </div>
    );
  }
}
