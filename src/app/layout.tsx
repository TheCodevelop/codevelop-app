import { Quicksand } from "next/font/google";
import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const quicksand = Quicksand({ subsets: ["latin"], preload: true });

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
    <html lang="en" className="smooth">
      <body className={`${quicksand.className} gradient`}>
        <main>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
