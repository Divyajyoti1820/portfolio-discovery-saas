import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

import { QueryProvider } from "@/components/providers/query-provider";

export const metadata: Metadata = {
  title: "Discovery | SaaS",
  description:
    "Discover the power of efficient link management with Discovery, a cutting-edge Software as a Service (SaaS) web application. Seamlessly create, manage, and share your links while enjoying real-time previews and intuitive drag-and-drop functionality. Enhance your online presence with customizable user profiles and ensure your links are always valid with built-in validation features. Experience a responsive design that adapts to any device, making link sharing effortless and effective. Join us today and elevate your link-sharing experience!",
};

const font = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
