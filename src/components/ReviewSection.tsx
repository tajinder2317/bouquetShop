import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Absolutely stunning arrangement! The flowers were incredibly fresh and lasted over two weeks. My wife was so happy with them.",
    verified: true,
  },
  {
    id: 2,
    author: "James L.",
    rating: 5,
    date: "1 month ago",
    comment: "Perfect for our anniversary. The presentation was beautiful and the delivery was right on time. Will definitely order again!",
    verified: true,
  },
  {
    id: 3,
    author: "Emily R.",
    rating: 4,
    date: "1 month ago",
    comment: "Beautiful bouquet with great variety. The only reason for 4 stars is I wish it came with a larger vase option.",
    verified: true,
  },
];

const ReviewSection = () => {
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <section className="py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(averageRating)
                      ? "fill-gold text-gold"
                      : "text-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-foreground font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">({reviews.length} reviews)</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{review.author}</span>
                  {review.verified && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "fill-gold text-gold"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
