import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Luciano A. Jesfen — Software Developer",
  description:
    "I'm always learning, building and trying out new ideas. Mostly for fun, sometimes for something bigger.",
  openGraph: {
    type: "website",
    title: "Luciano A. Jesfen — Software Developer",
    description:
      "I'm always learning, building and trying out new ideas. Mostly for fun, sometimes for something bigger.",
    images: "/icons/computer_explorer.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luciano A. Jesfen — Software Developer",
    description:
      "I'm always learning, building and trying out new ideas. Mostly for fun, sometimes for something bigger.",
    images: "/icons/computer_explorer.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} antialiased`}>{children}</body>
    </html>
  );
}
