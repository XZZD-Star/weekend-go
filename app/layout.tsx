import type { Metadata } from "next";
import { Noto_Sans_SC, Inter } from "next/font/google";
import "./globals.css";

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "周末去哪儿 · 为城市青年找到更合心意的周末活动",
  description:
    "根据城市、预算、兴趣和同行人群，推荐真正适合你的周末活动。告别选择困难，把时间留给体验。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${notoSC.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
