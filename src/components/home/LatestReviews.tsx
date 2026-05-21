import { ProductReviewCard } from "@/components/ui/ProductReviewCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { getLatestReviews } from "@/lib/data/reviews";

export function LatestReviews() {
  const reviews = getLatestReviews(4);

  return (
    <section className="border-y-4 border-ink bg-white/50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Latest Reviews"
          subtitle="Fresh drops from the Michigan shelf — scored and quoted."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <ProductReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <SlimeButton href="/reviews">All Reviews</SlimeButton>
        </div>
      </div>
    </section>
  );
}
