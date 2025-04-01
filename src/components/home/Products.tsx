
import { useElementOnScreen } from '@/utils/animations';
import ProductCard from '@/components/ui/ProductCard';

const products = [
  {
    id: 1,
    title: 'Whole with skin',
    description: 'Finest quality premium whole grain with skin, carefully processed for perfect texture and flavor.',
    imageSrc: '/Whole-Dal-1.jpg',
  },
  {
    id: 2,
    title: 'Split with skin',
    description: "Carefully splited version of the whole urad dal, retaining the black outer layer, and cooks faster than the whole version.",
    imageSrc: '/Split-Dal-1.jpg',
  },
  {
    id: 3,
    title: 'Whole without skin',
    description: 'Whole dal with the black skin removed, resulting in a creamy white color and a milder flavor.',
    imageSrc: '/Whole-Dal-2.jpg',
  },
  {
    id: 4,
    title: 'Split without skin',
    description: 'split version of the whole urad dal without the black skin, resulting in a creamy white color and a milder flavor',
    imageSrc: 'Spint-Dal-2.jpg',
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
