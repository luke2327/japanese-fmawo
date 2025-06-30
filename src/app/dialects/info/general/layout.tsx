import { Metadata } from "next";

export const metadata: Metadata = {
  category: "The story of Japan",
};

export default function GeneralLayout({ children }) {
  return children;
}
