import React from "react";
import "./App.css";
import Accordion from "./components/Accordion"
import {Rating} from "./components/Rating";

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

            <input type="text" name="" id="" value={"Niga"}/>
            <input type="password" name="" id=""/>
            <input type="checkbox" name="" id=""/>
            <input type="date" name="" id=""/>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is app component</>;
}


export default App;
