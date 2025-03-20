
import { useElementOnScreen } from '@/utils/animations';
import { useState } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
}

const ProductCard = ({ title, description, imageSrc, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  const getAnimationDelay = () => {
    return `${index * 100}ms`;
  };

  return (
    <div
      // @ts-ignore - containerRef is properly typed
      ref={containerRef}
      className={`rounded-2xl overflow-hidden h-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: getAnimationDelay() }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>
      <div className="p-6 bg-white border border-gold-100">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm">{description}</p>
        <div className={`w-12 h-1 bg-gold-500 mt-4 transition-all duration-500 ${
          isHovered ? 'w-20' : 'w-12'
        }`}></div>
      </div>
    </div>
  );
};

export default ProductCard;
