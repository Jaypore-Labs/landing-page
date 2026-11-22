import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { siteConfig, seoKeywords } from "@/data/site";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const rootTitle = `${siteConfig.name} — Enterprise software architecture & engineering`;

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: rootTitle,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  applicationName: siteConfig.name,
  authors: [
    { name: siteConfig.founder.name, url: siteConfig.founder.linkedin },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: rootTitle,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: rootTitle,
    description: siteConfig.description,
    images: ["/opengraph-image"],
    creator: "@jayporelabs",
    site: "@jayporelabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: {
      ...(process.env.BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
        : {}),
    },
  },
  other: {
    "ai-label": "This site is built by humans using AI responsibly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main className="flex-1 relative">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
