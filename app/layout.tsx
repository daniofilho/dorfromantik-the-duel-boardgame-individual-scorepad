import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "@/styles/global.scss";

import * as fonts from "@/config/fonts";

const title = "Dorfromantik - The Duel boardgame - Individual scorepad";

export const metadata: Metadata = {
  title,
  description:
    "Individual scorepad for Dorfromantik The Duel boardgame. Save paper, save the world! :D",

  appleWebApp: {
    capable: true, // Enables full-screen web app mode
    statusBarStyle: "default", // Or 'black-translucent'
    title, // Title displayed under the icon
  },
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

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="128x128" />
        <link
          rel="apple-touch-icon"
          href="/apple-touce-icon.png"
          type="image/png"
          sizes="128x128"
        />
      </head>

      <body className={`${fonts.number.className} ${fonts.text.className}`}>
        <main>{children}</main>
      </body>

      <GoogleAnalytics gaId="G-KE9HWGH7GL" />
    </html>
  );
}
