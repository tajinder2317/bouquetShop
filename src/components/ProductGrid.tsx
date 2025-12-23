import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products, Product } from "@/data/products";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const displayProducts = products.map(({ id, name, price, image, category, description }) => ({
  id,
  name,
  price,
  image,
  category,
  description,
}));

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
          {displayProducts.map((product, index) => (
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
