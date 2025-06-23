import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Visualization Playground",
  description: "Interactive data visualization playground with various chart examples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/play-chart-logo.png" alt="Play Chart Logo" className="h-8 w-auto mr-2" />
                <span className="text-xl font-bold text-gray-900">PlayChart</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/keneth80/play-chart" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                Source
              </a>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
