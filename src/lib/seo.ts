import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";

const defaultOgImage = "/images/og-default.jpg";

const defaultOgImageMeta = {
  url: defaultOgImage,
  width: 1024,
  height: 682,
  alt: `${SITE_NAME} — Real reviews. Real smoke. Real Michigan.`,
  type: "image/jpeg" as const,
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Michigan cannabis",
    "cannabis reviews",
    "smoke scoreboard",
    "Dan's Smoke Reviews",
    "dispensary reviews",
    "weed reviews Michigan",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [defaultOgImageMeta],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [defaultOgImageMeta],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

type PageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  image,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? defaultOgImageMeta;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      images: [typeof ogImage === "string" ? { url: ogImage, alt: title } : ogImage],
    },
    twitter: {
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [
        typeof ogImage === "string" ? ogImage : ogImage.url,
      ],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};
