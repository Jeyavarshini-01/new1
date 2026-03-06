export default function App() {
  return (
    <div>
      <div className="header">
        <img src="/Jeyalogo.png" height="60" alt="logo"/>

        <div className="navigation">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a href="https://www.linkedin.com/in/jeya-varshini-101555232/" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="https://www.instagram.com/rain_of_succez/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <section id="home">
        <h1>K.A. JEYAVARSHINI</h1>

        <div className="home-content">
          <p className="role">
            I am a passionate and detail-oriented Web Designer with a strong focus on creating visually appealing,
            user-friendly, and responsive websites. I specialize in transforming ideas into engaging digital
            experiences that combine creativity with functionality.
          </p>

          <div className="photo">
            <img src="/jeyaa.jpg" height="300" width="300" alt="profile"/>
          </div>
        </div>

        <a href="/JEYAVARSHINI KA resume1.pdf" target="_blank" className="resume-btn">
          Resume
        </a>
      </section>
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skill-list">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>Responsive Design</div>
          <div>UI/UX Basics</div>
        </div>
      </section>
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-box">
          <div className="project">
            <h3>Banking management</h3>
            <p>
              Developed a desktop application to manage employee records.
              Implemented CRUD operations with database connectivity.
              Designed login authentication for admin access.
            </p>
          </div>

          <div className="project">
            <h3>College website</h3>
            <p>Mini project done for credits during UG</p>
          </div>
        </div>
      </section>
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: jeyavarshid57@gmail.com</p>
        <p>Phone: +91 9943845007</p>
      </section>

    </div>
  );
}