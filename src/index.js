import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Search from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather search engine</h1>
      <Search />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
