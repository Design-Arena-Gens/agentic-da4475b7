import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoundWave - Professional Music Distribution",
  description: "Distribute your music to all major streaming platforms worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
