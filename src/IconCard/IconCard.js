import React, { Component } from "react";

// import Button from "../Button";

import "./IconCard.css";

export default class IconCard extends Component {
  render() {
    return (
      <div
        className="icon-card"
        onMouseEnter={() => this.props.action(this.props.id)}
        onMouseLeave={() => this.props.action(-1)}
      >
        <div className="title">{this.props.title}</div>

        <div className="content content-slide-left">
          <img
            src={this.props.image}
            style={{ display: this.props.opened ? "none" : "block" }}
          />

          <div
            className="description"
            style
            style={{ display: !this.props.opened ? "none" : "block" }}
          >
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}
