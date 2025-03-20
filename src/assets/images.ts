
// This is a placeholder file for image references
// In a real application, we would import actual image files

export const images = {
  logo: '/logo.svg',
  hero: '/hero.jpg',
  products: {
    rice: '/rice.jpg',
    flour: '/flour.jpg',
    wheat: '/wheat.jpg',
    grains: '/grains.jpg',
  },
  about: '/about.jpg',
  grain: '/grain.jpg',
  mill: '/mill.jpg',
  team: '/team.jpg',
  placeholder: 'https://placehold.co/600x400/F5C33B/ffffff',
};

// Placeholder functions to simulate image loading
export const getImageUrl = (name: string) => {
  if (name in images) {
    return images[name as keyof typeof images];
  }
  
  // Return placeholder image if actual image not found
  return images.placeholder;
};

export const getProductImage = (name: string) => {
  if (name in images.products) {
    return images.products[name as keyof typeof images.products];
  }
  
  // Return placeholder image if actual image not found
  return images.placeholder;
};
