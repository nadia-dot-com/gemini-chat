import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { DESCRIPTION } from "@/features/chat/data/messages";
import { Header } from "@/components/loyouts/Header";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ai Chat",
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} h-full antialiased`}>
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}
