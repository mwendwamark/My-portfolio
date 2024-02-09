import React from 'react'

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.dribbble.com"
        className="home_social-icon"
        target="_blank"
      >
        <i className="bx bxl-linkedin" style={{"color": "rgba(0,0,0,0.68)"}}></i>{" "}
      </a>

      <a
        href="https://www.github.com"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social
