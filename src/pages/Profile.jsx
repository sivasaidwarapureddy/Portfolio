import '../styles/Profile.css';

function Profile() {
  return (
    <div className="profile page-container">
      <div className="content-section">
        <h1 className="page-title">My Profile</h1>
        <div className="profile-content">
          <div className="profile-section">
            <h2>About Me</h2>
            <p>I'm a passionate React Intern at Slash Mark IT Solutions, focusing on building 
               secure and responsive web applications. With hands-on experience in the MERN stack, I specialize 
               in creating user-friendly interfaces and implementing robust backend solutions.</p>
          </div>
          
          <div className="profile-section">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>Frontend: React.js, HTML5, CSS3, Bootstrap</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Databases: MongoDB, MySQL</li>
              <li>Languages: C++, JavaScript</li>
              <li>Developer Tools: Postman, VS Code, Git</li>
              <li>RESTful APIs Integration</li>
              <li>User Authentication & Security</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>

          <div className="profile-section">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3>React Intern</h3>
              <p>Slash Mark IT Solutions • 06/2024 - 08/2024</p>
              <ul>
                <li>Developed secure login and sign-up pages using React.js for frontend and Node.js with Express.js for backend</li>
                <li>Implemented user-friendly onboarding flows, achieving 30% improvement in user experience</li>
                <li>Enhanced password security using bcrypt.js for hashing and encryption</li>
                <li>Collaborated with cross-functional teams to ensure high usability and performance standards</li>
              </ul>
            </div>
          </div>

          <div className="profile-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>B.Tech in Computer Science & Engineering</h3>
              <p>National Institute of Technology, Patna • 2021 - 2025</p>
              <p>CGPA: 7.33/10</p>
            </div>
            <div className="education-item">
              <h3>Intermediate Education</h3>
              <p>Sri Tirumala Junior College • 2019 - 2021</p>
              <p>Percentage: 96.7/100</p>
            </div>
          </div>

          <div className="profile-section">
            <h2>Achievements</h2>
            <ul>
              <li>Solved 400+ coding problems on competitive coding platforms</li>
              <li>Udemy Certified WebDeveloper</li>
              <li>Ranked in top 1.45 percentile among 0.9 million candidates in JEE Mains 2021</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 