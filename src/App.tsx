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
      <Accordion titleValue="Menu" collapsed={true}/>
      <Rating value={2} />
      <Rating value={3} />
      <Accordion titleValue="Users" collapsed={false}/>
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
  debugger;
  console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
