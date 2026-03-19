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
  title: 'BlasianHalal — Traiteur Halal | Sushis & Cuisine Haïtienne à Montréal',
  description:
    'Service traiteur halal spécialisé en sushis & cuisine haïtienne à Montréal. Créations personnalisées pour mariages, Eid et événements privés. Contactez-nous pour un devis.',
  keywords: [
    'traiteur halal montréal',
    'sushi halal montréal',
    'cuisine haïtienne montréal',
    'traiteur mariage montréal',
    'traiteur eid montréal',
    'blasianhalal',
    'événement privé traiteur',
  ],
  openGraph: {
    title: 'BlasianHalal — Traiteur Halal Sushis & Cuisine Haïtienne',
    description: 'Créations culinaires halal personnalisées pour mariages, Eid et événements privés à Montréal.',
    type: 'website',
    locale: 'fr_CA',
    // url: 'https://blasianhalal.vercel.app', // ← décommenter après déploiement
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
