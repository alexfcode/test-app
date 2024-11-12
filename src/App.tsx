import React from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import { Rating } from "./components/Rating";

function Hello() {
  debugger;
  alert("Hello");
}

// Hello()

function App() {
  console.log("App rendering");
  // debugger;
  return (
    <div>
      <PageTitle title={"This is app component"} />
      <PageTitle title={"nIGERS ARE THE BEST!!!"} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accordion title="Меню"/>
    </div>
  );
}

function PageTitle(props: any) {
  debugger;
  console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
