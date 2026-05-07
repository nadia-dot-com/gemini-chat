import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { DEFAULT_MESSAGE } from "@/features/chat/data/messages";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ai Chat",
  description: DEFAULT_MESSAGE,
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} h-full antialiased`}>
      <body >{children}</body>
    </html>
  );
}
