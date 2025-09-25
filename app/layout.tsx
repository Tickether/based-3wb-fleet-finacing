import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css"
import { Toaster } from "sonner";
import { WagmiContext } from "@/context/wagmiContext";
import { headers } from "next/headers";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3 Wheeler Bike Club | Ownership, Community & Governance",
  description: "P2P Financing Platform for the 3 Wheeler Bike Club",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie')
  
  return (
    <html lang="en">
      <body
        className={`${geistMono.className}`}
      >
        <WagmiContext cookies={cookies}>
          {children}
          <Toaster expand={true} richColors />
        </WagmiContext>
      </body>
    </html>
  );
}
