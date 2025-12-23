import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <section className="py-12 border-t border-border">
      <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
        You May Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/product/${product.id}`}
              className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-hover transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                  {product.name}
                </h3>
                <p className="text-primary font-semibold mt-2">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
