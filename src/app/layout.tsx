import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const virgil = localFont({
  src: "../../public/Virgil.woff2",
  variable: "--font-virgil",
});

export const metadata: Metadata = {
  title: "Sai Sandeep Mandava | Portfolio",
  description: "Portfolio of Sai Sandeep Mandava - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${virgil.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
