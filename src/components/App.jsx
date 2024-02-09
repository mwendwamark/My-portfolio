import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Qualifications from "./Qualifications";
import Testimonial from "./Testimonial";
import Contacts from "./Contacts";
import Footer from "./Footer";

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
        <Testimonial />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}

export default App;
