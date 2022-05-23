import React from "react";

function About() {
  return (
    <div>
      <section className="my-5 d-flex flex-wrap justify-content-around">
        <img
          id="avatar"
          src={require("../../assets/images/VOJFE9840.jpeg")}
          alt="Placeholder avatar"
          className="m-1"
        ></img>
        <div className="m-5 text-left" id="aboutMe">
          <h2 className="fw-bold">About Me</h2>
          <p className="fw-bold lh-lg">
           I'm originally from South-Florida, I have an extensive-background with the fields of western/eastern- medicine, psychology, real-estate, music-writing/engineering/production/business.  Now adding full-stack-web-development into my skill-set,  
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;