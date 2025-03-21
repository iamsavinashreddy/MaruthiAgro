export const images = {
  logo: "../logo-1.jpeg",
  hero: "../hero-1.jpeg",
  products: {
    rice: "/rice.jpg",
    flour: "/flour.jpg",
    wheat: "/wheat.jpg",
    grains: "/grains.jpg",
  },
  about: "/about.jpg",
  grain: "/grain.jpg",
  mill: "/mill.jpg",
  team: "/team.jpg",
  placeholder: "https://placehold.co/600x400/F5C33B/ffffff",
};

// Function to get a general image URL
export const getImageUrl = (name: keyof typeof images): string => {
  return images[name] ?? images.placeholder;
};

// Function to get a product image URL
export const getProductImage = (name: keyof typeof images.products): string => {
  return images.products[name] ?? images.placeholder;
};
