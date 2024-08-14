import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Hero Animation",
  description: "Designed and developed by Techdoc",
  metadataBase: new URL("https://weekly-issue1-animation-site.vercel.app"),
  openGraph: {
    images: [
      {
        url: "https://weekly-issue1-animation-site.vercel.app/logo.jpg",
        width: 255,
        height: 255,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" duration={1000} />{" "}
      </body>
    </html>
  );
}
