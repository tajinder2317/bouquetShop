import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  index: number;
}

const ProductCard = ({ product, onAddToCart, index }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.article
      className="group relative bg-card p-3 rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image Container */}

      <Link
        to={`/product/${product.id}`}
        className="block relative aspect-square overflow-hidden"
      >
        <div className=" overflow-hidden rounded-tl-[12px] rounded-tr-[12px] bg-white/10 h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-tl-[12px] rounded-tr-[12px]"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 rounded-tl-[12px] rounded-tr-[12px]" />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
          {product.category}
        </span>
      </Link>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsLiked(!isLiked);
        }}
        className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`h-5 w-5 transition-colors ${
            isLiked ? "fill-accent text-accent" : "text-foreground/60"
          }`}
        />
      </button>

      {/* Quick Add Button */}
      <div className="absolute bottom-[calc(100%-theme(spacing.1)-theme(spacing.square))] left-4 right-4 pointer-events-none m-2">
        <Button
          variant="hero"
          size="lg"
          className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(product);
          }}
        >
          <ShoppingBag className="h-3 w-3 mr-2" />
          Add to Cart
        </Button>
      </div>

      {/* Content */}
      <Link to={`/product/${product.id}`} className="block p-5 mt-10">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">
            Rs.{product.price.toFixed(2)}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="md:hidden"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductCard;
