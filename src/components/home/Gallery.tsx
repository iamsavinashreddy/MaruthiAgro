import { useState } from 'react';
import { useElementOnScreen } from '@/utils/animations';
import { Image, X } from 'lucide-react'; // Updated import
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'factory' | 'product';
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560532803-22bc1f7202e4?q=80&w=1974",
    alt: "Factory interior with machines",
    category: 'factory'
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1626078272534-1c063a8dfe5b?q=80&w=1960",
    alt: "Rice processing line",
    category: 'factory'
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070",
    alt: "Rice grains close-up",
    category: 'product'
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1586201375761-83865001e8c7?q=80&w=2070",
    alt: "Wheat flour production",
    category: 'factory'
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1622542086073-346a1f40ca65?q=80&w=2187",
    alt: "Organic flour packaging",
    category: 'product'
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
    alt: "Assorted food grains",
    category: 'product'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <div 
      ref={containerRef}
      className={`transition-all duration-1000 mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="text-center mb-8">
        <p className="text-gold-600 text-sm font-semibold tracking-wider uppercase mb-2 flex items-center justify-center gap-1">
          <Image size={16} /> {/* Updated icon */}
          <span>Our Gallery</span>
        </p>
        <h2 className="heading-md">Glimpses of our Facility & Products</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {galleryImages.map((image) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <div 
                className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl p-1 bg-transparent border-0">
              <div className="relative">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm text-white rounded-b-lg">
                  <p className="text-sm md:text-base">{image.alt}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
