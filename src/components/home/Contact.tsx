
import { useElementOnScreen } from '@/utils/animations';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { containerRef: formRef, isVisible: isFormVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const { containerRef: infoRef, isVisible: isInfoVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div 
          // @ts-ignore - formRef is properly typed
          ref={formRef}
          className={`bg-white rounded-2xl p-8 shadow-card border border-gold-100 transition-all duration-1000 ${
            isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="heading-md mb-2">Get In Touch</h2>
          <p className="text-foreground/70 mb-6">
            We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
          </p>
          
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2.5 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2.5 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2.5 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all"
                placeholder="How can we help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2.5 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all resize-none"
                placeholder="Tell us about your inquiry..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-medium transition-all flex items-center justify-center group"
            >
              Send Message
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
        
        <div 
          // @ts-ignore - infoRef is properly typed
          ref={infoRef}
          className={`transition-all duration-1000 delay-300 ${
            isInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-gold-600 text-sm font-semibold tracking-wider uppercase mb-2">
            Contact Information
          </p>
          <h2 className="heading-lg mb-6">
            We're Here To <span className="text-green-600">Help You</span>
          </h2>
          
          <p className="paragraph mb-8">
            Whether you have a question about our products, want to place a bulk order, or just want to say hello, we're always happy to hear from you.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-gold-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Visit Us</h4>
                <p className="text-foreground/70">
                  123 Mill Road, Grain Valley<br />
                  Punjab, India 123456
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-gold-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Call Us</h4>
                <p className="text-foreground/70">
                  <a href="tel:+911234567890" className="hover:text-gold-600 transition-colors">
                    +91 1234 567 890
                  </a><br />
                  <a href="tel:+911234567891" className="hover:text-gold-600 transition-colors">
                    +91 1234 567 891
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-gold-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email Us</h4>
                <p className="text-foreground/70">
                  <a href="mailto:info@lakshmidallmill.com" className="hover:text-gold-600 transition-colors">
                    info@lakshmidallmill.com
                  </a><br />
                  <a href="mailto:sales@lakshmidallmill.com" className="hover:text-gold-600 transition-colors">
                    sales@lakshmidallmill.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
            <p className="text-green-700 text-sm">
              <strong>Business Hours:</strong> Monday to Saturday, 9:00 AM to 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
