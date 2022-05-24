import React from "react";
import resume from "../../assets/documents/andres-resume.docx";

function Resume() {
  return (
    <section>
      <h3 className="text-center my-3 fw-bold">Download My Resume</h3>
      <div className="d-flex flex-column">
        <div className="text-center">
          <a href={resume} download>
            <img
              id="resumeImg"
              src={require("../../assets/images/resume2.png")}
              className="border-bottom border-dark border-3"
              alt="Resume logo"
            ></img>
          </a>
        </div>
        <div>
          <h4 className="text-center my-4 fw-bold">My Skills</h4>
        </div>

        <div className="d-flex justify-content-around flex-wrap">
          <div id="skillCard" className="card m-4 border border-solid border-dark border-3">
            <div className="card-body">
              <h5 className="card-title text-center">Front-End Development</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                HTML5, CSS3, JavaScript, React.Js
              </h6>
              <p className="card-text text-center fw-bold">
                * I have knowledge of HTML and CSS concepts including advanced
                CSS techniques such as using flexbox, CSS grid, and CSS
                variables.
                <br></br> <br></br>* I have experience working with CSS
                frameworks such as Bootstrap and Bulma and have built a project
                using mostly Bulma mixed with custom CSS styling.
                <br></br>
                <br></br>* I also have experience with various JavaScript
                programming concepts such as separation of concerns, TDD, and
                OOP, an intermediate understanding of the DOM, as well as
                experience working with various third party libraries and
                frameworks (JQuery, React.JS, etc.) and server-side RESTful APIs
              </p>
            </div>
          </div>
          <div id="skillCard" className="card m-4 text-center border border-solid border-dark border-3">
            <div className="card-body">
              <h5 className="card-title">Back-End Development</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Node.Js, Express.Js, MySQL, MongoDB
              </h6>
              <p className="card-text fw-bold">
                * I have experience with Node.JS and Express.JS to create and
                manipulate servers for web applications. 
                <br></br><br></br>* I have knowledge of the
                fundamental concepts of object-oriented programming and
                test-driven development as they apply to JavaScript and
                server-side development. 
                <br></br><br></br>* I have experience creating API routes
                to handle client-side HTTP requests and working with relational
                databases to serve response data to those requests. I have
                foundational experience with with MySQL databases and using an
                ORM to modularize the query process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;