import type { Metadata } from "next";
import localFont from "next/font/local";
import "../common/styles/globals.css";
import { Head } from "next/document";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VivaEduc",
  description: "Sistema de gestão escolar",
  icons: {
    icon: '/svg/logo_48.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>VivaEduc</title>
        <link rel="icon" href="/svg/logo_48.svg" type="image/x-icon" />
        <meta name="description" content="Sistema de gestão escolar completo com funcionalidades de controle acadêmico, financeiro, RH e mais." />
        <meta name="keywords" content="sistema escolar, gestão escolar, controle acadêmico, sistema de escola" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="VivaEduc" />
        <meta property="og:description" content="Sistema de gestão escolar" />
        <meta property="og:image" content="https://siga.vivaeduc.com/svg/logo_48.svg" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="48" />
        <meta property="og:image:height" content="48" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
