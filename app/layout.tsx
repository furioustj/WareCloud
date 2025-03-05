import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins(
  {
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
  }
);

export const metadata: Metadata = {
  title: "WareCloud",
  description: "WareCloud is a cloud-based warehouse system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
