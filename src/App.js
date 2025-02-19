import React, { Component } from "react";
import "./App.css";

import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";

import About from "./About/About";
import Footer from "./Footer/Footer";

class App extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "LanguageMate (2020)",
        date: "May & June 2020",
        description:
          "LanguageMate allows a user to learn a foreign language whilst reading the news in their native language. I created the Python backend Natural Language Processing API using the Flask to translate the user's news article within seconds. I built the frontend UI with JavaScript.",
        image: "LanguageMate-demo",
        link: "https://language-mate.com",
        github: "",
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
        title: "Fly Anywhere",
        date: "August 2020",
        description:
          "I am creating an app using SkyScanner's public flight data API. The React.js web app analyses the flight prices, flight times, user's holiday style, etc to suggest the best flights for the user from nearby airports.",
        image: "FlyAnywhere",
        link: "https://flyanywhere.app",
        github: "https://github.com/alexNeep/TravelMate",
        skills: ["JavaScript", "HTML", "CSS", "React"],
      },
      {
        id: 3,
        title: "Portfolio Page",
        date: "July 2020",
        description:
          "I used React to keep the components separate and easy to debug. I utilised React's State Management system to make the skills selection.",
        image: "portfolio",
        link: "",
        github: "https://github.com/alexNeep/portfolio",
        skills: ["JavaScript", "HTML", "CSS", "React"],
      },
      {
        id: 4,
        title: "MyReads App",
        date: "July 2020",
        description:
          "This was my first React App. I followed a tutorial to learn the basics and then completed this example project from scratch. I quickly learned the core principles of React.",
        image: "MyReads",
        link: "",
        github: "https://github.com/alexNeep/TravelMate",
        skills: ["JavaScript", "HTML", "React", "CSS"],
      },
      {
        id: 5,
        title: "LanguageMate (2019)",
        date: "December 2019",
        description:
          "I used Google's Translate API to create interactive news articles for my users. The users could learn using their account. I used PHP for the backend and hosted the data on a MySQL Database.",
        image: "LanguageMate-2019",
        link: "https://web.language-mate.com/",
        github: "",
        skills: ["PHP", "HTML", "SQL", "CSS"],
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
      { key: 7, name: "PHP", text: "white", color: "#5367B6", active: true },
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

  render() {
    return (
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <div className="background-image">
          <Nav />
          <Hero />
        </div>

        <div className="dark-background">
          <Portfolio
            skills={this.state.skills}
            projects={this.state.projects}
            skillActivityHandler={this.skillActivityHandler}
          />
        </div>
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
