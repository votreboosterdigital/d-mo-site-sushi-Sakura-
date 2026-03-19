'use client'

import { motion } from 'framer-motion'

// Section Commander — CTA principal du site
export default function Order() {
  return (
    <section id="commander" className="section-pad bg-[#0a0a0a]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1a0505] via-[#2a0a0a] to-[#0a0a0a] border border-sakura-red/20 p-10 sm:p-16 text-center"
        >
          {/* Décoration fond */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sakura-red/10 rounded-full blur-3xl pointer-events-none" />

          {/* Contenu */}
          <div className="relative z-10">
            <p className="font-body text-sakura-red text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              — Réservez votre événement —
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-4 leading-tight">
              Prêt à faire de votre<br />événement un souvenir ?
            </h2>
            <p className="font-body text-muted-light text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Mariage, Eid, baptême ou soirée privée — contactez-nous pour un menu personnalisé 100% halal.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              {/* Réserver par message */}
              <motion.a
                href="https://www.facebook.com/BlasianHalal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sakura-red hover:bg-sakura-red-hover text-white font-body font-semibold text-base rounded-card shadow-red hover:shadow-red-lg transition-all duration-200"
              >
                {/* Icône calendrier */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Réserver via Facebook
              </motion.a>

              {/* Appeler directement */}
              <motion.a
                href="tel:+15140000000"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-body font-semibold text-base rounded-card border-2 border-white/20 hover:border-white/40 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Appeler · (514) 000-0000
              </motion.a>
            </div>

            {/* Info événements */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-body text-sm text-muted">
              <span>💍 Mariages</span>
              <span>🌙 Eid ul-Fitr & Eid ul-Adha</span>
              <span>🎉 Événements privés</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
