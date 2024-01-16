import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Clipboard Landing Page",
  description: "A history of everything you copy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baiJamjuree.className} scroll-smooth font-normal antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
