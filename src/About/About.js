import React, { Component } from "react";

import IconCard from "../IconCard/IconCard";

import quick from "../images/fast.svg";
import hardwork from "../images/effort-2.svg";
import resourceful from "../images/resourceful.svg";

import "./About.css";

export default class About extends Component {
  state = {
    skills: [
      {
        id: 0,
        title: "Hardworking",
        description:
          "My infectious motivation has been key to LanguageMate's rapid growth over the last year",
        image: hardwork,
        opened: false,
      },
      {
        id: 1,
        title: "Quick Learner",
        description:
          "Over the past 12 months, I have enjoyed learning how to use complex languages and frameworks. I learned how to work with React, Flask, and Cloud Computing Software and have used them in production settings.",
        image: quick,
        opened: false,
      },
      {
        id: 2,
        title: "Resourceful",
        description:
          "Whilst growing LanguageMate, I had to independently learn many new skills, including languages such as Python, JavaScript, and PHP.",
        image: resourceful,
        opened: false,
      },
    ],
  };

  closeAllCards = () => {
    let skills = [...this.state.skills];
    skills.forEach((skill) => {
      skill.opened = false;
    });
    this.setState(() => ({ skills }));
  };
  openedStateHandler = (id) => {
    // this.closeAllCards();

    if (id !== -1) {
      let skills = [...this.state.skills];
      let skill = { ...skills[id] };
      skill.opened = !skill.opened;
      skills[id] = skill;

      this.setState(() => ({ skills }));
    } else {
      console.log("hi");
      this.closeAllCards();
    }
  };

  render() {
    return (
      <div className="me-section" id="why-me">
        <h2 className="dark-blue">Key Skills</h2>

        <div className="flex">
          {this.state.skills.map((skill) => (
            <IconCard
              id={skill.id}
              key={skill.id}
              title={skill.title}
              image={skill.image}
              description={skill.description}
              opened={skill.opened}
              action={this.openedStateHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}
