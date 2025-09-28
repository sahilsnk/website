import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker",
    "GraphQL", "PostgreSQL", "TailwindCSS", "Next.js"
  ];

  const recentProjects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "/portfolio"
    },
    {
      title: "AI Dashboard",
      description: "Modern dashboard for AI model management and monitoring",
      tech: ["Next.js", "Python", "TensorFlow"],
      link: "/portfolio"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric auth",
      tech: ["React Native", "Node.js", "AWS"],
      link: "/portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-light">
      {/* Hero Section */}
      <section className="bg-portfolio-dark text-portfolio-text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
                Full Stack Developer &amp; Creative Technologist
              </h1>
              <p className="text-xl text-portfolio-text-light/80 mb-8 leading-relaxed">
                I craft digital experiences that bridge the gap between design and technology. 
                Specializing in modern web applications, AI integration, and scalable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center px-6 py-3 bg-portfolio-text-light text-portfolio-dark font-medium rounded-lg hover:bg-portfolio-text-light/90 transition-colors duration-200"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 border border-portfolio-text-light/30 text-portfolio-text-light font-medium rounded-lg hover:bg-portfolio-text-light/10 transition-colors duration-200"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-portfolio-text-light/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-portfolio-text-light/20 rounded-full mx-auto mb-4"></div>
                  <p className="text-portfolio-text-light/60">Profile Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-portfolio-dark mb-4">
              Technologies &amp; Skills
            </h2>
            <p className="text-xl text-portfolio-dark/70 max-w-2xl mx-auto">
              I work with cutting-edge technologies to build scalable and efficient solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg text-center shadow-sm border border-portfolio-dark/10 hover:shadow-md transition-shadow duration-200">
                <span className="text-portfolio-dark font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-portfolio-dark mb-4">
                Recent Projects
              </h2>
              <p className="text-xl text-portfolio-dark/70">
                A showcase of my latest work and creative solutions
              </p>
            </div>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-portfolio-dark font-medium hover:underline mt-4 md:mt-0"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-portfolio-light p-6 rounded-xl border border-portfolio-dark/10 hover:shadow-lg transition-all duration-200 group-hover:transform group-hover:scale-105">
                  <div className="h-48 bg-portfolio-dark/10 rounded-lg mb-6 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-portfolio-dark/30" />
                  </div>
                  <h3 className="text-xl font-medium text-portfolio-dark mb-3">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-dark/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-portfolio-dark text-portfolio-text-light text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-portfolio-dark mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-portfolio-dark/80 leading-relaxed">
                <p>
                  With over 5 years of experience in full-stack development, I specialize in creating 
                  robust web applications that deliver exceptional user experiences.
                </p>
                <p>
                  My passion lies in solving complex problems through clean, efficient code and 
                  innovative design solutions. I believe in the power of technology to transform 
                  businesses and improve lives.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, 
                  mentoring aspiring developers, or exploring the latest in AI and machine learning.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  to="/mentorship" 
                  className="inline-flex items-center text-portfolio-dark font-medium hover:underline"
                >
                  Learn About My Mentorship Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="bg-portfolio-dark/5 rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-portfolio-dark mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-dark mb-2">50+</div>
                  <div className="text-portfolio-dark/70">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-dark mb-2">15+</div>
                  <div className="text-portfolio-dark/70">Clients Satisfied</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-dark mb-2">5+</div>
                  <div className="text-portfolio-dark/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-dark mb-2">20+</div>
                  <div className="text-portfolio-dark/70">Code Snippets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-portfolio-dark text-portfolio-text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-portfolio-text-light/80 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center px-8 py-4 bg-portfolio-text-light text-portfolio-dark font-medium rounded-lg hover:bg-portfolio-text-light/90 transition-colors duration-200"
            >
              <Mail className="mr-3 h-5 w-5" />
              Send me an email
            </a>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-portfolio-text-light/30 rounded-lg hover:bg-portfolio-text-light/10 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-portfolio-text-light/30 rounded-lg hover:bg-portfolio-text-light/10 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
