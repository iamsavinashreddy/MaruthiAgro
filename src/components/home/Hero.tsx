
import { useElementOnScreen } from '@/utils/animations';
import { ArrowRight } from 'lucide-react';
import { images } from "../../assets/images";

const Hero = () => {
  const { containerRef: titleRef, isVisible: isTitleVisible } = useElementOnScreen<HTMLHeadingElement>({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const { containerRef: subtitleRef, isVisible: isSubtitleVisible } = useElementOnScreen<HTMLParagraphElement>({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const { containerRef: ctaRef, isVisible: isCtaVisible } = useElementOnScreen<HTMLDivElement>({
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
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/40 to-green-800/30"></div>
        <img 
          src={images.hero}
          alt="Maruthi Agro Banner" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-green-800/20"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-3 px-3 py-1 bg-yellow-400/90 backdrop-blur-sm rounded-full">
            <p className="text-sm font-medium text-green-950">
              Premium Quality Since 2002
            </p>
          </div>
          
          <h1 
            ref={titleRef}
            className={`heading-xl text-white mb-6 transition-all duration-1000 ${
              isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            Bringing Nature's Finest<br />
            <span className="text-yellow-400">Grains to Your Table</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className={`text-lg md:text-xl text-white/80 max-w-2xl mb-8 transition-all duration-1000 delay-300 ${
              isSubtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            MARUTHI Agro has been providing premium quality food grains  
            since 2002. We are committed to bringing the best agricultural products from 
            farm to your home.
          </p>
          
          <div 
            ref={ctaRef}
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <a 
              href="#products" 
              className="btn bg-yellow-400 hover:bg-yellow-500 text-green-950 rounded-full px-8 py-3 font-medium flex items-center justify-center"
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#about" 
              className="btn bg-green-800/80 backdrop-blur-sm hover:bg-green-800 text-white border border-white/30 rounded-full px-8 py-3 font-medium flex items-center justify-center"
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
