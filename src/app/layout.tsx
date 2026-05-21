import type { Metadata } from "next";
import { Bungee, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import "./globals.css";

const display = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Michigan's Smoke Scoreboard`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
