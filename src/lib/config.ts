export const config = {
  apiHost:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8484/v2023"
      : "https://api.maplew.com/v2023",
  host: "https://app.maplew.com",
};

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID as string, {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
