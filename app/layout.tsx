import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// No explicit weight = variable font (single file, all weights). Much smaller
// over the wire than shipping 6 separate weight files.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thetighlmangroup.com"),
  title: "The Tighlman Group — Custom Software for Service Businesses",
  description: "We build custom software for businesses that need it to just work. No jargon, no bloat — just tools your team will actually use.",
  keywords: "custom software, scheduling software, field management, dispatch tools, small business software",
  openGraph: {
    title: "The Tighlman Group",
    description: "Simple. Functional. Effective. Custom software built for the field.",
    url: "https://thetighlmangroup.com",
    siteName: "The Tighlman Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tighlman Group",
    description: "Simple. Functional. Effective. Custom software built for the field.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
