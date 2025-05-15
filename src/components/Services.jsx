import React, { useState } from "react";
import "../styles/Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I offer</span>
      <div className="services_container container grid">
        {/* UI/UX Design Section */}
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              UI <br /> Design
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
              <h3 className="services_modal-title">UI/UX Design</h3>
              <p className="services_modal-descrpition">
                Crafting intuitive and visually appealing user interfaces that enhance user experience and engagement.
              </p>
              <ul className="services_modal-services grid">
                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Design user-friendly and responsive interfaces
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Create wireframes and prototypes for seamless user flows
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Conduct user research and usability testing
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Optimize designs for accessibility and performance
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Collaborate with developers to ensure design feasibility
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Web Design Section */}
        <div className="services_content">
          <div>
            <i className="bx bx-code-alt services_icon"></i>
            <h3 className="services_title">
              Web <br /> Design
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
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">Web Design</h3>
              <p className="services_modal-descrpition">
                Building modern, responsive, and visually stunning websites tailored to your brand and audience.
              </p>
              <ul className="services_modal-services grid">
                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop responsive and mobile-friendly websites
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Implement custom designs using HTML, CSS, and JavaScript
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Optimize websites for speed and performance
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Ensure cross-browser compatibility
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Integrate SEO best practices for better visibility
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fullstack Development Section */}
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
            <div className="services_modal-content">
              <i
                className="uil uil-times services_modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services_modal-title">Fullstack Development</h3>
              <p className="services_modal-descrpition">
                Delivering end-to-end web solutions, from front-end design to back-end functionality, ensuring seamless performance and scalability.
              </p>
              <ul className="services_modal-services grid">
                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Develop dynamic and interactive web applications
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Build RESTful APIs and integrate third-party services
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Manage databases and ensure data security
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Deploy and maintain applications on cloud platforms
                  </p>
                </li>

                <li className="service_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Provide ongoing support and updates
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