import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <span>P</span>
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="project-button">
          START YOUR PROJECT
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>
            We Build Digital
            <br />
            Products That
            <br />
            <span>Inspire Users.</span>
          </h1>

          <p>
            From MVP to enterprise scale, Pent26 engineers world-class web and
            mobile applications tailored to your exact business goals.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Start Your Project
            </a>

            <a href="#projects" className="secondary-button">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="stat">
          <h2>35+</h2>
          <p>PROJECTS COMPLETED</p>
        </div>

        <div className="stat">
          <h2>100%</h2>
          <p>SATISFACTION</p>
        </div>

        <div className="stat">
          <h2>10+</h2>
          <p>EXPERT LEADS</p>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <p>GLOBAL SUPPORT</p>
        </div>
      </section>

      {/* About */}
      <section className="about-section" id="about">
        <div className="about-image">
          <div className="image-placeholder">
            Pent26Codes
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">WHO WE ARE</span>

          <h2>
            Empowering Businesses
            <br />
            Through Software
            <br />
            Innovation
          </h2>

          <p>
            At Pent26, we specialize in building high-impact software
            solutions that help businesses grow, innovate, and succeed in the
            digital world.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <div className="section-heading">
          <span className="section-label">WHAT WE DO</span>

          <h2>Comprehensive Solutions</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">◎</div>
            <h3>Website Development</h3>
            <p>
              High-performance React and Next.js applications tailored for
              modern businesses.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">◇</div>
            <h3>UI/UX Design</h3>
            <p>
              User-centric interfaces that blend aesthetic beauty with
              seamless functionality.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">▯</div>
            <h3>Mobile App Dev</h3>
            <p>
              Native and cross-platform mobile solutions for iOS and Android
              environments.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">▣</div>
            <h3>AI Solutions</h3>
            <p>
              Intelligent technology solutions designed to improve business
              efficiency and decision-making.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">☁</div>
            <h3>Cloud & SaaS</h3>
            <p>
              Scalable cloud-based platforms designed for modern businesses.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">↗</div>
            <h3>Digital Consulting</h3>
            <p>
              Strategic technology consulting to help businesses grow
              digitally.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section" id="projects">
        <div className="section-heading">
          <span className="section-label">OUR WORK</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">Project 01</div>
            <h3>Digital Product</h3>
            <p>Web Application</p>
          </div>

          <div className="project-card">
            <div className="project-image">Project 02</div>
            <h3>Business Platform</h3>
            <p>SaaS Application</p>
          </div>

          <div className="project-card">
            <div className="project-image">Project 03</div>
            <h3>Mobile Experience</h3>
            <p>Mobile Application</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section" id="process">
        <div className="section-heading">
          <span className="section-label">OUR METHOD</span>
          <h2>A Proven Path to Launch</h2>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <span>01</span>
            <h3>Discovery</h3>
            <p>
              Deep dive into goals, user needs, and market landscape.
            </p>
          </div>

          <div className="process-step">
            <span>02</span>
            <h3>Planning</h3>
            <p>
              Defining roadmap, features, and technology stack selection.
            </p>
          </div>

          <div className="process-step">
            <span>03</span>
            <h3>Design</h3>
            <p>
              Creating high-fidelity UI/UX and interactive prototypes.
            </p>
          </div>

          <div className="process-step">
            <span>04</span>
            <h3>Development</h3>
            <p>
              Agile engineering with continuous integration cycles.
            </p>
          </div>

          <div className="process-step">
            <span>05</span>
            <h3>Testing</h3>
            <p>
              Rigorous QA, security audits, and performance tuning.
            </p>
          </div>

          <div className="process-step">
            <span>06</span>
            <h3>Launch</h3>
            <p>
              Deployment and ongoing maintenance support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="section-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Let's Build Something Great</h2>

          <p>
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <p>
              <strong>GMAIL</strong>
              <br />
              pent26codes@gmail.com
            </p>

            <p>
              <strong>WHATSAPP</strong>
              <br />
              +91 7736636608
            </p>

            <p>
              <strong>OFFICE</strong>
              <br />
              Kerala, India
            </p>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <input type="tel" placeholder="Phone Number" />

            <textarea placeholder="Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;