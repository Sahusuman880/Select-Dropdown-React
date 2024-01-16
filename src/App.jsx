import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Dropdown />
      </div>
    </>
  );
}

export default App;
