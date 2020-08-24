import React, { Component } from "react";

import github from "../images/github-blue.svg";
import eye from "../images/view.svg";

import Skill from "../Skill";
import PortfolioButton from "../Portfolio/PortfolioButton";

import "./SkillCard.css";

export default class SkillCard extends Component {
  render() {
    if (this.props.skills.length > 0) {
      return (
        <div className="card">
          <div className="title">{this.props.project.title}</div>
          <div className="date">{this.props.project.date}</div>
          <div className="image">
            <img
              src={require(`../images/${this.props.project.image}.png`)}
              alt="portfolio snapshot"
            />
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

          <div className="buttons">
            <PortfolioButton
              link={this.props.project.link}
              class="demo-button"
              icon={eye}
              alt="eye icon"
              text="View"
            />
            <PortfolioButton
              link={this.props.project.github}
              class="github-button"
              icon={github}
              alt="Github icon"
              text="Github"
            />
          </div>
          <div className="description">{this.props.project.description}</div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
