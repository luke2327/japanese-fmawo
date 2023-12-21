export const config = {
  apiHost:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8484/v2023"
      : "https://api.maplew.com/v2023",
};
