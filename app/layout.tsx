import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOC - eスポーツメディア",
  description: "格ゲーシーンの最新情報をお届け",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
