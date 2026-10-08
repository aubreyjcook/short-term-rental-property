import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";
import { property } from "@/lib/property";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: property.metaTitle,
  description: property.summary,
  openGraph: {
    title: property.metaTitle,
    description: property.summary,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-linen font-sans text-ink">{children}</body>
    </html>
  );
}
