import type { Metadata, Viewport } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/navbar";
import Providers from "@/lib/provider/react-query";

import "../app/globals.css";
import { FAB } from "@/components/fab";

// import OgImage from "./opengraph-image.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "gloom.",
    template: "%s | gloom.",
  },
  description: "Stuffs I put.",
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://thesonofnyx.vercel.app"
      : "http://localhost:3000",
  ),
  openGraph: {
    title: {
      default: "gloom.",
      template: "%s | gloom.",
    },
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    description: "Stuffs I put.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ocyeanyx",
    creator: "@ocyeanyx",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} antialiased scroll-smooth`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Providers>
              <FAB />
              <Navbar />
              {children}
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}