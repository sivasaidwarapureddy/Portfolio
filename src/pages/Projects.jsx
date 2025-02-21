import '../styles/Projects.css';

function Projects() {
  
  const projects = [
    {
      title: "MediEase",
      description: "A high-quality and responsive user interface for doctors' appointment scheduling system",
      achievements: [
        "Developed real-time visibility of doctors' appointment schedules",
        "Achieved 50% increase in scheduling efficiency", 
        "Orchestrated end-to-end software development lifecycle"
      ],
      technologies: ["HTML5", "CSS3", "React.js", "Node.js", "MongoDB", "VS Code"],
      sourceCode: "https://github.com/sivasaidwarapureddy/doctorapp", // Replace with your GitHub link
      liveDemo: "#" // Replace with your live demo link if available
    },
    {
      title: "BlogApp", 
      description: "Dynamic and responsive blog platform with comprehensive features",
      achievements: [
        "Designed user interface using React.js",
        "Implemented RESTful APIs for CRUD operations",
        "Added pagination and search features"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "RESTful APIs"],
      sourceCode: "https://github.com/sivasaidwarapureddy/blogapp1", // Replace with your GitHub link
      liveDemo: "#" // Replace with your live demo link if available
    },
    {
      title: "SkyCast",
      description: "User-friendly weather application with real-time updates",
      achievements: [
        "Developed using React.js and Weather API",
        "Implemented real-time weather updates",
        "Added multi-city search functionality"
      ],
      technologies: ["HTML", "CSS", "React.js", "Weather API", "VS Code"],
      sourceCode: "https://github.com/sivasaidwarapureddy/weatherapp1", // Replace with your GitHub link
      liveDemo: "#" // Replace with your live demo link if available
    }
  ];

  return (
    <div className="projects page-container">
      <div className="content-section">
        <h1 className="page-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="achievements">
                <h3>Key Features:</h3>
                <ul>
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                <h3>Technologies Used:</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links" style={{marginTop: 'auto'}}>
                <a href={project.sourceCode} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn-primary">
                  View Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;