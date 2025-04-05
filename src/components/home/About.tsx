import { useElementOnScreen } from '@/utils/animations';
import { Check, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Gallery from './Gallery';

const About = () => {
  const { containerRef: textRef, isVisible: isTextVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const { containerRef: imageRef, isVisible: isImageVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  const { containerRef: leadershipRef, isVisible: isLeadershipVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section id="about" className="section py-16">
      {/* Company Info Section */}
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center mb-24">
          <div 
            ref={textRef}
            className={`w-full md:w-3/5 transition-all duration-1000 ${
              isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="text-gold-600 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Story
            </p>
            <h2 className="heading-lg mb-6">
              <span className="text-green-600">Trusted</span> Food Grain Partner Since 2002
            </h2>
            
            <p className="paragraph mb-6">
              MARUTHI Ago has been serving the community with premium quality food products for over four decades. Our journey began with a simple vision - to provide the purest and most nutritious food grains to every household.
            </p>
            
            <p className="paragraph mb-8">
              Today, we are a renowned name in the industry, recognized for our commitment to quality, sustainability, and customer satisfaction. Our state-of-the-art processing facility combines traditional wisdom with modern technology to ensure that every grain that leaves our mill meets the highest standards.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                'Premium Quality Products',
                'Modern Processing Techniques',
                'Sustainable Farming Practices',
                'Rigorous Quality Control',
                'Direct Farm Sourcing',
                'Customer Satisfaction Focus'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="btn btn-secondary rounded-full"
            >
              Connect With Us
            </a>
          </div>
          
          <div 
            ref={imageRef}
            className={`w-full md:w-2/5 relative transition-all duration-1000 delay-300 ${
              isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-card hidden md:block max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 font-bold">
                  23+
                </div>
                <p className="font-medium">Years of Excellence</p>
              </div>
              <p className="text-sm text-foreground/70">
                Trusted by farmers and customers for over four decades of exceptional service and quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section - Added between About and Leadership */}
      <Gallery />

      {/* Leadership Section - Centered and Responsive */}
      <div 
        ref={leadershipRef}
        className={`bg-white rounded-2xl p-8 shadow-card border border-gold-100 transition-all duration-1000 mb-16 max-w-5xl mx-auto ${
          isLeadershipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="heading-md mb-8 text-center">Our Leadership</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
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
              <h3 className="text-xl font-semibold text-green-800 text-center">Pruthvi Pulicharla</h3>
              <p className="text-sm text-gold-600 font-medium mb-4 text-center">Founder</p>
              
              <p className="text-sm text-foreground/70 mb-4 text-center">
                Mr Pruthvi is the visionary leader, a powerhouse in the construction and infrastructure industry. With over 15 years of experience, he has been at the forefront of delivering innovative and sustainable solutions.
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
                Hanuman is bringing expertise in accounting and financial management. With a keen eye for financial strategy and over 15 years of experience, he ensures the company's fiscal health and growth.
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

          {/* Third Leadership Position (Hidden) */}
          <Card className="border-gold-100 hidden">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold-200 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Third Leadership Position" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-800 text-center">Future Leader</h3>
              <p className="text-sm text-gold-600 font-medium mb-4 text-center">Operations Director</p>
              
              <p className="text-sm text-foreground/70 mb-4 text-center">
                This is a placeholder for a future leadership position. With deep industry knowledge and strategic vision, this leader will drive operational excellence and innovation across the company.
              </p>
              
              <div className="space-y-3 w-full">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-gold-600" />
                  </div>
                  <p className="text-sm text-foreground/70">
                    <a href="tel:+911234567892" className="hover:text-gold-600 transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-3.5 w-3.5 text-gold-600" />
                  </div>
                  <p className="text-sm text-foreground/70">
                    <a href="mailto:operations@maruthiagro.com" className="hover:text-gold-600 transition-colors">
                      operations@maruthiagro.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
