import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/styles/globals.css";

const noto = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  preload: false,
  display: "swap",
  variable: "--font-noto",
});

// 배포 주소 (Vercel에 배포하면 자동으로 설정됩니다)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "라온웰의원 | 비만 · 체중관리 클리닉",
  description:
    "라온웰의원 비만·체중관리 클리닉. 체성분 분석과 생활습관 상담을 바탕으로 개인별 체중관리 계획을 함께 세웁니다. (포트폴리오용 가상 병원)",
  openGraph: {
    title: "라온웰의원 | 비만 · 체중관리 클리닉",
    description: "체중 관리, 혼자 고민하지 않으셔도 됩니다.",
    images: ["/images/og-image.jpg"],
    locale: "ko_KR",
    type: "website",
  },
  // 가상 병원이므로 검색엔진에 노출되지 않도록 설정
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#4b2154",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={noto.variable}>
      <body>{children}</body>
    </html>
  );
}
