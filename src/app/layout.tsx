import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaperone - Don't let your AI ship unsupervised",
  description:
    "Deterministic code enforcer CLI that catches what TypeScript and ESLint miss. 16+ rule types for file structure, naming, imports, and more.",
  openGraph: {
    title: "Chaperone - Don't let your AI ship unsupervised",
    description:
      "Deterministic code enforcer CLI that catches what TypeScript and ESLint miss. 16+ rule types for file structure, naming, imports, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaperone - Don't let your AI ship unsupervised",
    description:
      "Deterministic code enforcer CLI that catches what TypeScript and ESLint miss.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
