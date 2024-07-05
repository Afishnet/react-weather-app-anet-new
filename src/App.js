import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather></Weather>
      <footer>
        Coded with <span class="emoji">🤍</span> by{" "}
        <a href="https://github.com/Afishnet" target="_blank">
          Anet Jakesova
        </a>{" "}
        and is{" "}
        <a href="https://github.com/Afishnet?tab=repositories" target="_blank">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://app.netlify.com/teams/afishnet/overview"
          target="_blank"
        >
          {" "}
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}
