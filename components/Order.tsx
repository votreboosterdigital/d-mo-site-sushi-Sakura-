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
              — Commander —
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-4 leading-tight">
              Prêt à commander ?
            </h2>
            <p className="font-body text-muted-light text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Choisissez votre mode de commande. Livraison rapide ou à emporter, c'est vous qui choisissez.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              {/* Uber Eats */}
              <motion.a
                href="YOUR_UBEREATS_URL"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sakura-red hover:bg-sakura-red-hover text-white font-body font-semibold text-base rounded-card shadow-red hover:shadow-red-lg transition-all duration-200"
              >
                {/* Icône livraison */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                Commander sur Uber Eats
              </motion.a>

              {/* Commander directement */}
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

            {/* Horaires */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-body text-sm text-muted">
              <span>🕐 Lun–Ven : 11h30 – 22h00</span>
              <span>🕐 Sam–Dim : 12h00 – 23h00</span>
              <span>🚀 Livraison jusqu'à 21h30</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
