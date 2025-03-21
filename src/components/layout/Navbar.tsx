
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        isScrolled ? 'py-3 glass shadow-soft' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <img 
          src={logo}
          alt="Maruthi Agro Logo" 
          className="w-full h-full object-contain rounded-lg"
        />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn btn-primary rounded-full"
            >
              Get in Touch
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-medium transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-4">
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-yellow-400 transition-colors duration-200 text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary rounded-full mt-2 w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
