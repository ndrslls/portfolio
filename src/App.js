import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Title from "./Components/Title";

function App() {
  return (
    <div className="container-large">
      <main>
        <Title></Title>
        <div className="content-wrapper">
          <div>
            Hi, I am a <span>Frontend Developer</span> and{" "}
            <span>Product Designer</span>. I design and build delightful
            products in <span>React</span> and <span>Typescript</span>. My
            portfolio is currently under construction. In the meanwhile, get in
            touch and check{" "}
            <a href="https://restyoureyes.app" target="_blank">
              Rest Your Eyes{" "}
            </a>
            , an iOS App developed in <span>Swift</span> and{" "}
            <span>SwiftUI</span>.
          </div>
          <div className="buttons-wrapper">
            <a href="https://www.linkedin.com/in/andreusalles/" target="_blank">
              <button className="cta">Get in touch!</button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
