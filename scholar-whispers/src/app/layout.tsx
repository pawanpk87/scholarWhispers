import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scholar Whispers",
  description: "Scholar Whispers app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="sholarWhispersMain">{children}</div>
          <nav>MyNav bar</nav>
        </main>
      </body>
    </html>
  );
}
