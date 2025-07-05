// src/app/layout.tsx
import "./style/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import CanvasBackground from "./components/CanvasBackground"; // <-- add this import
import type { Metadata } from "next";
import Footer from "./components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Shikhar | Portfolio",
  description: "A modern full-stack portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative bg-gray-950 text-white font-sans overflow-x-hidden">
        {/* Global 3D background */}
        <CanvasBackground />

        {/* Content on top */}
        <Navbar />
        <main className="pt-12 relative z-10">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
