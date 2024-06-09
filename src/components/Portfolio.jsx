import React from "react";
import "../styles/Portfolio.css";
import PortfolioImage from "../assets/portfolio-web.png";
import Primax from "../assets/Primax.png";
import GeminiClone from "../assets/Gemini-clone.png";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="portfolio_title">Projects</h2>
      <span className="section_subtitle">My Projects</span>
      <div className="portfolio-container container grid">
        <div className="portfolio-contents">
          <a
            href="https://mark-nthei.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-image-container">
              <img src={PortfolioImage} alt="My Personal Portfolio" />
              <i className="bx bx-link"></i>
            </div>
          </a>
          <p>My Personal Portfolio</p>
        </div>

        <div className="portfolio-contents">
          <a
            href="https://primax-family-dental.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-image-container">
              <img src={Primax} alt="Primax Family Dental" />
              <i className="bx bx-link"></i>
            </div>
          </a>
          <p>Primax Family Dental</p>
        </div>

        <div className="portfolio-contents">
          <a
            href="https://gemini-ai-cloned.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-image-container">
              <img src={GeminiClone} alt="Gemini AI clone" />
              <i className="bx bx-link"></i>
            </div>
          </a>
          <p>Gemini AI clone</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
