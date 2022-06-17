import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "Budget Tracker",
      id: "budget-tracker-screen-shot",
      description:
        "This was a solo project and as the name states, this is a simple finance-ledger, utilizaing indexedDB, NoSQL & express technologies with service-worker-functionality which provides a mobile-first PWA user-experience.",
      liveURL: "https://stormy-scrubland-05355.herokuapp.com/",
      gitHub: "https://github.com/andres-abreu/BUDGET-TRACKER",
    },

    {
      name: "Weather Dashboard",
      id: "weather-dashboard_Screen Shot",
      description:
        "This was a solo-project using a third-party-weather-API that indicates the current weather at your chosen location, using the local-storage to store any persistent data.",
      liveURL: "https://andres-abreu.github.io/WEATHER-DASHBOARD/",
      gitHub: "https://github.com/andres-abreu/WEATHER-DASHBOARD"
    },

    {
      name: "Love Calculator",
      id: "love-calculator-screen-shot",
      description:
        "This love calculator was created by a team of four using three separate API's, from Spotify, Pexels and RapidAPI's love- calculator. Within this project we also used the following CDNS: Jquery (for shorter code), Materialize(for faster UX/UI) and Google fonts.",
      liveURL: "https://zela7alex.github.io/love-match-calculator/",
      gitHub: "https://github.com/andres-abreu/LOVE-MATCH-CALCULATOR"
    },

    {
      name: "Technology Blog",
      id: "tech-blog-screen-shot",
      description: "This was a solo-blog-post-project in which allows users to create and share technology-focused-post, users may view, edit, delete & comment. This app follows the model-view-controller[MVC] paradigm in its archetictural structure using handlebars.js as the templating language, Sequelize as the object-relational-mapping[ORM], and express-session-npm-package for authentication.",
      liveURL: "https://stark-bastion-74188.herokuapp.com/dashboard",
      gitHub: "https://github.com/andres-abreu/TECH-BLOG",
    },

    {
      name: "Note Taker",
      id: "note-taker-screen-shot",
      description:
      "This solo-project is a simple note-taking-app that can save and retreive data from a JSON-file using express.js on the back-end.",
      liveURL: "https://glacial-wildwood-22711.herokuapp.com/",
      gitHub: "https://github.com/andres-abreu/NOTE-TAKER"
    },

    {
      name: "Work Day Scheduler",
      id: "work-day-scheduler-screen-shot",
      description: "This third-party-API-work-day-scheduler-solo-project uses the moment.js library to work with datea and time, This app features dynamically updated HTML and CSS powered by JQuery. This app will organize your daily-work-life, simply add an event in the corresponding hour and click on the save.",
      liveURL: "https://andres-abreu.github.io/WORK-DAY-SCHEDULER/",
      gitHub: "https://github.com/andres-abreu/WORK-DAY-SCHEDULER"
    },

    {
      name: "Password Generator",
      id: "password-generator-screen-shot",
      description: "This application will generate random passwords base on the criteria selected and features dynamically updated HTML and CSS powered by JavaScript. The user will have the choice with the quantity of characters within their password, to aid the user with the creation of their password they will be prompted to choose characters from four-separate-heiroglyphic-options such as capital-case, small-case, numbers, special-characters.",
      liveURL: "https://andres-abreu.github.io/PASSWORD-GENERATOR/",
      gitHub: "https://github.com/andres-abreu/PASSWORD-GENERATOR"
    },

    {
      name: "Find It",
      id: "find-it-screen-shot",
      description: "Find-it was a team-effort of 4, my initial duties or focus was with the database and minor front-end aesthetics using bootstrap and custom-CSS for the UI. This app allows users to buy and sell products via the Find-it-market-place. Technologies in use are express-sessions, express-handle-bars, handle-bares, multer, mysqp2, sequelize and bycrypt for user security.",
      liveURL: "https://limitless-beach-87360.herokuapp.com/",
      gitHub: "https://github.com/andres-abreu/FIND-IT"
    },

    {
      name: "Race of the year",
      id: "race-of-the-year-photo",
      description: "A REACT-based marathon-event-registration and support web-site built by a team of 4, my initial duties was with the data-base and minor front-end aesthetics using bootstrap and CSS for the UI-framework. This app is using json-web-tokens for encryption, graphQL for fulfilling queries with existing data.",
      liveURL: "https://https://ancient-sierra-07886.herokuapp.com/",
      gitHub: "https://github.com/andres-abreu/race-of-the-year"
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
