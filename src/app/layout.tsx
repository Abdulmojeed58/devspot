import type { Metadata } from "next";
import { Roboto, Inter, Raleway } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export const metadata: Metadata = {
  title: "Devspot",
  description: "Devspot is a platform for Hackathons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable}  ${raleway.variable} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
