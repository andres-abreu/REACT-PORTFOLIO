import React, { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";

function App() {
  const navCategories = [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Resume" },
    { name: "Contact" },
  ];
  const [currentCat, changeCat] = useState(navCategories[0].name);
  return (
    <div className="full">
      <Header
        categories={navCategories}
        currentCat={currentCat}
        changeCat={changeCat}
      ></Header>
      {currentCat === "About Me" ? (
        <About></About>
      ) : currentCat === "Portfolio" ? (
        <Portfolio></Portfolio>
      ) : currentCat === "Resume" ? (
        <Resume></Resume>
      ) : currentCat === "Contact" ? (
        <Contact></Contact>
      ) : (
        alert(new Error("There was an issue"))
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;


























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
