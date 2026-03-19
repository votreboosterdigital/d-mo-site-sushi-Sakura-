'use client'

import { motion } from 'framer-motion'

const arguments_ = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Certifié 100% Halal',
    text: "Tous nos ingrédients sont halal certifiés. Chaque préparation respecte les normes alimentaires islamiques, sans compromis.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Sushis & Cuisine Haïtienne',
    text: "Une fusion unique : rouleaux et nigiri japonais côtoient les saveurs authentiques de la cuisine haïtienne. Une expérience gastronomique hors du commun.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Mariages & Célébrations Eid',
    text: "Spécialistes des grands événements : mariages, Eid ul-Fitr, Eid ul-Adha, baptêmes et fêtes privées. Nous gérons tout pour que vous profitiez pleinement.",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Créations Personnalisées',
    text: "Chaque événement est unique. Menus sur mesure, présentation soignée et service attentionné pour faire de votre occasion un souvenir inoubliable.",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhyUs() {
  return (
    <section id="pourquoi" className="section-pad bg-surface">
      <div className="container-max">
        {/* En-tête */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-sakura-red text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            — Pourquoi nous choisir —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl text-white font-semibold mb-4"
          >
            La différence BlasianHalal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-muted text-base leading-relaxed"
          >
            Une fusion culinaire halal unique, préparée avec passion pour vos moments les plus importants.
          </motion.p>
        </div>

        {/* Grille arguments */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {arguments_.map((arg, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group bg-[#0a0a0a] rounded-card p-6 border border-white/5 hover:border-sakura-red/30 transition-all duration-300"
            >
              {/* Icône */}
              <div className="w-14 h-14 bg-sakura-red/10 rounded-xl flex items-center justify-center text-sakura-red mb-5 group-hover:bg-sakura-red/20 transition-colors duration-200">
                {arg.icon}
              </div>
              {/* Titre */}
              <h3 className="font-heading text-xl text-white font-semibold mb-3">
                {arg.title}
              </h3>
              {/* Texte */}
              <p className="font-body text-muted text-sm leading-relaxed">
                {arg.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
