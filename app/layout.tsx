import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const dosis = Dosis({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kakugames",
  description: "Kakugames",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script 
          strategy="afterInteractive" 
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17117842905`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17117842905');
            `,
          }}
        />
      </head>
      <body
        className={`${dosis.variable} antialiased flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
