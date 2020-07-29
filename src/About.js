import React, { Component } from "react";

import IconCard from "./IconCard";

import quick from "./images/fast.svg";
import hardwork from "./images/effort-2.svg";
import resourceful from "./images/resourceful.svg";

export default class About extends Component {
  state = {
    skills: [
      {
        id: 0,
        title: "Hardworking",
        description: "bla bla bla bla bla",
        image: hardwork,
        opened: false,
      },
      {
        id: 1,
        title: "Quick Learner",
        description: "bla bla bla bla bla",
        image: quick,
        opened: false,
      },
      {
        id: 2,
        title: "Resourceful",
        description: "bla bla bla bla bla",
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
      <div className="me-section">
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

        {/* <div>
                    <h2 className='dark-blue'>Qualifications</h2>
                    <p>Economics</p>
                    <p>First Class BSc in Economics</p>
                    <p>University of Warwick</p>
                </div> */}
      </div>
    );
  }
}
