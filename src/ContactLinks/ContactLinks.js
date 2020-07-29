import React, { Component } from "react";

import "./ContactLinks.css";

import ContactImage from "./ContactImage";
// import Transition from 'react-transition-group'

import github_blue from "../images/github-blue.svg";
import github_red from "../images/github-red.svg";
import linkedin_blue from "../images/linkedin-blue.svg";
import linkedin_red from "../images/linkedin-red.svg";

export default class ClassLinks extends Component {
  state = {
    github_hover: false,
    linkedin_hover: false,
  };

  githubStateHandler = (status) => {
    this.setState(() => ({ github_hover: status }));
  };
  linkedinStateHandler = (status) => {
    this.setState(() => ({ linkedin_hover: status }));
  };

  render() {
    let github_image;
    let linkedin_image;
    if (!this.state.github_hover) {
      github_image = <ContactImage src={github_blue} />;
    } else {
      github_image = <ContactImage class="hover" src={github_red} />;
    }

    if (!this.state.linkedin_hover) {
      linkedin_image = <ContactImage src={linkedin_blue} />;
    } else {
      linkedin_image = <ContactImage class="hover" src={linkedin_red} />;
    }

    return (
      <div className="contact-links hflex center">
        <div className="link">
          <a
            onMouseEnter={() => this.githubStateHandler(true)}
            onMouseLeave={() => this.githubStateHandler(false)}
            href="https://github.com/alexNeep/"
          >
            {github_image}
          </a>
        </div>
        <div className="link">
          <a
            onMouseEnter={() => this.linkedinStateHandler(true)}
            onMouseLeave={() => this.linkedinStateHandler(false)}
            href="https://www.linkedin.com/in/alex-neep/"
          >
            {linkedin_image}
          </a>
        </div>
      </div>
    );
  }
}
