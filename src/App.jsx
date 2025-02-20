import "./App.css";
import { useState } from "react";
import { Header } from "./header";
import { Intro } from "./info";
import { ShowFormButton } from "./buttons";

// TODO: Add the gemini api so that it makes the template automatically
// TODO: Create a different file for each component

const Email = (props) => {
  <main>
    <h3>Subject: {props.subject}</h3>
    <div id="body">
      <p>{props.body}</p>
    </div>
  </main>;
};

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Email subject={undefined} body={undefined} />
      <ShowFormButton />
    </>
  );
}

export default App;
