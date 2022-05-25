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
           I'm originally from South-Florida, I have an extensive-background with the fields of western/eastern- medicine, psychology, e-commerce, real-estate, music-writing/engineering/production/business and currently a recording-studio-owner. Now adding full-stack-web-development into my skill-set, allows me to take more control with more tools in regards to my businesses, interests or work.  I am specifically a bit-coin-blockchain-enthusiast, I currently run a bit-coin/lightning-node.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;