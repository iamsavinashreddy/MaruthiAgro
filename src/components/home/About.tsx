
import { useElementOnScreen } from '@/utils/animations';
import { Check } from 'lucide-react';

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

  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div 
          // @ts-ignore - textRef is properly typed
          ref={textRef}
          className={`transition-all duration-1000 ${
            isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <p className="text-gold-600 text-sm font-semibold tracking-wider uppercase mb-2">
            Our Story
          </p>
          <h2 className="heading-lg mb-6">
            <span className="text-green-600">Trusted</span> Food Grain Partner Since 1975
          </h2>
          
          <p className="paragraph mb-6">
            Lakshmi Dall Mill has been serving the community with premium quality food products for over four decades. Our journey began with a simple vision - to provide the purest and most nutritious food grains to every household.
          </p>
          
          <p className="paragraph mb-8">
            Today, we are a renowned name in the industry, recognized for our commitment to quality, sustainability, and customer satisfaction. Our state-of-the-art processing facility combines traditional wisdom with modern technology to ensure that every grain that leaves our mill meets the highest standards.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              'Premium Quality Products',
              'Modern Processing Techniques',
              'Sustainable Farming Practices',
              'Rigorous Quality Control',
              'Direct Farm Sourcing',
              'Customer Satisfaction Focus'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
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
          // @ts-ignore - imageRef is properly typed
          ref={imageRef}
          className={`relative transition-all duration-1000 delay-300 ${
            isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560532803-22bc1f7202e4?q=80&w=1974"
              alt="Mill workers harvesting wheat" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-card hidden md:block max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 font-bold">
                45+
              </div>
              <p className="font-medium">Years of Excellence</p>
            </div>
            <p className="text-sm text-foreground/70">
              Trusted by farmers and customers for over four decades of exceptional service and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
