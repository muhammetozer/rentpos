import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "RentPos | Güvenli ve Hızlı Ödeme Altyapısı",
  description:
    "RentPos ile fiziki ve sanal POS çözümleri üzerinden güvenli, hızlı ve kolay tahsilat alın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}