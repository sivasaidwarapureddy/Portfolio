import '../styles/About.css';

function About() {
  return (
    <div className="about page-container">
      <div className="content-section">
        <h1 className="page-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Introduction</h2>
            <p>
              I am a dedicated React Intern at Slash Mark IT Solutions, 
              pursuing my B.Tech in Computer Science & Engineering at National Institute 
              of Technology, Patna. With a strong foundation in full-stack development 
              and a passion for creating efficient web solutions, I specialize in 
              the MERN stack and modern web technologies.
            </p>
          </div>

          <div className="about-section">
            <h2>Professional Journey</h2>
            <p>
              During my internship at Slash Mark IT Solutions, I've contributed to 
              developing secure and responsive web applications, implementing user 
              authentication systems, and creating intuitive user interfaces. My work 
              has resulted in a 30% improvement in user experience through optimized 
              onboarding flows and enhanced security implementations.
            </p>
          </div>

          <div className="about-section">
            <h2>Technical Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-card">
                <h3>Frontend Development</h3>
                <p>Proficient in creating responsive and user-friendly interfaces using 
                   React.js, HTML5, and CSS3, with a focus on modern design principles.</p>
              </div>
              <div className="expertise-card">
                <h3>Backend Development</h3>
                <p>Experience in building robust server-side applications using Node.js 
                   and Express.js, integrated with MongoDB and MySQL databases.</p>
              </div>
              <div className="expertise-card">
                <h3>Tools & Technologies</h3>
                <p>Skilled in using development tools like Git, VS Code, and Postman, 
                   with expertise in RESTful API integration and testing.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Academic Excellence</h2>
            <p>
              Currently maintaining a CGPA of 7.33/10 at NIT Patna, with a strong 
              academic background reflected in scoring 96.7% in intermediate education. 
              Ranked in the top 1.45 percentile among 0.9 million candidates in JEE 
              Mains 2021, demonstrating strong analytical and problem-solving abilities.
            </p>
          </div>

          <div className="about-section">
            <h2>Personal Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>MediEase</h3>
                <p>Healthcare appointment scheduling system with real-time visibility 
                   of doctors' schedules, achieving 50% increase in scheduling efficiency.</p>
              </div>
              <div className="project-card">
                <h3>BlogApp</h3>
                <p>Full-stack blog platform with CRUD operations, user authentication, 
                   and advanced features like pagination and search functionality.</p>
              </div>
              <div className="project-card">
                <h3>SkyCast</h3>
                <p>Weather application providing real-time updates and forecasts for 
                   multiple cities, featuring dynamic data display and responsive design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;