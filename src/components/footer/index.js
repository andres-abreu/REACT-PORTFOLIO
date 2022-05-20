import React from "react";

function Footer() {
  return (
    <div className="mt-auto">
      <footer className="d-flex justify-content-around p-2">
        <h4 className="my-auto text-center fw-bold">Connect with me!</h4>
        <ul className="list-inline my-auto text-center">
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/Alexnj1">GitHub</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alex-noble-james-b50139224/">LinkedIn</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/17253845/alexn-j">Stack Overflow</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;