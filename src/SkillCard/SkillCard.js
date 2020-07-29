import React, { Component } from "react";

import logo from "../images/logo.svg";
import github from "../images/github-blue.svg";
import eye from "../images/view.svg";

import Skill from "../Skill";

import "./SkillCard.css";

export default class SkillCard extends Component {
  render() {
    if (this.props.skills.length > 0) {
      return (
        <div className="card">
          <div className="title">{this.props.project.title}</div>

          <div className="image">
            <img src={logo} alt="portfolio snapshot" />
          </div>

          <div className="skills">
            {this.props.skills
              .filter((skill) => {
                return this.props.project.skills.includes(skill.name);
              })
              .map((skill) => (
                <Skill
                  key={skill.name}
                  skill={skill}
                  skillActivityHandler={this.props.skillActivityHandler}
                />
              ))}
          </div>

          <div className="description">{this.props.project.description}</div>

          <div className="buttons">
            <a
              href={this.props.project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo-button">
                <img className="icon" src={eye} alt="eye icon" />
                <span className="text">View</span>
              </button>
            </a>

            <a
              href={this.props.project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github-button">
                <img className="icon" src={github} alt="Github Icon" />
                <span className="text">Github</span>
              </button>
            </a>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
