import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "Budget Tracker",
      id: "budget-tracker-screen-shot",
      description:
        "As the name states, this is a simple finance-ledger, utilizaing indexedDB & service-worker-functionality which provides a mobile-first PWA user-experience.",
      liveURL: "https://stormy-scrubland-05355.herokuapp.com/",
      gitHub: "https://github.com/andres-abreu/BUDGET-TRACKER",
    },

    {
      name: "Weather Dashboard",
      id: "weather-dashboard_Screen Shot",
      description:
        "This is a weather API that indicates the current weather at your chosen location.",
      liveURL: "https://andres-abreu.github.io/WEATHER-DASHBOARD/",
      gitHub: "https://github.com/andres-abreu/WEATHER-DASHBOARD"
    },

    {
      name: "Love Calculator",
      id: "love-calculator-screen-shot",
      description:
        "This love calculator was created using three separate API's, from Spotify, Pexels and RapidAPI's love- calculator. Within this project we also used the following CDNS: Jquery (for shorter code), Materialize(for faster UX/UI) and Google fonts.",
      liveURL: "https://zela7alex.github.io/love-match-calculator/",
      gitHub: "https://github.com/andres-abreu/LOVE-MATCH-CALCULATOR"
    },

    {
      name: "Technology Blog",
      id: "tech-blog-screen-shot",
      description: "This blog-post allows users to create and share technology-focused-post, users may view, edit, delete & comment.",
      liveURL: "https://stark-bastion-74188.herokuapp.com/dashboard",
      gitHub: "https://github.com/andres-abreu/TECH-BLOG",
    },

    {
      name: "Note Taker",
      id: "note-taker-screen-shot",
      description:
      "This is a simple note-taking-app that can save and retreive data from a JSON-file using express.js on the back-end.",
      liveURL: "https://glacial-wildwood-22711.herokuapp.com/",
      gitHub: "https://github.com/andres-abreu/NOTE-TAKER"
    },

    {
      name: "Work Day Scheduler",
      id: "work-day-scheduler-screen-shot",
      description: "This work-day-scheduler will organize your daily-work-life, simply add an event in the corresponding hour, click on the save",
      liveURL: "https://andres-abreu.github.io/WORK-DAY-SCHEDULER/",
      gitHub: "https://github.com/andres-abreu/WORK-DAY-SCHEDULER"
    },

    {
      name: "Password Generator",
      id: "password-generator-screen-shot",
      description: "The user will have the choice with the quantity of characters within their password, to aid the user with the creation of their password they will be prompted to choose characters from four-separate-heiroglyphic-options such as capital-case, small-case, numbers, special-characters.",
      liveURL: "https://andres-abreu.github.io/PASSWORD-GENERATOR/",
      gitHub: "https://github.com/andres-abreu/PASSWORD-GENERATOR"
    },

    {
      name: "Find It",
      id: "find-it-screen-shot",
      description: "FIND-IT allows users to buy and sell products via the FIND-IT market-place.",
      liveURL: "https://limitless-beach-87360.herokuapp.com/",
      gitHub: "https://github.com/andres-abreu/FIND-IT"
    },


  ];
  return (
    <section>
      <h2 className="text-center fw-bold my-3">My Projects</h2>
      {projects.map((proj, i) => (
        <div key={i} className="d-flex flex-column m-5 p-3 my-border card">
          <div className="text-center">
            <img
              className="p-image"
              src={require(`../../assets/images/${proj.id}.png`)}
              alt="Project Screenshot"
            ></img>
          </div>
          <div className="mx-auto text-center">
            <h3 className="fw-bold m-2">{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.liveURL} target="_blank" rel="noreferrer">
              View Deployed Application
            </a>{" "}
            <br></br>
            <a href={proj.gitHub} target="_blank" rel="noreferrer">
              View GitHub Repository
            </a>
          </div>
        </div>
      ))}
      {/*  */}
    </section>
  );
}

export default Portfolio;
