import React, { useState } from "react";
import "../styles/Services.css";

const Services = () => {

  const [toggleState, setToggleState] = useState(0)
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I offer</span>
      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Product <br /> Design
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services_modal active_modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">Visual Design</h3>
              <p className="services_modal-descrpition">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                odit harum quaerat tempore? Cum.
              </p>
              <ul className="services_modal-services grid">
                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I develop user interfaces
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Web page develoopment </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I create ux element interactions
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I position your company brand
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="bx bx-code-alt services_icon"></i>
            <h3 className="services_title">
              Web <br /> Designing
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services_modal active_modal"
                : "services_modal"
            }
          >
            {" "}
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">Web design</h3>
              <p className="services_modal-descrpition">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                odit harum quaerat tempore? Cum.
              </p>
              <ul className="services_modal-services grid">
                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I develop user interfaces
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Web page development </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I create ux element interactions
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I position your company brand
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-cog services_icon"></i>
            <h3 className="services_title">
              Fullstack <br /> Development
            </h3>
          </div>

          <span className="services_button" onClick={() => toggleTab(3)}>
            View more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services_modal active_modal"
                : "services_modal"
            }
          >
            {" "}
            <div className="services_modal-content">
              <i className="uil uil-times services_modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services_modal-title">FullStack development</h3>
              <p className="services_modal-descrpition">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                odit harum quaerat tempore? Cum.
              </p>
              <ul className="services_modal-services grid">
                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I develop user interfaces
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Web page develoopment </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I create ux element interactions
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    I position your company brand
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Design and mockups of products for companies
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
