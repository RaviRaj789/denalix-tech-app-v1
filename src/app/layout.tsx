import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Geist_Mono } from "next/font/google";
import AmbientBackground from "@/components/effects/AmbientBackground";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denalix Tech — Modernize. Automate. Scale with confidence.",
  description:
    "Practical digital systems for businesses that want less manual work, clearer operations, better customer experiences, and room to grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08090c] text-zinc-100">
        <AmbientBackground />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
