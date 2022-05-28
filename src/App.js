import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container-large">
      <header className="App-header">
        <nav>
          <ul>
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="jumbo">Andreu Salles</div>
        <div className="subtitle">
          Hi, I am a <span>Product Designer</span> and{" "}
          <span>Creative Developer</span>. I design and build products that are
          meaningful, easy, and delightful to use.
        </div>
      </main>
    </div>
  );
}

export default App;
