import type { Metadata } from "next";
import { Public_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import "../styles/vendor.css";
import "../styles/styles.css";
import Script from "next/script";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "LALAHAHA",
  description: "Wonyoung Park - IMC Specialist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${dmSerifDisplay.variable} ss-preload`} suppressHydrationWarning>
      <body id="top">
        {children}
        <Script src="/js/plugins.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
