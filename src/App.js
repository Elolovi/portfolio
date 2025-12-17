import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import victor from "./assets/images/victor.jpg";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// Navbar Component
const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Victor <span className="text-primary">KOBANA</span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-3 fw-bold text-white mb-4">
              Senior Software Developer
            </h1>
            <p className="lead text-white mb-5">
              With over 5 years of experience building scalable applications using 
              Java Spring Boot, React, and modern cloud technologies.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="#projects" className="btn btn-primary btn-lg px-4">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="section-py">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">About Me</h2>
            <p className="text-muted">
              Full-Stack Developer with 5+ Years of Experience
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-content">
              <h3 className="mb-4">Building Digital Solutions That Matter</h3>
              <p className="text-muted mb-4">
                I'm a passionate software developer with expertise in building robust, 
                scalable web applications. My journey in software development started 
                over five years ago, and since then I've worked on various projects 
                ranging from enterprise applications to innovative startups.
              </p>
              <p className="text-muted mb-4">
                I specialize in Java Spring Boot for backend development and React 
                for frontend, with extensive experience in database design, API 
                development, and cloud deployment.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">Java</span>
                <span className="badge bg-primary">Spring Boot</span>
                <span className="badge bg-primary">React</span>
                <span className="badge bg-secondary">JavaScript</span>
                <span className="badge bg-secondary">HTML/CSS</span>
                <span className="badge bg-secondary">PostgreSQL</span>
                <span className="badge bg-secondary">Git/GitHub</span>
                <span className="badge bg-secondary">Docker</span>
                <span className="badge bg-secondary">REST APIs</span>
                <span className="badge bg-secondary">Microservices</span>
                <span className="badge bg-secondary">AWS</span>
                <span className="badge bg-secondary">CI/CD</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image text-center">
              <div className="image-placeholder rounded">
                <i className="fas fa-user display-1 text-muted"></i>
                 <img src={victor} alt="victior" width="600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 79 },
        { name: "REST APIs", level: 88 },
        { name: "Microservices", level: 85 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 88 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Database & DevOps",
      skills: [
        { name: "PostgreSQL", level: 87 },
        { name: "Docker", level: 83 },
        { name: "Git/GitHub", level: 95 },
        { name: "AWS", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-py bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">Technical Skills</h2>
            <p className="text-muted">
              My expertise across different technology stacks
            </p>
          </div>
        </div>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4">
              <div className="skill-category card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-4">{category.title}</h5>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress">
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{ width: `${skill.level}%` }}
                          aria-valuenow={skill.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
     
    
    {
      title: "Graphic Design & Laser Engraving Portfolio",
      company: "Undercover Emporium",
      period: "2025 - Present",
      description: "A creative portfolio showcasing laser engraving works, brand designs, and product visuals designed using Adobe Photoshop, Illustrator, and LightBurn.",
      image: "/assets/images/design-portfolio.jpg",
      technologies: ["Photoshop", "Illustrator","CorelDRAW","LightBurn", "DTF"],
      link: "#"
    },
    {
      title: "Freelance senior web developer",
      
      period: "2022 - 2025",
      description: "A modern web-based Point of Sale system built for laundry businesses, a complete bakery production and POS management app for tracking ingredients, production, losses, employees, and distributions. Includes dashboards, QR code printing, and stock automation. Features include order tracking, customer management, invoice printing, and secure authentication with Spring Boot and React and other relevant web apps.",
      image: "/assets/images/laundry-pos.jpg", // replace with your image path
      technologies: ["Spring Boot", "React", "MySQL", "JWT", "Bootstrap"],
      link: "#"
    },
    {
      title: "Full Stack Developer",
      company: "Innovate Labs",
      period: "2019 - 2021",
      description: "Developed and maintained multiple React applications with Java Spring Boot backends. Implemented CI/CD pipelines reducing deployment time by 60%.",
      technologies: ["React", "Spring Boot", "JavaScript", "Git", "CI/CD"]
    },
    {
      title: "Expense & Inventory Desktop App",
      company: "Gras Savoye Togo.",
      period: "2017-2018",
      description: "A Java Swing desktop solution designed to manage company in/out expenses and office inventory like pens, books, and supplies. Includes CRUD operations, reporting, and authentication.",
      image: "/assets/images/swing-expense.jpg",
      technologies: ["Java Swing", "JDBC", "MySQL"],
      link: "#"
    },
    {
      title: "Software Developer",
      company: "Melsoft Solutions",
      period: "2015-2016 ",
      description: "Built RESTful APIs and responsive web interfaces. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["REST APIs", "HTML/CSS", "PHP", "jQuery", "Ajax", "MySQL"]
    },
    {
      title: "Hardware and Software Support Engineer",
      company: "Ecobank",
      period: "2014-2015",
      description: "Fixing bugs, troubleshooting, and resolving network issues, maintenance of workstations, intervention on ATM in case of network failure, generation and printing bank account statements.",
      technologies: ["Technical Support", "Network Troubleshooting", "Hardware Maintenance"]
    },
    {
      title: "POS system Desktop App",
      company: "Afric Solar.",
      period: "2013 - 2014",
      description: "A Java Swing desktop solution designed to manage sales and stocks and supplies. Includes CRUD operations, reporting, and authentication.",
      image: "/assets/images/swing-expense.jpg",
      technologies: ["Java Swing", "JDBC", "MySQL"],
      link: "#"
    }
  ];

  return (
    <section id="experience" className="section-py">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">Work Experience</h2>
            <p className="text-muted">
              My professional journey in software development
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content card border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-md-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h5 className="card-title mb-1">{exp.title}</h5>
                          <h6 className="text-primary mb-2">{exp.company}</h6>
                        </div>
                        <span className="badge bg-light text-dark mb-2">{exp.period}</span>
                      </div>
                      <p className="card-text text-muted mb-3">{exp.description}</p>
                      <div className="d-flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="badge bg-secondary">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
        
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["Java Spring Boot", "React", "PostgreSQL", "Docker"],
      image: "bg-primary"
    },     
    {
      title: "Task Management System",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and reporting dashboard.",
      technologies: ["Spring Boot", "React", "WebSocket", "MySQL"],
      image: "bg-success"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "An interactive dashboard for financial data visualization with advanced filtering, reporting, and export capabilities.",
      technologies: ["Java", "React", "Chart.js", "PostgreSQL"],
      image: "bg-warning"
    }
  ];

  return (
    <section id="projects" className="section-py bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">Recent Projects</h2>
            <p className="text-muted">
              Some of my notable work and contributions
            </p>
          </div>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="project-card card h-100 border-0 shadow-sm overflow-hidden">
                <div className={`project-image ${project.image} d-flex align-items-center justify-content-center`} style={{height: '200px'}}>
                  <i className="fas fa-laptop-code text-white display-4"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-3">{project.title}</h5>
                  <p className="card-text text-muted mb-3">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge bg-light text-dark">{tech}</span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-primary">View Details</button>
                    <button className="btn btn-sm btn-outline-secondary">Live Demo</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-py">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-muted">
              Let's discuss your next project or opportunity
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="contact-info text-center">
                  <div className="contact-icon bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <h5>Email</h5>
                  <p className="text-muted">vkobana@gmail.com</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="contact-info text-center">
                  <div className="contact-icon bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <h5>Phone</h5>
                  <p className="text-muted">+ (233) 054 56-7890</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="contact-info text-center">
                  <div className="contact-icon bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <h5>Location</h5>
                  <p className="text-muted">Accra, Ghana</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form mt-5">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; 2023 John Doe. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="social-links">
              <a href="#" className="text-white me-3">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;