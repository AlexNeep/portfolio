import React, { Component } from "react";

export default class PortfolioButton extends Component {
  render() {
    return (
      <a
        href={this.props.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: this.props.link === "" ? "none" : "inline-block",
        }}
      >
        <button className={this.props.class}>
          <img className="icon" src={this.props.icon} alt={this.props.alt} />
          <span className="text">{this.props.text}</span>
        </button>
      </a>
    );
  }
}
