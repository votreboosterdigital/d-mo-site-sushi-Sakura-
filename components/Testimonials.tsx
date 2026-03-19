'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/sushi'

// Étoiles SVG dorées
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? '#d4a017' : '#374151'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Testimonials() {
  return (
    <section id="avis" className="section-pad bg-[#0a0a0a]">
      <div className="container-max">
        {/* En-tête */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-sakura-red text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            — Avis clients —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl text-white font-semibold mb-4"
          >
            Ils ont adoré
          </motion.h2>
        </div>

        {/* Score global Google */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-14"
        >
          <div className="flex items-center gap-4 bg-surface border border-white/5 rounded-card px-6 py-4">
            {/* Icône Google */}
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <Stars count={5} />
            <span className="font-heading font-semibold text-white text-xl">4,9/5</span>
            <div className="w-px h-6 bg-white/10" />
            <span className="font-body text-muted text-sm">150+ avis Google</span>
          </div>
        </motion.div>

        {/* Cartes avis */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-surface rounded-card p-6 lg:p-7 flex flex-col border border-white/5 hover:border-white/10 shadow-card transition-all duration-300"
            >
              {/* Étoiles + guillemet */}
              <div className="flex items-start justify-between mb-4">
                <Stars count={t.rating} />
                <span className="text-sakura-red/20 text-5xl font-heading leading-none select-none">&ldquo;</span>
              </div>

              {/* Texte */}
              <p className="font-body text-muted-light text-sm leading-relaxed flex-1 mb-5">
                {t.text}
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-sakura-red/20 flex items-center justify-center text-sakura-red text-xs font-body font-bold">
                  {t.author.charAt(0)}
                </div>
                <span className="font-body font-semibold text-white text-sm">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note de bas de section */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center font-body text-muted text-xs mt-8"
        >
          * Ces avis sont factices — à remplacer par de vraies captures Google Business.
        </motion.p>
      </div>
    </section>
  )
}
