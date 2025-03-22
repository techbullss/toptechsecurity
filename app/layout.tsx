
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Toptechsecurity",
  description: "Toptech",
  icons: {
    icon: "/favicon.png", // Main favicon
    shortcut: "/favicon.png", // Shortcut icon
    apple: "/favicon.png", // Apple touch icon (for iOS)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-[90%] mx-auto bg-gray-100`} 
      >
        <div className="flex flex-col w-[98%] mx-auto shadow-black shadow-lg">
            
          <main className="flex-grow   mb-[65vh] z-[50] bg-gray-100">
          <Header />
            {children}</main>
         < ScrollToTopButton />
          <Footer />
          </div>
      </body>
    </html>
  );
}
