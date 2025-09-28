import { Calendar, Clock, Users, Award, MessageCircle, Video } from "lucide-react";

const Mentorship = () => {
  const programs = [
    {
      title: "1-on-1 Mentorship",
      duration: "3 months",
      price: "$299/month",
      description: "Personalized guidance tailored to your specific goals and learning pace.",
      features: [
        "Weekly 1-hour video calls",
        "Code review and feedback",
        "Career guidance and planning",
        "Resume and portfolio review",
        "Interview preparation",
        "24/7 chat support"
      ],
      popular: true
    },
    {
      title: "Group Mentorship",
      duration: "2 months",
      price: "$149/month",
      description: "Learn alongside peers in a collaborative and supportive environment.",
      features: [
        "Bi-weekly group sessions (4-6 people)",
        "Group project collaboration",
        "Peer code reviews",
        "Technical discussions",
        "Networking opportunities",
        "Discord community access"
      ],
      popular: false
    },
    {
      title: "Career Accelerator",
      duration: "6 months",
      price: "$199/month",
      description: "Comprehensive program for career transition and advancement.",
      features: [
        "Monthly 1-on-1 sessions",
        "Portfolio development",
        "Job search strategy",
        "Mock interviews",
        "Salary negotiation tips",
        "Industry connections"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer at Google",
      image: "/placeholder.svg",
      quote: "The mentorship program was a game-changer for my career. I went from a bootcamp graduate to landing my dream job at Google in just 6 months.",
      program: "Career Accelerator"
    },
    {
      name: "Michael Rodriguez",
      role: "Full Stack Developer at Spotify",
      image: "/placeholder.svg",
      quote: "The personalized feedback and code reviews helped me improve my skills dramatically. The interview prep was especially valuable.",
      program: "1-on-1 Mentorship"
    },
    {
      name: "Emily Johnson",
      role: "Software Engineer at Microsoft",
      image: "/placeholder.svg",
      quote: "Being part of the group mentorship created lasting connections with fellow developers. We still collaborate on projects today!",
      program: "Group Mentorship"
    }
  ];

  const stats = [
    { number: "200+", label: "Mentees Guided" },
    { number: "85%", label: "Job Placement Rate" },
    { number: "50+", label: "Companies Hired From" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-portfolio-light">
      {/* Hero Section */}
      <section className="bg-portfolio-dark text-portfolio-text-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-medium mb-6">
              Mentorship Programs
            </h1>
            <p className="text-xl text-portfolio-text-light/80 max-w-3xl mx-auto mb-8">
              Accelerate your tech career with personalized guidance from an experienced developer. 
              Join hundreds of successful mentees who have transformed their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#programs" 
                className="inline-flex items-center px-8 py-4 bg-portfolio-text-light text-portfolio-dark font-medium rounded-lg hover:bg-portfolio-text-light/90 transition-colors duration-200"
              >
                View Programs
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 border border-portfolio-text-light/30 text-portfolio-text-light font-medium rounded-lg hover:bg-portfolio-text-light/10 transition-colors duration-200"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-portfolio-dark/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-portfolio-dark mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-portfolio-dark/70 max-w-2xl mx-auto">
              Select the mentorship program that best fits your goals and learning style
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-sm border ${program.popular ? 'border-portfolio-dark ring-2 ring-portfolio-dark' : 'border-portfolio-dark/10'}`}>
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-portfolio-dark text-portfolio-text-light text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-portfolio-dark mb-2">
                    {program.title}
                  </h3>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center text-portfolio-dark/60">
                      <Clock className="h-4 w-4 mr-2" />
                      {program.duration}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-portfolio-dark mb-2">
                    {program.price}
                  </div>
                  <p className="text-portfolio-dark/70">
                    {program.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-portfolio-dark rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-portfolio-text-light rounded-full"></div>
                      </div>
                      <span className="text-portfolio-dark/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  program.popular 
                    ? 'bg-portfolio-dark text-portfolio-text-light hover:bg-portfolio-dark/90' 
                    : 'border border-portfolio-dark text-portfolio-dark hover:bg-portfolio-dark hover:text-portfolio-text-light'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-portfolio-dark mb-4">
              How It Works
            </h2>
            <p className="text-xl text-portfolio-dark/70 max-w-2xl mx-auto">
              A simple, structured approach to accelerate your learning and career growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-portfolio-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-portfolio-text-light" />
              </div>
              <h3 className="text-xl font-medium text-portfolio-dark mb-2">
                Initial Consultation
              </h3>
              <p className="text-portfolio-dark/70">
                We discuss your goals, experience, and create a personalized learning plan
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-portfolio-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-portfolio-text-light" />
              </div>
              <h3 className="text-xl font-medium text-portfolio-dark mb-2">
                Regular Sessions
              </h3>
              <p className="text-portfolio-dark/70">
                Scheduled meetings for guidance, code reviews, and progress tracking
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-portfolio-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-portfolio-text-light" />
              </div>
              <h3 className="text-xl font-medium text-portfolio-dark mb-2">
                Hands-on Practice
              </h3>
              <p className="text-portfolio-dark/70">
                Real-world projects and challenges to build your portfolio and skills
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-portfolio-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-portfolio-text-light" />
              </div>
              <h3 className="text-xl font-medium text-portfolio-dark mb-2">
                Career Success
              </h3>
              <p className="text-portfolio-dark/70">
                Job placement assistance and ongoing support for your tech career
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-portfolio-dark mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-portfolio-dark/70 max-w-2xl mx-auto">
              Hear from mentees who have transformed their careers through our programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-portfolio-dark/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-portfolio-dark/10 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium text-portfolio-dark">{testimonial.name}</h4>
                    <p className="text-sm text-portfolio-dark/60">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-portfolio-dark/80 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-portfolio-dark/60">
                  Program: {testimonial.program}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-portfolio-dark text-portfolio-text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-portfolio-text-light/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards accelerating your tech career. Schedule a free consultation to discuss your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center px-8 py-4 bg-portfolio-text-light text-portfolio-dark font-medium rounded-lg hover:bg-portfolio-text-light/90 transition-colors duration-200"
            >
              Schedule Free Consultation
            </a>
            <a 
              href="https://calendly.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-portfolio-text-light/30 text-portfolio-text-light font-medium rounded-lg hover:bg-portfolio-text-light/10 transition-colors duration-200"
            >
              <Video className="mr-3 h-5 w-5" />
              Book Video Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentorship;
