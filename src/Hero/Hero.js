import React, { Component } from "react";

// import typewriter from './images/typewriter-2.jpg'

import ContactLinks from "../ContactLinks/ContactLinks";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="vflex hero-section" id="home">
        <div className="hero">
          <h1 className="red">Alex Neep</h1>
          <h2 className="red">Junior Developer</h2>
        </div>
        <ContactLinks />
      </div>
    );
  }
}
