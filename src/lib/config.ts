export const config = {
  apiHost:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8484/v2023"
      : "https://api.maplew.com/v2023",
  host: "https://blog.fmawo.com",
};

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
