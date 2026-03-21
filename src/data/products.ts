export type Product = {
  id: string;
  name: string;
  category: 'necklace' | 'ring' | 'saree' | 'bracelet';
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  description: string;
  colors: string[];
  stock: number;
  image: string;
  accent: string;
  tags: string[];
};

export const products: Product[] = [
  {
    id: 'rose-gold-pendant',
    name: 'Rose Gold Pendant – Perfect for Every Occasion',
    category: 'necklace',
    price: 3499,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 127,
    description: 'A luminous rose-gold pendant designed for festive evenings, boardroom grace, and timeless gifting. Crafted with premium plating, heirloom-inspired detailing, and a lightweight silhouette for all-day luxury.',
    colors: ['#b76e79', '#d4af37', '#f5f1e8'],
    stock: 3,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
    accent: 'warm',
    tags: ['Trending This Week', 'Free Delivery in Mumbai', 'Verified Luxury']
  },
  {
    id: 'midnight-polki-set',
    name: 'Midnight Polki Set – Statement Soirée Edit',
    category: 'ring',
    price: 5499,
    originalPrice: 8999,
    rating: 4.9,
    reviews: 88,
    description: 'Art-directed for intimate celebrations and grand wedding edits, this cool-toned polki ensemble balances mirror-finish brilliance with couture polish.',
    colors: ['#c3d4ff', '#d4af37', '#1a1a1a'],
    stock: 6,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    accent: 'cool',
    tags: ['Limited Edition', 'Studio Finish', 'Luxury Pick']
  },
  {
    id: 'banarasi-drape',
    name: 'Jewel Tone Banarasi Drape – Celebration Signature',
    category: 'saree',
    price: 7499,
    originalPrice: 11999,
    rating: 4.7,
    reviews: 143,
    description: 'A richly woven saree silhouette with elevated jewel tones, paired with couture finishing, festive shine, and a fluid fall that flatters every celebration calendar.',
    colors: ['#6a0dad', '#0f766e', '#d4af37'],
    stock: 4,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    accent: 'jewel',
    tags: ['Festival Favourite', 'HNI Edit', 'Bestseller']
  },
  {
    id: 'diamond-bracelet',
    name: 'Diamond Glow Bracelet – Cocktail Luxe',
    category: 'bracelet',
    price: 4299,
    originalPrice: 6799,
    rating: 4.8,
    reviews: 74,
    description: 'A refined bracelet with premium sparkle, holographic shine, and occasion versatility for elevated everyday wear.',
    colors: ['#d4af37', '#f5f1e8', '#b76e79'],
    stock: 8,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    accent: 'warm',
    tags: ['Cocktail Luxe', 'Gift-Ready', 'Secure Checkout']
  }
];
