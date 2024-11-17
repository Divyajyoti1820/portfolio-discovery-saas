import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const font = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Discovery | Software as a Service",
  description:
    "Discovery is an innovative SaaS platform designed to facilitate developers in sharing their profiles across the internet. With Discovery, developers can create comprehensive profiles and add various links to showcase their work, such as GitHub, LinkedIn, Dev.to, Stack Overflow, YouTube, Facebook, Twitch, and LeetCode. This platform is a powerful tool for developers to highlight their contributions and work to potential recruiters and clients, making it easier to attract new opportunities and collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
