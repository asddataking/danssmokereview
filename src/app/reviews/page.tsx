import { ReviewsGridClient } from "@/components/reviews/ReviewsGridClient";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerLabel } from "@/components/ui/StickerLabel";

export const metadata = {
  title: "Reviews",
};

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <StickerLabel color="electric" className="mb-4">
        Mid or Gas?
      </StickerLabel>
      <SectionHeading
        title="Reviews"
        subtitle="Every product scored, quoted, and verdict-stamped for Michigan."
      />
      <ReviewsGridClient />
    </div>
  );
}
