import React, { Component } from "react";

import Contact from "./Contact";
import ContactLinks from "./ContactLinks/ContactLinks";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="center dark-background">
          <h3 className="light">Contact</h3>
          <ContactLinks />
          <Contact />
        </div>
      </div>
    );
  }
}
