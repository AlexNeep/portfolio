import React, { Component } from "react";
import "./App.css";

import Nav from "./Nav";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Footer from "./Footer";

import Card from "./SkillCard";

class App extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "LanguageMate",
        description: "Desc bla bla",
        image: "",
        link: "https://language-mate.com",
        github: "https://google.com",
        skills: [
          "JavaScript",
          "React",
          "test",
          "HTML",
          "CSS",
          "Python",
          "Google Cloud",
          "SQL",
        ],
      },
      {
        id: 2,
        title: "TravelMate",
        description: "Desc bla bla",
        image: "",
        link: "https://language-mate.com",
        github: "https://google.com",
        skills: ["JavaScript", "HTML", "CSS", "React"],
      },
      {
        id: 3,
        title: "Portfolio Page",
        description: "Desc bla bla",
        image: "",
        link: "https://language-mate.com",
        github: "https://google.com",
        skills: ["JavaScript", "HTML", "CSS", "React"],
      },
      {
        id: 4,
        title: "MyReads App",
        description: "Desc bla bla",
        image: "",
        link: "https://language-mate.com",
        github: "https://google.com",
        skills: ["JavaScript", "HTML", "React", "CSS"],
      },
    ],
    skills: [
      {
        key: 0,
        name: "JavaScript",
        color: "#F5E600",
        active: true,
      },
      {
        key: 1,
        name: "HTML",
        text: "white",
        color: "#FF290B",
        active: true,
      },
      {
        key: 2,
        name: "CSS",
        text: "white",
        color: "#4B9D00",
        active: true,
      },
      {
        key: 3,
        name: "React",
        text: "black",
        color: "#08E2EE",
        active: true,
      },
      {
        key: 4,
        name: "Python",
        text: "white",
        color: "#0462BD",
        active: true,
      },
      {
        key: 5,
        name: "SQL",
        text: "black",
        color: "#00DE4F",
        active: true,
      },
      {
        key: 6,
        name: "Google Cloud",
        text: "white",
        color: "#4285F4",
        active: true,
      },
    ],
  };

  skillActivityHandler = (skill_name) => {
    let index = 0;
    for (let x = 0; x < this.state.skills.length; x++) {
      if (this.state.skills[x].name === skill_name) {
        index = this.state.skills[x].key;
        break;
      }
    }
    let skills = [...this.state.skills];
    let skill = { ...skills[index] };
    skill.active = !skill.active;
    skills[index] = skill;

    this.setState(() => ({ skills }));
  };

  sortedProjects = (project_array) => {
    return project_array.sort((a, b) => {
      return this.getActiveLength(b.skills) - this.getActiveLength(a.skills);
    });
  };

  getActiveLength = (project_skills) => {
    let allSkills = this.state.skills;
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
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <div className="background-image">
          <Nav />
          <Hero />
        </div>

        <div className="dark-background">
          <div className="portfolio-section">
            <Skills
              skills={this.state.skills}
              skillActivityHandler={this.skillActivityHandler}
            />

            <div className="portfolio-container">
              {this.sortedProjects(this.state.projects).map((project) => (
                <Card
                  key={project.id}
                  project={project}
                  skills={this.state.skills}
                  skillActivityHandler={this.skillActivityHandler}
                />
              ))}
            </div>
          </div>
        </div>

        <About />

        <Footer />
      </div>
    );
  }
}

export default App;
