const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/markmwendwanthei/"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className="bx bxl-linkedin"
          style={{ color: "rgba(0,0,0,0.68)" }}
        ></i>{" "}
      </a>

      <a
        href="https://github.com/mwendwamark?tab=repositories"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
