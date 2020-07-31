import React, { Component } from "react";

import Skill from "./Skill";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        {this.props.skills.map((skill) => (
          <Skill
            key={skill.name}
            skill={skill}
            skillActivityHandler={this.props.skillActivityHandler}
          />
        ))}
      </div>
    );
  }
}
