import React from 'react'
import "../styles/Skills.css";

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Ruby</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Ruby on rails</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Sqlite3</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Postgresql</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Sinatra</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Render</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          {/* <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name"></h3>
              <span className="skills_level"></span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Backend
