import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "keen-slider/keen-slider.min.css";
import dynamic from "next/dynamic";

// Optional: you can use dynamic import for ClientWrapper if it uses window
const ClientWrapper = dynamic(() => import("../components/ClientWrapper"), { ssr: false });

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spetraluce",
  description: "Shaping the space with light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-black text-white`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
