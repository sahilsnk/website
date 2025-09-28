import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-portfolio-light flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-portfolio-dark mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-portfolio-dark mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-portfolio-dark/70 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-portfolio-dark text-portfolio-text-light font-medium rounded-lg hover:bg-portfolio-dark/90 transition-colors duration-200"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-portfolio-dark text-portfolio-dark font-medium rounded-lg hover:bg-portfolio-dark hover:text-portfolio-text-light transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
