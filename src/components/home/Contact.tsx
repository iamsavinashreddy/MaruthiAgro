
import { useElementOnScreen } from '@/utils/animations';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import React from "react";

const Contact = () => {
  const { containerRef: foundersRef, isVisible: isFoundersVisible } = useElementOnScreen<HTMLDivElement>({
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div 
          ref={foundersRef}
          className={`bg-white rounded-2xl p-8 shadow-card border border-gold-100 transition-all duration-1000 ${
            isFoundersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="heading-md mb-8">Our Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder */}
            <Card className="border-gold-100">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold-200 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1553867669-5d6ef15ffa4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                    alt="Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-800 text-center"> Pruthvi Pulicharla</h3>
                <p className="text-sm text-gold-600 font-medium mb-4 text-center">Founder</p>
                
                <p className="text-sm text-foreground/70 mb-4 text-center">
                 Mr Pruthvi is the visionary leader, a powerhouse in the construction and infrastructure industry. With over 15 years of experience, he has been at the forefront of delivering innovative and high-quality projects that shape skylines and strengthen communities. Committed to excellence, he continues to drive growth, sustainability, and progress in the industry.
                </p>
                
                <div className="space-y-3 w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3.5 w-3.5 text-gold-600" />
                    </div>
                    <p className="text-sm text-foreground/70">
                      <a href="tel:+911234567890" className="hover:text-gold-600 transition-colors">
                        +91 99592 43663
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-3.5 w-3.5 text-gold-600" />
                    </div>
                    <p className="text-sm text-foreground/70">
                      <a href="mailto:founder@maruthiagro.com" className="hover:text-gold-600 transition-colors">
                        founder@maruthiagro.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Co-founder */}
            <Card className="border-gold-100">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold-200 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Co-Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-green-800 text-center">Mr Hanuman Batchu</h3>
                <p className="text-sm text-gold-600 font-medium mb-4 text-center">Managing Partner</p>
                
                <p className="text-sm text-foreground/70 mb-4 text-center">
                  Hanuman is bringing expertise in accounting and financial management. With a keen eye for financial strategy and over 15 years of experience, he ensures the company's fiscal health, operational efficiency, and sustainable growth.
                </p>
                
                <div className="space-y-3 w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3.5 w-3.5 text-gold-600" />
                    </div>
                    <p className="text-sm text-foreground/70">
                      <a href="tel:+911234567891" className="hover:text-gold-600 transition-colors">
                        +91 97000 20201
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-3.5 w-3.5 text-gold-600" />
                    </div>
                    <p className="text-sm text-foreground/70">
                      <a href="mailto:cofounder@maruthiagro.com" className="hover:text-gold-600 transition-colors">
                        cofounder@maruthiagro.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-foreground/70">
              Our headquarters is located at:<br />
              Syno. 170, Back side of IFFCO kissan SEZ, Uchaguntapalem, Dagadarthi, Andhra Pradesh 524240, India
            </p>
          </div>
        </div>
        
        <div 
          ref={mapRef}
          className={`transition-all duration-1000 delay-300 h-96 rounded-2xl overflow-hidden shadow-card border border-gold-100 ${
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
