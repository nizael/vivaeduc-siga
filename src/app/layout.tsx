import type { Metadata } from "next";
import localFont from "next/font/local";
import "../common/styles/globals.css";

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
  category: 'Gestão',
  title: 'VivaEduc',
  keywords:'sistema escolar, gestão escolar, controle acadêmico, sistema de escola',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' ,
  description: 'Sistema de gestão escolar completo com funcionalidades de controle acadêmico, financeiro, RH e mais.',
  icons: {
    icon: '/svg/logo_48.svg',
  },
  openGraph: {
    title: 'VivaEduc', 
    description: 'Sistema de gestão escolar', 
    url: 'https://siga.vivaeduc.com',  
    locale:'pt-BR',
    siteName:'VivaEduc',
    type:'website',
    images: [
      {
        url: 'https://siga.vivaeduc.com/svg/logo_48.svg', 
        width: 48,
        height: 48,
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
