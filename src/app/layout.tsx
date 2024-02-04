import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codevelop",
  description: "Main website for Codevelop, a Software Development Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} gradient`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
