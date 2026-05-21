import { ReviewsGridClient } from "@/components/reviews/ReviewsGridClient";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { getAllReviews } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Reviews",
  description:
    "Browse Michigan cannabis product reviews — flower, rosin, edibles, vapes, and more with Dan Scores and verdict stamps.",
  path: "/reviews",
});

export default async function ReviewsPage() {
  const reviews = await getAllReviews();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <StickerLabel color="electric" className="mb-4">
        Mid or Gas?
      </StickerLabel>
      <SectionHeading
        title="Reviews"
        subtitle="Every product scored, quoted, and verdict-stamped for Michigan."
      />
      <ReviewsGridClient reviews={reviews} />
    </div>
  );
}
