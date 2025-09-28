import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/example/ecommerce",
      live: "https://example-ecommerce.com",
      category: "Full Stack"
    },
    {
      title: "AI-Powered Dashboard",
      description: "An intelligent dashboard for data visualization and machine learning model management. Includes real-time analytics, model deployment, and performance monitoring.",
      image: "/placeholder.svg",
      tech: ["Next.js", "Python", "TensorFlow", "Docker", "GCP"],
      github: "https://github.com/example/ai-dashboard",
      live: "https://example-dashboard.com",
      category: "AI/ML"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, bill payments, and investment tracking.",
      image: "/placeholder.svg",
      tech: ["React Native", "Node.js", "MongoDB", "JWT", "Biometric API"],
      github: "https://github.com/example/banking-app",
      live: "https://example-banking.com",
      category: "Mobile"
    },
    {
      title: "Real-time Chat Platform",
      description: "A scalable chat platform supporting multiple rooms, file sharing, voice messages, and video calls. Built for high-performance real-time communication.",
      image: "/placeholder.svg",
      tech: ["Socket.io", "React", "Node.js", "Redis", "WebRTC"],
      github: "https://github.com/example/chat-platform",
      live: "https://example-chat.com",
      category: "Real-time"
    },
    {
      title: "Project Management Tool",
      description: "Comprehensive project management solution with task tracking, team collaboration, time management, and reporting features.",
      image: "/placeholder.svg",
      tech: ["Vue.js", "Express", "MySQL", "GraphQL", "Docker"],
      github: "https://github.com/example/project-manager",
      live: "https://example-pm.com",
      category: "Productivity"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology. Ensures vote integrity and provides real-time election results.",
      image: "/placeholder.svg",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      github: "https://github.com/example/blockchain-voting",
      live: "https://example-voting.com",
      category: "Blockchain"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-light">
      {/* Hero Section */}
      <section className="bg-portfolio-dark text-portfolio-text-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-medium mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-portfolio-text-light/80 max-w-3xl mx-auto">
              A collection of projects that showcase my skills in full-stack development, 
              AI integration, and creative problem-solving across various technologies and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-portfolio-dark/10 hover:shadow-lg transition-shadow duration-300">
                {/* Project Image */}
                <div className="h-64 bg-portfolio-dark/5 flex items-center justify-center">
                  <div className="text-portfolio-dark/30 text-center">
                    <ExternalLink className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-portfolio-dark text-portfolio-text-light text-sm rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-portfolio-dark/60 hover:text-portfolio-dark transition-colors duration-200"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-portfolio-dark/60 hover:text-portfolio-dark transition-colors duration-200"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-portfolio-dark mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-portfolio-dark/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-portfolio-light border border-portfolio-dark/20 text-portfolio-dark text-sm rounded-lg">
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

      {/* Call to Action */}
      <section className="py-20 bg-portfolio-dark text-portfolio-text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-portfolio-text-light/80 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center px-8 py-4 bg-portfolio-text-light text-portfolio-dark font-medium rounded-lg hover:bg-portfolio-text-light/90 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
