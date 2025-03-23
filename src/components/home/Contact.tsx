
import { useElementOnScreen } from '@/utils/animations';
import { MapPin, Phone, Mail } from 'lucide-react';
import React from "react";

const Contact = () => {
  const { containerRef: contactRef, isVisible: isContactVisible } = useElementOnScreen<HTMLDivElement>({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const { containerRef: mapRef, isVisible: isMapVisible } = useElementOnScreen<HTMLDivElement>({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div id="contact" className="section">
      <div className="mb-12 text-center">
        <h2 className="heading-lg mb-4">Get In Touch</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          We'd love to hear from you. Contact us for any inquiries about our products, partnerships, or to place an order.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information - Now on the left */}
        <div 
          ref={contactRef}
          className={`bg-white rounded-2xl p-8 shadow-card border border-gold-100 transition-all duration-1000 h-full ${
            isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-2xl font-semibold text-green-800 mb-6">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="h-5 w-5 text-green-800" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">Our Location</h4>
                <p className="text-foreground/70">
                  Syno. 170, Back side of IFFCO kissan SEZ,<br />
                  Uchaguntapalem, Dagadarthi,<br />
                  Andhra Pradesh 524240, India
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="h-5 w-5 text-green-800" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">Phone</h4>
                <p className="text-foreground/70">
                  <a href="tel:+919959243663" className="hover:text-green-800 transition-colors">
                    +91 99592 43663
                  </a><br />
                  <a href="tel:+919700020201" className="hover:text-green-800 transition-colors">
                    +91 97000 20201
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="h-5 w-5 text-green-800" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">Email</h4>
                <p className="text-foreground/70">
                  <a href="mailto:info@maruthiagro.com" className="hover:text-green-800 transition-colors">
                    info@maruthiagro.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-5 rounded-xl border border-green-100">
            <h4 className="font-medium text-lg mb-3 text-green-800">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-foreground/70">Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-foreground/70">Saturday:</span>
                <span className="font-medium">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-foreground/70">Sunday:</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Map - Now on the right */}
        <div 
          ref={mapRef}
          className={`transition-all duration-1000 delay-300 rounded-2xl overflow-hidden shadow-card border border-gold-100 h-full min-h-[400px] ${
            isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6455099602035!2d79.9624333793457!3d14.619258799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8fa8c32b4247%3A0xea458ab89b0d57b7!2sMaruthi%20Agro%20Products!5e0!3m2!1sen!2sus!4v1742611032867!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Maruthi Agro Location"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
