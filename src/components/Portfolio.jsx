import React from "react";
import "../styles/Portfolio.css";
import PortfolioImage from "../assets/portfolio-web.png";
import Primax from "../assets/Primax.png";
import GeminiClone from "../assets/Gemini-clone.png";
import KejaConnect from "../assets/KejaConnect.png";
import GRWC from "../assets/GRWC.png";

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
              <div className="project-description">
                A responsive portfolio website showcasing my skills and projects.
              </div>
            </div>
          </a>
          <p className="project-title">My Personal Portfolio</p>
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
              <div className="project-description">
                A website for a dental clinic with appointment booking features.
              </div>
            </div>
          </a>
          <p className="project-title">Primax Family Dental</p>
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
              <div className="project-description">
                A clone of the Gemini AI interface using modern web technologies.
              </div>
            </div>
          </a>
          <p className="project-title">Gemini AI clone</p>
        </div>

        <div className="portfolio-contents">
          <a
            href="http://kejaconnect.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-image-container">
              <img src={KejaConnect} alt="Keja Connect" />
              <i className="bx bx-link"></i>
              <div className="project-description">
                A platform for connecting tenants, (University Students) and landlords having residential apartments arpund universities in Kenya (Work in progress).
              </div>
            </div>
          </a>
          <p className="project-title">Keja Connect (Work in progress)</p>
        </div>

        <div className="portfolio-contents">
          <a
            href="https://grwc.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="portfolio-image-container">
              <img src={GRWC} alt="GRWC" />
              <i className="bx bx-link"></i>
              <div className="project-description">
                A website I made for my church. 
              </div>
            </div>
          </a>
          <p className="project-title">GRWC</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;