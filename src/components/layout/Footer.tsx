
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gold-50 border-t border-gold-100">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
        {/* Hidden sections for future use */}
        <div className="hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <span className="text-xl font-bold">Maruthiagro.com</span>
              </div>
              <p className="text-foreground/70 text-sm max-w-xs">
                Bringing Nature's Finest Grains to your table. MARUTHI Agro has been providing premium quality food grains since 2002. We are committed to bringing the best agricultural products from farm to your home.
              </p>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center transition-colors hover:bg-gold-200"
                  aria-label="Facebook"
                >
                  <Facebook size={16} className="text-gold-800" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center transition-colors hover:bg-gold-200"
                  aria-label="Instagram"
                >
                  <Instagram size={16} className="text-gold-800" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center transition-colors hover:bg-gold-200"
                  aria-label="Twitter"
                >
                  <Twitter size={16} className="text-gold-800" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center transition-colors hover:bg-gold-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="text-gold-800" />
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Products', 'About Us', 'Our Process', 'Quality'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                      className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight size={14} className="text-gold-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Products</h3>
              <ul className="space-y-2">
                {['Rice', 'Wheat Flour', 'Gram Flour', 'Pulses', 'Organic Grains'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#products" 
                      className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight size={14} className="text-gold-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/70">
                    123 Mill Road, Grain Valley<br />
                    Punjab, India 123456
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold-600 flex-shrink-0" />
                  <a 
                    href="tel:+911234567890" 
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    +91 1234 567 890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gold-600 flex-shrink-0" />
                  <a 
                    href="mailto:info@maruthiagro.com" 
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    info@maruthiagro.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Visible section - Copyright and Managed by */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Maruthiagro.com. All rights reserved.
          </p>
          <div className="text-foreground/60 text-sm">
            Managed by <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">VR Best Solutions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
