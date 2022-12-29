import React, { Component } from 'react'
import './style.css'
export default class Checkbox extends Component {
  render() {
    return (
        <div className="checkbox">
            <input type="checkbox" id={this.props.id} onChange={this.props.onChange} />
            <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    )
  }
}
