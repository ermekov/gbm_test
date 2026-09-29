import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GBM GROUP — электротехника, сантехника, инструмент и оборудование",
  description: "Опт и розница: электротехника, сантехника, инструмент, сварка, генераторы и стройтовары.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
