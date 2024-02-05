import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services"
import Qualifications from "./Qualifications";
import Testimonial from "./Testimonial";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Testimonial/>
      </main>
    </>
  );
}

export default App;
