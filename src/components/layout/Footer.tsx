
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="text-xl font-bold">Lakshmi Dall Mill</span>
            </div>
            <p className="text-foreground/70 text-sm max-w-xs">
              Premium quality food grains and flour since 1975. Committed to bringing the best agricultural products to your table.
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
                  href="mailto:info@lakshmidallmill.com" 
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  info@lakshmidallmill.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gold-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Lakshmi Dall Mill. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
