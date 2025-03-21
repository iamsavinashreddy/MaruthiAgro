
import { useElementOnScreen } from '@/utils/animations';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const { containerRef: foundersRef, isVisible: isFoundersVisible } = useElementOnScreen({
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div 
          // @ts-ignore - foundersRef is properly typed
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
                <h3 className="text-xl font-semibold text-green-800 text-center">Mr. Rajesh Kumar</h3>
                <p className="text-sm text-gold-600 font-medium mb-4 text-center">Founder & CEO</p>
                
                <p className="text-sm text-foreground/70 mb-4 text-center">
                  With over 45 years of experience in the agricultural industry, Mr. Rajesh founded Maruthi Agro in 1975 with a vision to bring premium quality food products to every Indian household.
                </p>
                
                <div className="space-y-3 w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3.5 w-3.5 text-gold-600" />
                    </div>
                    <p className="text-sm text-foreground/70">
                      <a href="tel:+911234567890" className="hover:text-gold-600 transition-colors">
                        +91 1234 567 890
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
                <h3 className="text-xl font-semibold text-green-800 text-center">Dr. Alok Sharma</h3>
                <p className="text-sm text-gold-600 font-medium mb-4 text-center">Co-Founder & COO</p>
                
                <p className="text-sm text-foreground/70 mb-4 text-center">
                  Dr. Alok brings 30 years of expertise in agricultural sciences and business operations. He joined Maruthi Agro in 1990 and has been instrumental in modernizing our production practices.
                </p>
                
                <div className="space-y-3 w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3.5 w-3.5 text-gold-600" />
                    </div>
                    <p className="text-sm text-foreground/70">
                      <a href="tel:+911234567891" className="hover:text-gold-600 transition-colors">
                        +91 1234 567 891
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
              123 Mill Road, Grain Valley, Punjab, India 123456
            </p>
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
