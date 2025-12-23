import bouquetRomance from "@/assets/bouquet-romance.jpg";
import bouquetSpring from "@/assets/bouquet-spring.jpg";
import bouquetElegance from "@/assets/bouquet-elegance.jpg";
import bouquetTropical from "@/assets/bouquet-tropical.jpg";
import bouquetClassic from "@/assets/bouquet-classic.jpg";
import bouquetWildflower from "@/assets/bouquet-wildflower.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  fullDescription: string;
  careInstructions: string[];
  includes: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Blushing Romance",
    price: 65.00,
    image: bouquetRomance,
    category: "Romantic",
    description: "Soft pink and white roses with delicate baby's breath, perfect for expressing love.",
    fullDescription: "The Blushing Romance bouquet is a stunning arrangement that speaks the language of love. Featuring an exquisite blend of soft pink garden roses, pristine white spray roses, and delicate baby's breath, this bouquet creates an atmosphere of tender affection. Each stem is hand-selected for its perfect bloom and arranged by our master florists to create a cascading effect that's simply breathtaking.",
    careInstructions: [
      "Trim stems at an angle before placing in water",
      "Change water every 2-3 days",
      "Keep away from direct sunlight and heat",
      "Remove any wilted petals to extend bloom life",
    ],
    includes: [
      "12 Pink Garden Roses",
      "8 White Spray Roses",
      "Baby's Breath accents",
      "Eucalyptus greenery",
      "Elegant ribbon wrap",
    ],
  },
  {
    id: 2,
    name: "Spring Awakening",
    price: 55.00,
    image: bouquetSpring,
    category: "Seasonal",
    description: "Fresh tulips and daffodils celebrating the vibrant colors of spring.",
    fullDescription: "Welcome the season of renewal with our Spring Awakening bouquet. This cheerful arrangement captures the essence of spring with its vibrant tulips in shades of pink, yellow, and white, complemented by sunny daffodils and fresh greenery. Perfect for brightening any room or celebrating new beginnings, this bouquet brings the joy of a spring garden indoors.",
    careInstructions: [
      "Keep in cool water and change daily",
      "Tulips continue to grow in water - trim as needed",
      "Display in a cool location away from fruit",
      "These blooms are sensitive to ethylene gas",
    ],
    includes: [
      "10 Assorted Tulips",
      "6 Yellow Daffodils",
      "Spring greenery mix",
      "Decorative kraft wrap",
    ],
  },
  {
    id: 3,
    name: "Pure Elegance",
    price: 85.00,
    image: bouquetElegance,
    category: "Wedding",
    description: "Luxurious white peonies with eucalyptus for an elegant, timeless arrangement.",
    fullDescription: "Pure Elegance is the epitome of sophisticated beauty. This luxurious arrangement features lush white peonies at their peak bloom, accented with silver dollar eucalyptus and delicate ranunculus. Perfect for weddings, anniversaries, or any occasion that calls for understated luxury. The arrangement exudes a timeless grace that will complement any décor.",
    careInstructions: [
      "Peonies prefer cool water and temperatures",
      "Mist gently to maintain petal freshness",
      "Change water every other day",
      "Keep away from heating vents",
    ],
    includes: [
      "8 Premium White Peonies",
      "6 White Ranunculus",
      "Silver Dollar Eucalyptus",
      "Seeded Eucalyptus accents",
      "Satin ribbon finish",
    ],
  },
  {
    id: 4,
    name: "Tropical Paradise",
    price: 75.00,
    image: bouquetTropical,
    category: "Exotic",
    description: "Bold birds of paradise and anthuriums bringing island vibes to any space.",
    fullDescription: "Escape to the tropics with our Tropical Paradise arrangement. Featuring striking birds of paradise, vibrant anthuriums, and exotic tropical foliage, this bold bouquet makes a dramatic statement. The vivid oranges, reds, and greens transport you to a lush island paradise. Perfect for those who appreciate the extraordinary and want to make a lasting impression.",
    careInstructions: [
      "Tropical flowers love humidity - mist daily",
      "Keep in room temperature water",
      "Display in bright, indirect light",
      "These exotic blooms last 2-3 weeks with proper care",
    ],
    includes: [
      "3 Birds of Paradise",
      "4 Red Anthuriums",
      "Tropical Monstera leaves",
      "Ti leaves and palm fronds",
      "Tropical greenery mix",
    ],
  },
  {
    id: 5,
    name: "Classic Red Roses",
    price: 70.00,
    image: bouquetClassic,
    category: "Classic",
    description: "A timeless dozen of deep red roses symbolizing love and passion.",
    fullDescription: "Nothing says love quite like our Classic Red Roses. This timeless arrangement features a stunning dozen of premium long-stem red roses, each one carefully selected for its deep crimson color and perfect form. Accented with lush greenery and wrapped in elegant packaging, this bouquet is the ultimate expression of romance and devotion.",
    careInstructions: [
      "Cut stems diagonally under running water",
      "Use flower food provided for longer life",
      "Change water every 2 days",
      "Remove guard petals to reveal perfect blooms",
    ],
    includes: [
      "12 Premium Long-Stem Red Roses",
      "Italian Ruscus greenery",
      "Leather leaf fern",
      "Flower food packet",
      "Signature gift box",
    ],
  },
  {
    id: 6,
    name: "Meadow Dreams",
    price: 45.00,
    image: bouquetWildflower,
    category: "Rustic",
    description: "Charming wildflowers and lavender in a rustic mason jar arrangement.",
    fullDescription: "Meadow Dreams captures the whimsical beauty of a summer meadow. This charming arrangement features a delightful mix of wildflowers including daisies, lavender, chamomile, and cornflowers, all nestled in a rustic mason jar. The natural, gathered-from-the-garden aesthetic makes this perfect for farmhouse décor, casual celebrations, or simply bringing a touch of countryside charm to your home.",
    careInstructions: [
      "Top off water in mason jar daily",
      "Keep in a bright, airy location",
      "Wildflowers are hardy and low maintenance",
      "Dry the lavender for lasting fragrance",
    ],
    includes: [
      "Mixed wildflower stems",
      "Fresh lavender sprigs",
      "White daisies",
      "Chamomile blooms",
      "Rustic mason jar vase",
    ],
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getRelatedProducts = (currentId: number, limit: number = 3): Product[] => {
  return products.filter((product) => product.id !== currentId).slice(0, limit);
};
