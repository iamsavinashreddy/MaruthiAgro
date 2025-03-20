
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gold-50 p-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-soft">
          <span className="text-5xl font-bold text-gold-500">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-foreground">Page Not Found</h1>
        <p className="text-foreground/70 mb-8">
          The page you are looking for doesn't exist or has been moved. Please check the URL or go back to the homepage.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-white rounded-full px-6 py-3 font-medium transition-all"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
