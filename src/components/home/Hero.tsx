
import { useElementOnScreen } from '@/utils/animations';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { containerRef: titleRef, isVisible: isTitleVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const { containerRef: subtitleRef, isVisible: isSubtitleVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const { containerRef: ctaRef, isVisible: isCtaVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section 
      id="home"
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-200/40 to-green-100/30"></div>
        <img 
          src="https://images.unsplash.com/photo-1530364692703-dd4b0e4c4fde?q=80&w=2070"
          alt="Wheat field" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-3 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full">
            <p className="text-sm font-medium text-gold-800">
              Premium Quality Since 1975
            </p>
          </div>
          
          <h1 
            // @ts-ignore - titleRef is properly typed
            ref={titleRef}
            className={`heading-xl text-white mb-6 transition-all duration-1000 ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            Bringing Nature's Finest<br />
            <span className="text-gold-300">Grains to Your Table</span>
          </h1>
          
          <p 
            // @ts-ignore - subtitleRef is properly typed
            ref={subtitleRef}
            className={`text-lg md:text-xl text-white/80 max-w-2xl mb-8 transition-all duration-1000 delay-300 ${
              isSubtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            Maruthiagro.com has been providing premium quality food grains and flour 
            since 1975. We are committed to bringing the best agricultural products from 
            farm to your home.
          </p>
          
          <div 
            // @ts-ignore - ctaRef is properly typed
            ref={ctaRef}
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <a 
              href="#products" 
              className="btn bg-gold-500 hover:bg-gold-600 text-white rounded-full px-8 py-3 font-medium flex items-center justify-center"
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#about" 
              className="btn bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-full px-8 py-3 font-medium flex items-center justify-center"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
