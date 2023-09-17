import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />

          <div className="home_img">
            <img
              src="https://www.istockphoto.com/photo/young-smiling-businessman-or-student-in-blue-t-shirt-and-beanie-gm1450035694-487057907?phrase=web%20developer"
              alt=""
              className="home_img"
            />
          </div>
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
