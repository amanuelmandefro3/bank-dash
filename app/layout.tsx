import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { colors } from "@/constants";
import { Providers } from "./providers";
import ProgressBar from '@/components/ProgressBar'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BankDash.",
  description: "A banking platform hat unifies banks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-25 dark:bg-dark text-gray-900 dark:text-white`}>
        <Providers>
        <ProgressBar>
          {children}  
        </ProgressBar>
        </Providers>
        </body>
    </html>
  );
}
