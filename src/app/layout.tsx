import "./global.css";
import type { Metadata, Viewport } from "next";
import { Navbar } from "../components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PreloadResources } from "./preload";
import { Footer } from "../components/footer";
import { config } from "@/lib/config";
import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import GoogleAnalytics from "@/components/google-analytics";
import { Toaster } from "@/components/ui/toaster";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const azuki = localFont({
  src: [
    {
      path: "../../public/fonts/azuki.ttf",
    },
  ],
  variable: "--font-azuki",
});

const skybori = localFont({
  src: [
    {
      path: "../../public/fonts/skybori.ttf",
    },
  ],
  variable: "--font-skybori",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#111010" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(config.host),
  title: {
    default: "MW",
    template: "%s | MW",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "MW",
    description: "Developer, writer, and creator.",
    url: config.host,
    siteName: "MW",
    locale: "ko_KR",
    type: "website",
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
  twitter: {
    title: "MW",
    card: "summary_large_image",
  },
  verification: {
    yandex: "0d36be2ea539a1a3",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010] font-azuki",
        raleway.variable,
        azuki.variable,
        skybori.variable
      )}>
      <body className="antialiased max-w-2xl mb-4 flex flex-col md:flex-row mx-1 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-4 flex flex-col px-2">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <PreloadResources />
          <Footer />
        </main>
        <GoogleAnalytics />
        <Toaster />
      </body>
    </html>
  );
}
