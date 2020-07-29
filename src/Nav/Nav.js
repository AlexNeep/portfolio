import React, { Component } from "react";

import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <div className="nav-items">
            <a href="#home">
              <div className="nav-item">Home</div>
            </a>
            <a href="#portfolio">
              <div className="nav-item">Portfolio</div>
            </a>
            <a href="#why-me">
              <div className="nav-item">About</div>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
