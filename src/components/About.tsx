import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a motivated and hardworking Diploma in Information Technology student with practical knowledge and experience in Web Development, Graphic Design, Android Development, and IT-related fields. I have knowledge of programming languages including C, C++, Python, and Java, along with HTML, CSS, MySQL, and Web Development.
        </p>
        <div className="about-details">
          <div className="about-card">
            <h4>Education</h4>
            <p>Diploma in Information Technology</p>
          </div>
          <div className="about-card">
            <h4>Certifications</h4>
            <p>C | C++ | Python</p>
          </div>
          <div className="about-card">
            <h4>Location</h4>
            <p>Sector-6, Nerul, Mumbai</p>
          </div>
          <div className="about-card">
            <h4>Languages</h4>
            <p>English | Hindi | Marathi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
