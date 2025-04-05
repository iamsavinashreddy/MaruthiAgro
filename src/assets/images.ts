
export const images = {
  logo: "https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/ma-logo-1b.png",
  hero: "https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/MA-hero-1a.jpeg",
  products: {
    prod1: "https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/whole-dal-1.png",
    prod2: "https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/split-dal-1a.png",
    prod3: "https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/whole-dal-2.png",
    prod4: "https://raw.githubusercontent.com/iamsavinashreddy/vrbest-group/main/Img/split-dal-2.png",
  },
  about: "/about.jpg",
  grain: "/grain.jpg",
  mill: "/mill.jpg",
  team: "/team.jpg",
  placeholder: "https://placehold.co/600x400/F5C33B/ffffff",
};

// Function to get a general image URL
export const getImageUrl = (name: keyof Omit<typeof images, 'products'>): string => {
  return images[name] as string;
};

// Function to get a product image URL
export const getProductImage = (name: keyof typeof images.products): string => {
  return images.products[name] ?? images.placeholder;
};
