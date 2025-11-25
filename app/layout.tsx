import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "@/styles/global.scss";

import * as fonts from "@/config/fonts";

export const metadata: Metadata = {
  title: "Dorfromantik - The Duel boardgame - Individual scorepad",
  description:
    "Individual scorepad for Dorfromantik The Duel boardgame. Save paper, save the world! :D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />

        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>

      <body className={`${fonts.number.className} ${fonts.text.className}`}>
        <article>{children}</article>
      </body>

      <GoogleAnalytics gaId="G-KE9HWGH7GL" />
    </html>
  );
}
