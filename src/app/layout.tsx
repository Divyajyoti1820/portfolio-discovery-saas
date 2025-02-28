import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const font = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Discovery | Showcase Your Technical Accomplishments Effortlessly",
  description:
    "Discover a powerful web app designed for developers to showcase their technical accomplishments and art. Aggregate links from GitHub, Frontend Mentor, Dev.to, and more into beautiful, shareable cards that impress recruiters and clients. Start building your professional presence today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
