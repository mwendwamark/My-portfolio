import React from "react";
import "../styles/Scrollup.css";

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // When the scroll is higher than the 560 viewport height, add the "show-scroll" class to the tag with the "scroll-top" class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="" className="scrollup">
      <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  );
};

export default Scrollup;
