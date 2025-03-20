
import { useElementOnScreen } from '@/utils/animations';
import ProductCard from '@/components/ui/ProductCard';

const products = [
  {
    id: 1,
    title: 'Premium Rice',
    description: 'Finest quality premium rice grain, carefully processed for perfect texture and flavor.',
    imageSrc: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070',
  },
  {
    id: 2,
    title: 'Wheat Flour',
    description: "Stone-ground wheat flour that's perfect for all your baking needs.",
    imageSrc: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13ee?q=80&w=1964',
  },
  {
    id: 3,
    title: 'Organic Pulses',
    description: 'Naturally grown pulses that are rich in protein and essential nutrients.',
    imageSrc: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=2056',
  },
  {
    id: 4,
    title: 'Specialty Grains',
    description: 'Specialty grains for the health-conscious consumer, packed with benefits.',
    imageSrc: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1974',
  },
];

const Products = () => {
  const { containerRef: titleRef, isVisible: isTitleVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section id="products" className="section bg-gold-50">
      <div className="text-center mb-16">
        <p className="text-gold-600 text-sm font-semibold tracking-wider uppercase mb-2">
          Our Offerings
        </p>
        <h2 
          // @ts-ignore - titleRef is properly typed
          ref={titleRef}
          className={`heading-lg mx-auto transition-all duration-700 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Premium Quality <span className="text-green-600">Food Products</span>
        </h2>
        <div 
          className={`mx-auto w-24 h-1 bg-gold-400 mt-5 transition-all duration-700 delay-300 ${
            isTitleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        ></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageSrc={product.imageSrc}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
