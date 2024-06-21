import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Sticker Generator",
  description: "Generate Cool stickers using AI ✨",
  metadataBase: new URL("https://sticker-gen.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
