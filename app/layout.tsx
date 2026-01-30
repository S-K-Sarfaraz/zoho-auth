import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Work_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spider Dashboard",
  description: "Advanced Private Dashboard with Zoho Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${workSans.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
