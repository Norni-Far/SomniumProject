import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Somnium Project — Software Development Studio",
  description:
    "Разрабатываем игры и интерактивные приложения — от идеи до релиза в Google Play, App Store и Steam.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: "Somnium Project",
    description:
      "Games, business apps, and fast prototypes. Remote worldwide.",
    url: siteConfig.siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somnium Project",
    description:
      "We build games and interactive apps — from concept to launch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Somnium Project",
    url: siteConfig.siteUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
      },
    ],
  };

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Somnium Project Showreel",
    description: "Showreel of games and interactive applications.",
    embedUrl:
      "https://www.youtube.com/embed/67yIC8vQZfk?list=PLjwWjcNak-vADGGtZnLkeD9Goow8hOl4s",
    thumbnailUrl: "https://img.youtube.com/vi/67yIC8vQZfk/maxresdefault.jpg",
  };

  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`} data-theme="light">
      <body className="min-h-full bg-background text-foreground">
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      </body>
    </html>
  );
}
