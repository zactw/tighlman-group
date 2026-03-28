import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Tighlman Group — Custom Software for Blue Collar Businesses",
  description: "We build custom software for businesses that need it to just work. No jargon, no bloat — just tools your team will actually use.",
  keywords: "custom software, scheduling software, field management, dispatch tools, small business software",
  openGraph: {
    title: "The Tighlman Group",
    description: "Simple. Functional. Effective. Custom software built for the field.",
    url: "https://tighlman-group.com",
    siteName: "The Tighlman Group",
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
