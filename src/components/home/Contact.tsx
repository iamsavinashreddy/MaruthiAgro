
import { useElementOnScreen } from '@/utils/animations';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const { containerRef: founderRef, isVisible: isFounderVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const { containerRef: mapRef, isVisible: isMapVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div 
          // @ts-ignore - founderRef is properly typed
          ref={founderRef}
          className={`bg-white rounded-2xl p-8 shadow-card border border-gold-100 transition-all duration-1000 ${
            isFounderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="heading-md mb-6">Meet Our Founder</h2>
          
          <div className="flex flex-col items-center mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gold-200 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1553867669-5d6ef15ffa4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                alt="Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-green-800">Mr. Rajesh Kumar</h3>
            <p className="text-sm text-gold-600 font-medium">Founder & CEO</p>
          </div>
          
          <p className="paragraph mb-6">
            With over 45 years of experience in the agricultural industry, Mr. Rajesh Kumar founded Maruthi Agro in 1975 with a mission to bring premium quality food products to every Indian household.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                <Phone className="h-4 w-4 text-gold-600" />
              </div>
              <p className="text-foreground/70">
                <a href="tel:+911234567890" className="hover:text-gold-600 transition-colors">
                  +91 1234 567 890
                </a>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                <Mail className="h-4 w-4 text-gold-600" />
              </div>
              <p className="text-foreground/70">
                <a href="mailto:founder@maruthiagro.com" className="hover:text-gold-600 transition-colors">
                  founder@maruthiagro.com
                </a>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 w-4 text-gold-600" />
              </div>
              <p className="text-foreground/70">
                123 Mill Road, Grain Valley<br />
                Punjab, India 123456
              </p>
            </div>
          </div>
        </div>
        
        <div 
          // @ts-ignore - mapRef is properly typed
          ref={mapRef}
          className={`transition-all duration-1000 delay-300 h-96 rounded-2xl overflow-hidden shadow-card border border-gold-100 ${
            isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.673346178086!2d77.1053566744039!3d28.714345582097936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a47a1365d%3A0xe30b562347e202df!2sIndian%20Agricultural%20Research%20Institute!5e0!3m2!1sen!2sin!4v1700156246201!5m2!1sen!2sin"
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
    </section>
  );
};

export default Contact;
