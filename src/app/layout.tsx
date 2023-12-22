import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "../components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PreloadResources } from "./preload";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://app.maplew.com"),
  title: {
    default: "MW",
    template: "%s | MW",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "MW",
    description: "Developer, writer, and creator.",
    url: "https://app.maplew.com",
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
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
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
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}>
      <body className="antialiased max-w-3xl mb-4 flex flex-col md:flex-row mx-4 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-4 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <PreloadResources />
          <Footer />
        </main>
      </body>
    </html>
  );
}
