import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Hello() {
  debugger;
  alert("Hello, niga!!!");
}

// Hello()

function App() {
  debugger;
  return (
    <div>
      This is app component
      <Rating />
      <Accordion />
    </div>
  );
}

function Star() {
  return (
    <div>*</div>
  )
}

function Rating() {
  debugger;
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Accordion() {
  debugger;
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );
}

export default App;
