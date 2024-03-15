import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  /*============= Change Background Header ============*/

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // When the scroll is higher than the 560 viewport height, add the "scroll-header" class to the tag with the "header" class
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*============= TOGGLE MENU ============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">
            Mark
          </a>
          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav === "#home" ? "nav_link active-link" : "nav_link"
                  }
                >
                  <i className="uil uil-estate nav_icon"></i> Home
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav === "#about" ? "nav_link active-link" : "nav_link"
                  }
                >
                  <i className="uil uil-user nav_icon"></i>About
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav === "#skills"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-file-alt nav_icon"></i>Skills
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#services"
                  onClick={() => setActiveNav("#services")}
                  className={
                    activeNav === "#services"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-briefcase-alt nav_icon"></i> Services
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav === "#portfolio"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-scenery nav_icon"></i> Portfolio
                </a>
              </li>

              <li className="nav_item">
                <a
                  href="#contacts"
                  onClick={() => setActiveNav("#contacts")}
                  className={
                    activeNav === "#contacts"
                      ? "nav_link active-link"
                      : "nav_link"
                  }
                >
                  <i className="uil uil-message nav_icon"></i> Contact
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav_close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
