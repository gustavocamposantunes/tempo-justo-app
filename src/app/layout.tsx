import { Inter, Manrope, Geist } from "next/font/google";

import "./globals.css";

import type { Metadata } from "next";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tempo Justo",
  description: "Uma plataforma de economia solidária voltada para o compartilhamento de tempo e habilidades entre pessoas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, manrope.variable, "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
