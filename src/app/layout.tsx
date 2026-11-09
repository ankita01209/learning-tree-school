import type { Metadata } from "next";
import { DM_Sans, Nunito_Sans } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Learning Tree School | Ulwe, Navi Mumbai",
  description: "A premium modern school website for Learning Tree School, mapping to a child's growth journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${dmSans.variable} ${nunitoSans.variable} min-h-full flex flex-col antialiased selection:bg-gold selection:text-slate`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
