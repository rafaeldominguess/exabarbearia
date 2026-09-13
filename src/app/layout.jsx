import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: {
    default: "EXA Barbearia | Barbearia em Santa Maria - RS",
    template: "%s | EXA Barbearia",
  },
  description:
    "Barbearia em Santa Maria - RS especializada em cabelo, barba e cuidados masculinos. Conheça a EXA e agende seu horário.",
  keywords: [
    "barbearia em Santa Maria",
    "barbeiro em Santa Maria RS",
    "corte de cabelo masculino Santa Maria",
    "barba em Santa Maria",
    "EXA Barbearia",
  ],
  applicationName: "EXA Barbearia",
  category: "beauty",
  creator: "EXA Barbearia",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "EXA Barbearia",
    title: "EXA Barbearia | Barbearia em Santa Maria - RS",
    description:
      "Cabelo, barba e presença em Santa Maria. Conheça a EXA Barbearia.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "EXA Barbearia em Santa Maria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EXA Barbearia | Barbearia em Santa Maria - RS",
    description:
      "Cabelo, barba e presença em Santa Maria. Conheça a EXA Barbearia.",
    images: ["/hero.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-[#FFFFFF] bg-[#000201]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              name: "EXA Barbearia",
              description:
                "Barbearia em Santa Maria - RS especializada em cabelo, barba e cuidados masculinos.",
              image: "/hero.png",
              priceRange: "R$",
              areaServed: {
                "@type": "City",
                name: "Santa Maria",
                containedInPlace: {
                  "@type": "State",
                  name: "Rio Grande do Sul",
                },
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santa Maria",
                addressRegion: "RS",
                addressCountry: "BR",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "https://schema.org/Monday",
                  "https://schema.org/Tuesday",
                  "https://schema.org/Wednesday",
                  "https://schema.org/Thursday",
                  "https://schema.org/Friday",
                  "https://schema.org/Saturday",
                ],
                opens: "09:00",
                closes: "20:00",
              },
              sameAs: [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
