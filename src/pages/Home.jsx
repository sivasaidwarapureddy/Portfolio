import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useState } from 'react';

function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

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

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="home">
      <div className="home-content">
        <div className="profile-image" onClick={toggleZoom}>
        <img src="/images/pic.jpg" alt="Profile" />
        </div>
        {isZoomed && (
          <div className="zoom-overlay" onClick={toggleZoom}>
            <img src="/src/assets/pic.jpg" alt="Profile Zoomed" className="zoomed-image" />
          </div>
        )}
        <div className="about-content">
          <h1>Welcome to My Portfolio</h1>
          <div className="description">
            <p>Hi, I'm <span style={{ color: '#2563eb', fontWeight: 'bold' }}>Dwarapureddy Siva Sai</span> 👋</p>
            <p>I'm a passionate developer with expertise in building modern web applications. 
               With several years of experience in frontend development, I specialize in 
               creating responsive and user-friendly interfaces using React and other 
               cutting-edge technologies.</p>
            <p>I love turning complex problems into simple, beautiful and intuitive solutions.
               When I'm not coding, you can find me exploring new technologies or contributing
               to open source projects.</p>
            <p>I'm a quick learner and I'm always looking for new challenges and opportunities to grow.</p>
          </div>

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
        </div>
      </div>
      <style>{`
        .home {
          padding: 1rem;
          background: linear-gradient(135deg, #f6f8fc 0%, #e9f0f7 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .home-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          flex-direction: column;
        }

        .profile-image {
          width: 100%;
          max-width: 350px;
          aspect-ratio: 1;
          position: relative;
          transform: none;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 10px 10px 30px rgba(0,0,0,0.1),
                      -10px -10px 30px rgba(255,255,255,0.8);
          transition: transform 0.3s ease;
        }

        .zoom-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          cursor: zoom-out;
        }

        .zoomed-image {
          max-width: 95%;
          max-height: 95vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 20px;
        }

        @media (max-width: 768px) {
          .zoomed-image {
            width: 95%;
            height: auto;
          }
          
          .zoom-overlay {
            padding: 10px;
          }
        }

        .about-content {
          width: 100%;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          box-shadow: 10px 10px 30px rgba(0,0,0,0.1),
                      -10px -10px 30px rgba(255,255,255,0.8);
          transform: none;
          transition: transform 0.3s ease;
          overflow-y: auto;
        }

        .about-content h1 {
          color: #1a1a1a;
          margin-bottom: 1.25rem;
          font-size: 2rem;
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }

        .description {
          margin-bottom: 1.5rem;
        }

        .description p {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 1rem;
          text-align: left;
        }

        .social-profiles {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .social-profile-card {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .profile-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f9ff;
          border-radius: 8px;
          margin-right: 0.75rem;
          font-size: 1.1rem;
          color: #2563eb;
        }

        .profile-info h3 {
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }

        .profile-info p {
          font-size: 0.8rem;
        }

        @media (min-width: 640px) {
          .home {
            padding: 1.5rem;
          }

          .social-profiles {
            grid-template-columns: repeat(2, 1fr);
          }

          .description p {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 768px) {
          .profile-image {
            max-width: 400px;
          }

          .about-content h1 {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 1024px) {
          .home-content {
            flex-direction: row;
            align-items: stretch;
            gap: 3rem;
            padding: 2rem;
          }

          .profile-image {
            flex: 0 0 400px;
            transform: perspective(1000px) rotateY(-5deg);
          }

          .profile-image:hover {
            transform: perspective(1000px) rotateY(0deg);
          }

          .about-content {
            flex: 1;
            transform: perspective(1000px) rotateY(5deg);
            padding: 2rem;
          }

          .about-content:hover {
            transform: perspective(1000px) rotateY(0deg);
          }

          .social-profiles {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }

          .social-profile-card {
            padding: 1rem;
          }

          .profile-icon {
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
          }

          .profile-info h3 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;