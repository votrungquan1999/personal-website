import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "src/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://quanvo.dev";
const ogImageUrl = `${siteUrl}/personal_website_og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quan Vo - Senior Product Engineer",
    template: "%s | Quan Vo",
  },
  description:
    "Product-driven full‑stack engineer who leads web-based solutions across logistics, fashion tech, and SaaS with a focus on accessibility and user experience.",
  keywords: [
    "Quan Vo",
    "Product Engineer",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "Node.js",
    "Accessibility",
    "Web Development",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Quan Vo", url: siteUrl }],
  creator: "Quan Vo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Quan Vo - Portfolio",
    title: "Quan Vo - Senior Product Engineer",
    description:
      "Product-driven full‑stack engineer who leads web-based solutions across logistics, fashion tech, and SaaS with a focus on accessibility and user experience.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Quan Vo - Senior Product Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quan Vo - Senior Product Engineer",
    description:
      "Product-driven full‑stack engineer who leads web-based solutions across logistics, fashion tech, and SaaS with a focus on accessibility and user experience.",
    images: [ogImageUrl],
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
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
