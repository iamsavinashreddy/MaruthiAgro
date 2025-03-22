
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from "../../assets/images"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-gradient-to-r from-yellow-400/90 to-green-800/90 backdrop-blur-md shadow-soft' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <img 
              src={images.logo}
              alt="Maruthi Agro Logo" 
              className="logo-container rounded-md"
            />
          </Link>

          {/* Desktop Navigation - Now with bright white menu items
          "text-white hover:text-yellow-400 transition-colors duration-200 text-base font-medium px-2 py-1 rounded-md hover:bg-white/10"

           */}
          <nav className="hidden md:flex items-center gap-10 mx-auto">
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className= "bg-green-800 border-2 border-yellow-400 text-white hover:text-yellow-400 transition-colors duration-200 text-base font-medium px-2 py-1 rounded-md hover:bg-green-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block w-[200px]">
            {/* Empty div to balance the layout and keep nav centered */}
          </div>
          
          {/* Mobile menu toggle button - Made larger and more visible */}
          <button
            className={`md:hidden text-white p-2 rounded-md transition-colors focus:outline-none ${
              isScrolled ? 'bg-gradient-to-r from-white/20 to-white/30 hover:from-white/30 hover:to-white/40' : 'glass hover:bg-white/20'
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
          
          {/* Improved Mobile Menu - with white text */}
          <div
            className={`md:hidden fixed top-[60px] left-0 right-0 bottom-0 transition-all duration-300 ease-in-out ${
              isScrolled ? 'bg-gradient-to-b from-yellow-400/95 to-green-800/95' : 'bg-gradient-to-b from-yellow-500/90 to-green-700/90'
            } ${
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-6">
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-yellow-100 transition-colors duration-200 text-xl font-medium py-4 px-4 border-b border-white/10 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
    </header>
  );
};

export default Navbar;
