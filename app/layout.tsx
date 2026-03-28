import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Tilghman Group — Custom Software for Blue Collar Businesses",
  description: "We build custom software for businesses that need it to just work. No jargon, no bloat — just tools your team will actually use.",
  keywords: "custom software, scheduling software, field management, dispatch tools, small business software",
  openGraph: {
    title: "The Tilghman Group",
    description: "Simple. Functional. Effective. Custom software built for the field.",
    url: "https://tilghman-group.com",
    siteName: "The Tilghman Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
