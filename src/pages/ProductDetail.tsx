import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Heart, Minus, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById, getRelatedProducts } from "@/data/products";
import ReviewSection from "@/components/ReviewSection";
import RelatedProducts from "@/components/RelatedProducts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const product = getProductById(Number(id));
  const relatedProducts = getRelatedProducts(Number(id), 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Product Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
        },
      ];
    });
    toast.success(`${product.name} added to cart`, {
      description: `Quantity: ${quantity}`,
    });
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from cart");
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/?checkout=true");
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen bg-background">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Breadcrumb */}
        <Link
          to="/#shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="absolute top-4 right-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={`h-6 w-6 transition-colors ${
                  isLiked ? "fill-accent text-accent" : "text-foreground/60"
                }`}
              />
            </button>
            <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-sm font-medium px-4 py-2 rounded-full">
              {product.category}
            </span>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <p className="text-3xl font-semibold text-primary mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {product.fullDescription}
            </p>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What's Included
              </h3>
              <ul className="space-y-2">
                {product.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Care Instructions */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Care Instructions
              </h3>
              <ul className="space-y-2">
                {product.careInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="mt-auto space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <Button
                  variant="hero"
                  size="xl"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Free delivery on orders over $75
              </p>
            </div>
          </motion.div>
        </div>

        {/* Reviews */}
        <ReviewSection />

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      <Toaster position="bottom-right" />
    </main>
  );
};

export default ProductDetail;
