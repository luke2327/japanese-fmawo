export const config = {
  apiHost:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8484"
      : "https://api.maplew.com",
  host: "https://blog.fmawo.com",
};

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
export const ADMIN_ID = process.env.NEXT_PUBLIC_ADMIN_ID;
export const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
