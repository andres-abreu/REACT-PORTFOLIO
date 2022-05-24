import React from "react";

function Footer() {
  return (
    <div className="mt-auto">
      <footer className="d-flex justify-content-around p-2">
        <h4 className="my-auto text-center fw-bold">Lets connect on-line </h4>
        <ul className="list-inline my-auto text-center">
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/andres-abreu">GitHub</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andresabreucreator/">LinkedIn</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/19110449/andres-abreu">Stack Overflow</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;