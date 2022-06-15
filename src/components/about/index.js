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
          A full-stack-web-developer with a certificate from the University of Miami with the acquired skills in HTML, CSS, JavaScript, Python, AWS, Java, C-Sharp, MERN-stack, REACT and strengths in meeting deadlines, creativity, and teamwork.  An organized-detail-oriented-coder with great contributions with past projects such as by creating or modifying written-code for further efficiency.  For example, aid-queries by team-members/class-mates with identifying bugs in their code was a consistent method within the work-flow.  For the latest project was a scheduling-application that calls a database to access user-saved-data.  In a team of 5-members, the designated responsibilities were for the back-end in which entails developing a database to warehouse or store users' information using MySQL and Sequelize.  Positioned to provide unique perspectives on how end users interact with websites and software-platforms by leveraging prior career, work and study backgrounds in music-production & publishing, medicine, psychology, real-estate, e-commerce and digital-marketing.  Highly motivated and adaptive with a positive-solution-driven focus, along with a team-playing-attitude, operating with a fast learning curve and attention to detail.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;