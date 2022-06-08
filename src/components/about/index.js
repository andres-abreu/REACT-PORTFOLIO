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
          I am a full-stack-web-developer educated from the University of Miami with the acquired skills in HTML, CSS, JavaScript, Python, AWS, Java, C-Sharp, MERN-stack, REACT and strengths in meeting deadlines, creativity, and teamwork. I’m passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. Due to past studies and professions, I’m positioned to provide unique perspectives on how end users interact with websites and software-platforms by leveraging my background in music-production & publishing, medicine, psychology, real-estate, e-commerce & digital-marketing.  I am highly motivated and adaptive with a positive-solution-driven focus along with a team-playing-attitude operating with a fast learning curve and attention to detail.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;