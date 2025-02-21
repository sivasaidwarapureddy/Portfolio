import '../styles/Resume.css';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Resume() {

  // Using Google Drive PDF embed link converted to preview mode
  const resumeLink = "https://drive.google.com/file/d/1VizGajxpZSlJAhQ6qMoeWmUogW5VCkEq/preview";
  
  const socialProfiles = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/sivasaidwarapureddy ",
     
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/sivasaidwarapureddy/ ",
     
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sivasaidwarapureddy/ ",
     
    }
  ];

  return (
    <div className="resume page-container">
      <div className="content-section">
        <h1 className="page-title">My Resume</h1>
        
        <div className="social-profiles">
          {socialProfiles.map((profile, index) => (
            <a 
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-profile-card"
            >
              <div className="profile-icon">
                {profile.icon}
              </div>
              <div className="profile-info">
                <h3>{profile.name}</h3>
                <p>{profile.stats}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="resume-content">
          <div className="resume-actions">
            <a 
              href="https://drive.google.com/file/d/1VizGajxpZSlJAhQ6qMoeWmUogW5VCkEq/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="download-btn"
            >
              Download Resume
            </a>
          </div>

          <div className="resume-preview">
            <iframe
              src={resumeLink}
              title="Resume Preview"
              width="100%"
              height="800px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="resume-highlights">
            <div className="highlight-section">
              <h2>Education</h2>
              <div className="highlight-item">
                <h3>B.Tech in Computer Science & Engineering</h3>
                <p>National Institute of Technology, Patna</p>
                <p>2021 - 2025</p>
                <p>CGPA: 7.33/10</p>
              </div>
              <div className="highlight-item">
                <h3>Intermediate Education</h3>
                <p>Sri Tirumala Junior College</p>
                <p>2019 - 2021</p>
                <p>Percentage: 96.7/100</p>
              </div>
            </div>

            <div className="highlight-section">
              <h2>Professional Experience</h2>
              <div className="highlight-item">
                <h3>Software Development Intern</h3>
                <p>Slash Mark IT Solutions</p>
                <p>06/2024 - 08/2024</p>
                <ul>
                  <li>Developed secure login/signup systems</li>
                  <li>Improved user experience by 30%</li>
                  <li>Implemented password security features</li>
                </ul>
              </div>
            </div>

            <div className="highlight-section">
              <h2>Technical Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <p>React.js, HTML5, CSS3, Bootstrap</p>
                </div>
                <div className="skill-category">
                  <h3>Backend</h3>
                  <p>Node.js, Express.js</p>
                </div>
                <div className="skill-category">
                  <h3>Databases</h3>
                  <p>MongoDB, MySQL</p>
                </div>
                <div className="skill-category">
                  <h3>Tools</h3>
                  <p>Git, VS Code, Postman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;