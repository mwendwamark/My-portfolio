import React from "react";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Mark</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#protfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com"
            className="footer_social-link"
            target="_blank"
          >
            <i
              className="uil uil-linkedin-alt"
              style={{ color: "white" }}
            ></i>
          </a>

          <a
            href="https://www.github.com"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer_copyright">
          &#169; Mark Mwendwa. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
