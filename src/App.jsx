import "./App.css";
import { useState } from "react";
import { Header } from "./header";
import { Intro } from "./info";
import { ShowFormButton } from "./buttons";

// TODO: Add the gemini api so that it makes the template automatically
// TODO: Create a different file for each component

function App() {
  return (
    <>
      <Header />
      <Intro />
      <ShowFormButton />
    </>
  );
}

export default App;
