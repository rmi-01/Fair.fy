import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fair.fy",
  description:
    "Fair.fy is a website that showcases exciting fairs in Germany and Europe. Here you can find information about the fairs, their dates, booth numbers, addresses, and more.",
  openGraph: {
    type: "website",
    title: "Fair.fy",
    description:
      "Fair.fy is a website that showcases exciting fairs in Germany and Europe. Here you can find information about the fairs, their dates, booth numbers, addresses, and more.",
    siteName: "Fair.fy",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
