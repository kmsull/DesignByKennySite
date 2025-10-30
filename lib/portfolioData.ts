export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  material: string;
  size: string;
  category: string;
  printTime?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Dragon Miniature',
    description: 'Highly detailed fantasy dragon miniature with intricate scales and wings. Perfect for tabletop gaming or display.',
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=800&h=800&fit=crop',
    material: 'PLA',
    size: '15cm height',
    category: 'Miniatures',
    printTime: '12 hours'
  },
  {
    id: '2',
    title: 'Custom Phone Stand',
    description: 'Ergonomic phone stand with adjustable angle and cable management. Modern minimalist design.',
    image: 'https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&h=800&fit=crop',
    material: 'PETG',
    size: '12cm x 8cm x 5cm',
    category: 'Functional',
    printTime: '6 hours'
  },
  {
    id: '3',
    title: 'Geometric Planter',
    description: 'Modern geometric planter with drainage hole. Perfect for succulents and small plants.',
    image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=800&h=800&fit=crop',
    material: 'PLA',
    size: '10cm diameter',
    category: 'Decorative',
    printTime: '8 hours'
  },
  {
    id: '4',
    title: 'Articulated Octopus',
    description: 'Fully articulated octopus toy that prints in place. No assembly required!',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop',
    material: 'PLA',
    size: '20cm length',
    category: 'Toys',
    printTime: '10 hours'
  },
  {
    id: '5',
    title: 'Desk Organizer',
    description: 'Multi-compartment desk organizer for pens, clips, and small office supplies.',
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&h=800&fit=crop',
    material: 'PETG',
    size: '20cm x 15cm x 8cm',
    category: 'Functional',
    printTime: '14 hours'
  },
  {
    id: '6',
    title: 'Benchy Boat',
    description: 'The classic 3D printing benchmark test. Perfect quality demonstration piece.',
    image: 'https://images.unsplash.com/photo-1609685032224-c19c29a5fcb6?w=800&h=800&fit=crop',
    material: 'PLA',
    size: '6cm x 3cm x 4cm',
    category: 'Demo',
    printTime: '2 hours'
  },
  {
    id: '7',
    title: 'Fidget Cube',
    description: 'Multi-sided fidget cube with various interactive elements. Great stress relief toy.',
    image: 'https://images.unsplash.com/photo-1625957146622-62e43b017dfd?w=800&h=800&fit=crop',
    material: 'PLA',
    size: '4cm cube',
    category: 'Toys',
    printTime: '5 hours'
  },
  {
    id: '8',
    title: 'Wall Mount Hooks',
    description: 'Set of decorative wall hooks with modern design. Perfect for keys, coats, or bags.',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=800&h=800&fit=crop',
    material: 'PETG',
    size: '8cm x 5cm',
    category: 'Functional',
    printTime: '4 hours each'
  },
  {
    id: '9',
    title: 'Lithophane Frame',
    description: 'Custom photo lithophane that glows when backlit. Amazing personalized gift.',
    image: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?w=800&h=800&fit=crop',
    material: 'White PLA',
    size: '15cm x 20cm',
    category: 'Decorative',
    printTime: '18 hours'
  },
  {
    id: '10',
    title: 'Spiral Vase',
    description: 'Elegant spiral vase printed in vase mode. Waterproof and functional.',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=800&fit=crop',
    material: 'PLA',
    size: '25cm height',
    category: 'Decorative',
    printTime: '10 hours'
  },
  {
    id: '11',
    title: 'Cable Management Clips',
    description: 'Set of cable clips to organize desk cables. Adhesive backing for easy installation.',
    image: 'https://images.unsplash.com/photo-1580982324113-a1e8b5f9f9e6?w=800&h=800&fit=crop',
    material: 'PETG',
    size: '3cm x 2cm',
    category: 'Functional',
    printTime: '1 hour each'
  },
  {
    id: '12',
    title: 'Custom Keychain',
    description: 'Personalized keychain with custom text and design. Great gift idea.',
    image: 'https://images.unsplash.com/photo-1582142306909-195724d33adc?w=800&h=800&fit=crop',
    material: 'PLA',
    size: '5cm x 3cm',
    category: 'Accessories',
    printTime: '2 hours'
  }
];
