'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

// Badges de confiance
const trustBadges = [
  { icon: '🍣', label: 'Fait à la main' },
  { icon: '⚡', label: 'Livraison 30 min' },
  { icon: '🕐', label: 'Ouvert 7j/7' },
  { icon: '⭐', label: '4,9/5 sur Google' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond plein écran */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=1600&q=85&auto=format&fit=crop"
          alt="Plateau de sushi frais — Sakura Sushi Montréal"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay gradient sombre pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container-max pt-24 pb-16">
        <div className="max-w-2xl">

          {/* Pill tag */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-body mb-6">
              <span className="w-2 h-2 bg-sakura-red rounded-full animate-pulse" />
              Restaurant sushi à Montréal · Plateau-Mont-Royal
            </span>
          </motion.div>

          {/* H1 principal */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading font-semibold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6"
          >
            Sushi frais
            <br />
            <span className="text-gradient-gold">préparé à Montréal.</span>
            <br />
            <span className="text-white/80 text-4xl sm:text-5xl lg:text-6xl">Fait à la main.</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-white/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
          >
            Poisson frais livré chaque matin. Rouleaux préparés à la commande.{' '}
            <strong className="text-white font-semibold">Livraison en 30 min.</strong>
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            {/* CTA principal — Uber Eats */}
            <a
              href="YOUR_UBEREATS_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-sakura-red hover:bg-sakura-red-hover text-white font-body font-semibold text-base rounded-card shadow-red hover:shadow-red-lg transition-all duration-200 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Commander sur Uber Eats
            </a>

            {/* CTA secondaire — appel */}
            <a
              href="tel:+15140000000"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent hover:bg-white/10 text-white font-body font-semibold text-base rounded-card border-2 border-white/40 hover:border-white/70 transition-all duration-200 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 text-sakura-red" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Appeler pour réserver
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg text-white/90 text-xs sm:text-sm font-body"
              >
                <span>{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Chevron scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.8, duration: 0.5 }, y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#specialites"
          aria-label="Voir les spécialités"
          className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/30 hover:border-white/60 transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
