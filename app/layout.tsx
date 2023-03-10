import { Header } from "./components/Header/Header";
import "./globals.scss";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
