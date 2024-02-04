import React, { useState } from "react";
import "../styles/Qualification.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={()=> toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={()=> toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  {" "}
                  Bsc. Business Information Technology
                </h3>
                <span className="qualification_subtitle">
                  {" "}
                  Jomo Kenyatta University of Agriculture and Technology(JKUAT)
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>September 2023 -
                  Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Design </h3>
                <span className="qualification_subtitle">Moringa School </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>February 2023 - August
                  2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">Moringa School</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>February 2023 - August
                  2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Fullstack Development</h3>
                <span className="qualification_subtitle">Moringa School </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>February 2023 - August
                  2023
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Frontend Developer</h3>
                <span className="qualification_subtitle"> Freelancing </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>August 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Backend Developer </h3>
                <span className="qualification_subtitle">Freelancing </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>August 2023 - present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle">Freelancing</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>August 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Fullstack Development</h3>
                <span className="qualification_subtitle">Moringa School </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>February 2023 - August
                  2023
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
