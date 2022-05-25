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
          I'm a South-Florida native, with an extensive-background in the fields of medicine[both eastern/western], psychology, e-commerce, real-estate, music-writing/publishing, audio-engineering/production, music-business and currently a recording-studio-owner. Adding full-stack-web-development into my skill-set was a inspirational, motivational and strategic-choice in which allows more control and options with more tools in regards to business or personal-interests, work or simply creativity.  Further more, as a bit-coin-block-chain supporter and ethusiast, I run my own bit-coin-block-chain/lightning-network-node.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;