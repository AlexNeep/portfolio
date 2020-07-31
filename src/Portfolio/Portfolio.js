import React, { Component } from "react";

import Skills from "../Skills";
import SkillCard from "../SkillCard/SkillCard";

import "./Portfolio.css";
export default class Portfolio extends Component {
  sortedProjects = (project_array) => {
    return project_array.sort((a, b) => {
      return this.getActiveLength(b.skills) - this.getActiveLength(a.skills);
    });
  };

  getActiveLength = (project_skills) => {
    let allSkills = this.props.skills;
    let activeSkills = [];
    allSkills.forEach((skill) => {
      if (skill.active) {
        activeSkills.push(skill);
      }
    });
    let length = 0;
    activeSkills.forEach((activeSkill) => {
      if (project_skills.includes(activeSkill.name)) {
        length++;
      }
    });
    return length;
  };

  render() {
    return (
      <div className="portfolio-section dark-background" id="portfolio">
        <h1 className="dark-blue">Portfolio</h1>
        <Skills
          skills={this.props.skills}
          skillActivityHandler={this.props.skillActivityHandler}
        />

        <div className="portfolio-container">
          {this.sortedProjects(this.props.projects).map((project) => (
            <SkillCard
              key={project.id}
              project={project}
              skills={this.props.skills}
              skillActivityHandler={this.props.skillActivityHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}
