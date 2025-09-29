import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
  {
    title: "Docker AI Image Classifier",
    description: "An AI-powered image classification web application built with Flask and MobileNetV2. Users can upload images which are classified using a pre-trained deep learning model. The app is containerized with Docker and deployed on Render with a CI/CD pipeline.",
    image: "/docker-ai-image-classifier.svg", // replace with your actual project image
    tech: ["Flask", "TensorFlow", "Keras", "Docker", "HTML", "CSS", "GitHub Actions", "Render"],
    github: "https://github.com/sahilsnk/docker-ai-image-classifier",
    live: "https://docker-ai-image-classifier.onrender.com",
    category: "Machine Learning / Full Stack"
  },
  {
    title: "Voice-Assisted Travel Query System",
    description: "A voice-based web application that allows users to query travel routes, bus schedules, and availability using natural speech. Built with React, Node.js, and MongoDB, it leverages voice recognition and speech parsing to streamline travel planning.",
    image: "/voice-travel-query.jpeg", // replace with actual project screenshot
    tech: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Web Speech API"],
    github: "https://github.com/sahilsnk/Voice-Assisted-Travel-Query-System",
    live: "http://localhost:5173", // if deployed, replace with live URL
    category: "Full Stack / AI"
  },
  {
    title: "Calorie Tracker",
    description: "An Android app built with Kotlin for tracking daily calorie intake. Features goal setting with notifications, offline mode, SQLite database storage, customized TableLayout UI, and nutritional summaries with breakdowns.",
    image: "/calorie-tracker.png", // replace with actual screenshot or placeholder
    tech: ["Kotlin", "Android", "SQLite", "Notifications", "Offline Support"],
    github: "https://github.com/sahilsnk/calorie_tracker",
    live: "#", // replace with Play Store link or demo URL if available
    category: "Mobile App"
  },
  {
    title: "ASTLineMapper",
    description: "A Clang-based CLI tool that visualizes and explains C++ Abstract Syntax Trees (ASTs) with AI-powered annotations. It helps understand compiler interpretations and complex code structures efficiently.",
    image: "/astlinemapper.jpg", // replace with actual screenshot or placeholder
    tech: ["C++", "Clang", "Python", "Groq API", "CLI Tool", "CMake"],
    github: "https://github.com/sahilsnk/ASTLineMapper",
    live: "#", // CLI tool, so no live demo
    category: "Developer Tool"
  },
  {
    title: "RVCE AI Chatbot",
    description: "Enhanced AI chatbot fine-tuned with RVCE-specific data using LLM techniques to improve accuracy, relevance, and responsiveness. Continuously tested and refined for optimal user experience.",
    image: "/rvce-chatbot.png", // replace with actual screenshot or placeholder
    tech: ["Python", "LLM Fine-Tuning", "OpenAI API", "JSONL Data", "Machine Learning"],
    github: "https://github.com/sahilsnk/RVCE_AI_CHATBOT",
    live: "#", // replace with deployed URL if available
    category: "AI / Chatbot"
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
        A showcase of my journey as a software engineer—building scalable full-stack applications, 
        exploring the frontiers of AI and machine learning, and applying technology creatively to solve 
        real-world problems. Hands-on projects like cloud-based platforms, IoT systems, and real-time communication tools, these works reflect both 
        cloud-based platforms, IoT systems, and real-time communication tools, these works reflect both 
        my technical depth and curiosity to push boundaries.
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
                  <div className="h-64 bg-portfolio-dark/5 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} Screenshot`} 
                      className="h-full w-full object-cover" 
                    />
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
