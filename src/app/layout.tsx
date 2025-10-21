import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const commonDescription = "I'm Darragh, a 17 year-old Computer Science student and enthusiast based in the UK.";

export const metadata: Metadata = {
  title: "darragh.website",
  description: commonDescription,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" }
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "darragh.website",
    description: commonDescription,
    url: "https://darragh.website",
    siteName: "darragh.website",
    locale: "en_GB",
    type: "website",
  },
  other: {
    "apple-mobile-web-app-title": "Darragh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
