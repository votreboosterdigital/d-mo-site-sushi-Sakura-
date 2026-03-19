import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

// Polices Google Fonts chargées via next/font (optimisé, pas de FOUT)
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Balises SEO — à personnaliser avec les vraies infos du client
export const metadata: Metadata = {
  title: 'Sakura Sushi Montréal — Sushi frais préparés à la main',
  description:
    'Restaurant sushi à Montréal. Sushi frais, rouleaux, nigiri préparés à la main. Livraison rapide via Uber Eats. Commandez en ligne ou appelez-nous.',
  keywords: [
    'sushi montréal',
    'restaurant japonais montréal',
    'livraison sushi',
    'nigiri montréal',
    'maki roll',
    'sakura sushi',
  ],
  openGraph: {
    title: 'Sakura Sushi Montréal',
    description: 'Sushi frais préparés à la main, livrés en 30 min.',
    type: 'website',
    locale: 'fr_CA',
    // url: 'https://sushi-demonstration.vercel.app', // ← décommenter après déploiement
  },
  // Lien vers Google Business — remplacer YOUR_GOOGLE_BUSINESS_URL
  // googleSiteVerification: 'YOUR_VERIFICATION_CODE',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
