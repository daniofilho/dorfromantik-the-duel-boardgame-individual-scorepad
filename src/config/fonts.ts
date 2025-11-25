import { Roboto, Kalam } from "next/font/google";

export const text = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-text",
  fallback: ["sans-serif"],
});

export const number = Kalam({
  weight: ["700"],
  variable: "--font-number",
  fallback: ["cursive"],
});
