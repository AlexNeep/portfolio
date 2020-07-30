import React, { Component } from "react";

import Contact from "./Contact";
import ContactLinks from "../ContactLinks/ContactLinks";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="center dark-background">
          <h1 className="light">I am avaliable for work</h1>
          <h2 className="light">Let's get in touch</h2>
          <div className="light-background footer-container">
            <ContactLinks />
          </div>
        </div>
      </div>
    );
  }
}
