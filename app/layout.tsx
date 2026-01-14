import type { Metadata } from "next";
import { Work_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Green Table - Menu",
  description: "Menu for The Green Table",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${workSans.variable} ${notoSans.variable} antialiased bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white selection:bg-primary/30`}
      >
        {children}
      </body>
    </html>
  );
}
