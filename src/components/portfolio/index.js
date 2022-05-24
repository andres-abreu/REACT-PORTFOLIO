import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "Budget Tracker",
      id: "budget-tracker",
      description: "As the name states, this is a simple finance-ledger, utilizaing indexedDB & service-worker-functionality which provides a mobile-first PWA user-experience.",
      liveURL: "https://stormy-scrubland-05355.herokuapp.com/",
      gitHub: "https://github.com/andres-abreu/BUDGET-TRACKER"
    },

    {
      name: "Weather Dashboard",
      id: "weather-dashboard",
      description: "This is a weather API that indicates the current weather at your chosen location.",
      liveUrl: "https://andres-abreu.github.io/WEATHER-DASHBOARD/",
      gitHub: "https://github.com/andres-abreu/WEATHER-DASHBOARD"
    },

]    
return (
  <section>
    <h2 className="text-center fw-bold my-3">My Projects</h2>
    {projects.map((proj, i)=>(
    <div key={i} className="d-flex flex-column m-5 p-3 my-border card">
      <div className="text-center">
        <img className="p-image" src={require(`../../assets/images ${proj.id}.png`)} alt="Project Screenshot"></img>
      </div>
      <div className="mx-auto text-center">
        <h3 className="fw-bold m-2">{proj.name}</h3>
        <p>{proj.description}</p>
        <a href={proj.liveURL} target="_blank" rel="noreferrer">View Deployed Application</a> <br></br>
        <a href={proj.gitHub} target="_blank" rel="noreferrer">View GitHub Repository</a>
      </div>
    </div>
    ))}
     {/*  */}
   </section>
);
}

export default Portfolio;