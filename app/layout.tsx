import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fkGrotesk = localFont({
  src: [
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Thin.otf",    weight: "100" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Light.otf",   weight: "300" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Regular.otf", weight: "400" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Medium.otf",  weight: "500" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Bold.otf",    weight: "700" },
    { path: "../public/fonts/fkgrotesk/FKGrotesk-Black.otf",   weight: "900" },
  ],
  variable: "--font-fk-grotesk",
  display: "swap",
});

const fkGroteskMono = localFont({
  src: [
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Thin.otf",    weight: "100" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Light.otf",   weight: "300" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Regular.otf", weight: "400" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Medium.otf",  weight: "500" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Bold.otf",    weight: "700" },
    { path: "../public/fonts/fkgroteskmono/FKGroteskMono-Black.otf",   weight: "900" },
  ],
  variable: "--font-fk-grotesk-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEAR AI – Demo Sites",
  description: "Multi-site demo hub for NEAR AI projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fkGrotesk.variable} ${fkGroteskMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
