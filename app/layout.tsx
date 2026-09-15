import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "事业部智库 · CSSA LSE Careers",
  description: "把零散的求职信息，变成一套可用的知识。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><Header />{children}<footer>事业部智库 <span>CSSA LSE Careers</span><small>Prototype content · 示例信息</small></footer></body></html>;
}
