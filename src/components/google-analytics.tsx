import Script from "next/script";
import { GA_TRACKING_ID } from "@/lib/config";

export const GoogleAnalytics = () => {
  if (!GA_TRACKING_ID) {
    return null;
  }
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  );
};
