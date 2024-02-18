import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', ], variable: '--Inter' }, );

export const metadata: Metadata = {
  title: "Vila Sul - Empreendimentos Imobiliários",
  description: "Empreendimentos Imobiliários",
  icons: "/villasulmainlogo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
