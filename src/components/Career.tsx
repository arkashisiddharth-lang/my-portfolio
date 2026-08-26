import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT / Software / Data Analyst</h4>
                <h5>Professional Experience</h5>
              </div>
              <h3>6 MOS</h3>
            </div>
            <p>
              Gained practical exposure to IT, software, and data-related tasks.
              Developed technical knowledge and problem-solving abilities while
              working with software and data-oriented activities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic / Web Designer</h4>
                <h5>Professional Experience</h5>
              </div>
              <h3>6 MOS</h3>
            </div>
            <p>
              Gained practical experience in Graphic and Web Designing, working
              with web technologies and creative design requirements. Developed
              visually appealing digital content and web solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Development Intern</h4>
                <h5>Internship Experience</h5>
              </div>
              <h3>3 MOS</h3>
            </div>
            <p>
              Completed a 3-month internship in Android Development, gaining
              practical exposure to mobile application development and
              understanding application development workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in IT</h4>
                <h5>C | C++ | Python Certified</h5>
              </div>
              <h3>EDUCATION</h3>
            </div>
            <p>
              Diploma-level education in Information Technology with knowledge in
              programming, databases, and web development. Completed certifications
              in C, C++, and Python demonstrating technical fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
