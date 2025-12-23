import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import bouquetRomance from "@/assets/bouquet-romance.jpg";
import bouquetSpring from "@/assets/bouquet-spring.jpg";
import bouquetElegance from "@/assets/bouquet-elegance.jpg";
import bouquetTropical from "@/assets/bouquet-tropical.jpg";
import bouquetClassic from "@/assets/bouquet-classic.jpg";
import bouquetWildflower from "@/assets/bouquet-wildflower.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Blushing Romance",
    price: 65.00,
    image: bouquetRomance,
    category: "Romantic",
    description: "Soft pink and white roses with delicate baby's breath, perfect for expressing love.",
  },
  {
    id: 2,
    name: "Spring Awakening",
    price: 55.00,
    image: bouquetSpring,
    category: "Seasonal",
    description: "Fresh tulips and daffodils celebrating the vibrant colors of spring.",
  },
  {
    id: 3,
    name: "Pure Elegance",
    price: 85.00,
    image: bouquetElegance,
    category: "Wedding",
    description: "Luxurious white peonies with eucalyptus for an elegant, timeless arrangement.",
  },
  {
    id: 4,
    name: "Tropical Paradise",
    price: 75.00,
    image: bouquetTropical,
    category: "Exotic",
    description: "Bold birds of paradise and anthuriums bringing island vibes to any space.",
  },
  {
    id: 5,
    name: "Classic Red Roses",
    price: 70.00,
    image: bouquetClassic,
    category: "Classic",
    description: "A timeless dozen of deep red roses symbolizing love and passion.",
  },
  {
    id: 6,
    name: "Meadow Dreams",
    price: 45.00,
    image: bouquetWildflower,
    category: "Rustic",
    description: "Charming wildflowers and lavender in a rustic mason jar arrangement.",
  },
];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  return (
    <section id="shop" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sage-light font-medium tracking-widest uppercase text-sm mb-4">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            Handcrafted with Love
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each bouquet is carefully designed by our expert florists using the freshest seasonal blooms.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;