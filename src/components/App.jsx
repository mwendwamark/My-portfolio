import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About/>
      </main>
    </>
  );
}

export default App;
