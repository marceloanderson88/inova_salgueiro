import type { Metadata, Viewport } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/content/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.titulo,
    template: "%s — Inova Salgueiro",
  },
  description: site.descricao,
  keywords: [
    "Inova Salgueiro",
    "ecossistema de inovação",
    "Salgueiro PE",
    "inovação no sertão",
    "grupos de trabalho",
    "empreendedorismo",
    "desenvolvimento local",
  ],
  authors: [{ name: "Inova Salgueiro" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.nome,
    title: site.titulo,
    description: site.descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: site.titulo,
    description: site.descricao,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08783F",
  width: "device-width",
  initialScale: 1,
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.nome,
  url: site.url,
  description: site.descricao,
  email: site.contato.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salgueiro",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  sameAs: Object.values(site.redes),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${sourceSans.variable}`}>
      <head>
        {/* Sem JS o IntersectionObserver nunca dispara e as seções ficariam
            presas em opacity: 0. O conteúdo tem de aparecer de qualquer forma. */}
        <noscript>
          <style>{`.revelar { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
        <Header />
        <main id="conteudo" className="flex-1 pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
