import { motion } from "framer-motion";
import { Leaf, Heart, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "We partner with local farms and eco-conscious growers to bring you the freshest, most sustainable blooms.",
  },
  {
    icon: Heart,
    title: "Crafted with Care",
    description: "Every arrangement is handcrafted by our passionate florists who pour love into every petal.",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Order by 2pm for same-day delivery. We ensure your flowers arrive fresh and beautiful.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "Not happy with your bouquet? We'll replace it or refund you, no questions asked.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
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
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
            Our Passion for Flowers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Since 2010, Bloom & Petal has been bringing joy to our community through the timeless beauty of flowers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card p-8 rounded-2xl shadow-soft text-center group hover:shadow-card transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          className="mt-20 bg-card rounded-3xl p-8 md:p-12 shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
              "Flowers are the poetry of nature"
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              What started as a small family flower stand has blossomed into a beloved local florist. 
              We believe that flowers have the power to transform any moment—from a simple "thinking of you" 
              to life's most cherished celebrations. Every bouquet we create carries our dedication to beauty, 
              quality, and the simple joy that fresh flowers bring.
            </p>
            <p className="text-sage-light font-medium italic">
              — The Bloom & Petal Family
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;