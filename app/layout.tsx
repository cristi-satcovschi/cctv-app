import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "./_ui/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CCTV Video Analytics Software",
  description:
    "demo app for an Upwork job -- https://www.upwork.com/freelance-jobs/apply/React-Developer-needed-for-Web-Application-Immediately_~01768c35de26e31bbf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
