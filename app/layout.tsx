import type { Metadata } from "next";
import { Poppins, League_Spartan } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-league",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Tico",
  icons: "/svg/ticoHead.svg",
  description: "Tico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white!" data-theme="tico">
      <body
        className={`${poppins.variable} ${leagueSpartan.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
