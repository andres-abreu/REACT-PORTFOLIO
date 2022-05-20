
   
import React from "react";

function About() {
  return (
    <div>
      <section className="my-5 d-flex flex-wrap justify-content-around">
        <img
          id="avatar"
          src={require("../../assets/images/VOJFE9840.jpeg")}
          alt="Placeholder avatar"
          className="m-3"
        ></img>
        <div className="m-5 text-center" id="aboutMe">
          <h2 className="fw-bold">About Me</h2>
          <p className="fw-bold lh-lg">
           I am a South-Florida native, with an extensive background with the fields of medicine both western and eastern practices, psychology, music-production/business,    
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;