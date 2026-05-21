import { EcosystemCard } from "@/components/ui/EcosystemCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ComponentProps } from "react";

type PartnerSectionProps = {
  id: string;
  title: string;
  subtitle: string;
  accent: ComponentProps<typeof SectionHeading>["accent"];
  sectionClassName?: string;
  card: ComponentProps<typeof EcosystemCard>;
};

export function PartnerSection({
  id,
  title,
  subtitle,
  accent,
  sectionClassName,
  card,
}: PartnerSectionProps) {
  return (
    <section
      className={sectionClassName ?? "mx-auto max-w-6xl px-4 py-12"}
      aria-labelledby={id}
    >
      <SectionHeading
        id={id}
        title={title}
        subtitle={subtitle}
        accent={accent}
      />
      <EcosystemCard {...card} />
    </section>
  );
}
