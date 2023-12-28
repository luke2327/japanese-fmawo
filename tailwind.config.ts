import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import tailwindAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/content/**/*.mdx",
    "./public/**/*.svg",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        raleway: ["var(--font-raleway)"],
        azuki: ["var(--font-azuki)"],
        skybori: ["var(--font-skybori)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      colors: {
        "regal-green": "#0e7912",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, tailwindAnimate],
} satisfies Config;
