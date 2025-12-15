import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - AI-First Development Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "software development",
    "AI development",
    "SaaS development",
    "full-stack development",
    "Electron apps",
    "desktop applications",
    "healthcare software",
    "React development",
    "Node.js development",
    "web application development",
    "custom software",
    "MVP development",
  ],
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - AI-First Development Agency`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - AI-First Development Agency`,
    description: siteConfig.description,
    images: ["/og-image.png"],
    creator: "@jayporelabs",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark) || stored === 'system' && prefersDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              founder: {
                "@type": "Person",
                name: siteConfig.founder.name,
                jobTitle: siteConfig.founder.role,
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: siteConfig.email,
                contactType: "sales",
              },
              sameAs: [
                siteConfig.social.github,
                siteConfig.social.linkedin,
                siteConfig.social.twitter,
              ],
              knowsAbout: [
                "Software Development",
                "AI Integration",
                "Full-Stack Development",
                "Desktop Applications",
                "SaaS Development",
                "Healthcare Technology",
              ],
            }),
          }}
        />
        {/* JSON-LD Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              areaServed: "Worldwide",
              serviceType: [
                "Software Development",
                "Web Development",
                "Mobile App Development",
                "AI Integration",
                "SaaS Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
