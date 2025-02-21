import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact page-container">
      <div className="content-section">
        <h1 className="page-title">Contact Me</h1>
        
        <div className="contact-content">
          {/* Direct Contact Methods */}
          <div className="contact-section">
            <h2>Get In Touch</h2>
            <div className="contact-methods">
              <a href="tel:+919121895217" className="contact-card">
                <div className="icon">📱</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+91 9121895217</p>
                </div>
              </a>

              <a href="mailto:sivasai.dwarapureddy@gmail.com" className="contact-card">
                <div className="icon">📧</div>
                <div className="contact-details">
                  <h3>Personal Email</h3>
                  <p className="email-text">sivasai.dwarapureddy@gmail.com</p>
                </div>
              </a>
              <a href="mailto:dwarapureddys.ug21.cs@nitp.ac.in" className="contact-card">
                <div className="icon">📧</div>
                <div className="contact-details">
                  <h3>College Email</h3>
                  <p className="email-text">dwarapureddys.ug21.cs@nitp.ac.in</p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-section">
            <h2>Send Me a Message</h2>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your Name"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your Email"
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Message Subject"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your Message"
                  rows="5"
                  required 
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <style>{`
          .contact-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
          }

          .contact-methods {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
          }

          .contact-card {
            display: flex;
            align-items: center;
            padding: 1rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-decoration: none;
            color: inherit;
            transition: transform 0.2s;
          }

          .contact-card:hover {
            transform: translateY(-2px);
          }

          .email-text {
            word-break: break-word;
          }

          .form-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
          }

          .submit-btn {
            width: 100%;
            padding: 1rem;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
          }

          .submit-btn:hover {
            background: #1d4ed8;
          }

          @media (max-width: 768px) {
            .contact-content {
              padding: 0.5rem;
            }

            .contact-methods {
              grid-template-columns: 1fr;
            }

            .contact-card {
              padding: 0.75rem;
            }

            .form-row {
              grid-template-columns: 1fr;
            }

            .form-group input,
            .form-group textarea {
              padding: 0.5rem;
            }
          }

          @media (min-width: 1024px) {
            .contact-content {
              flex-direction: row;
              align-items: flex-start;
            }

            .contact-section {
              flex: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Contact;