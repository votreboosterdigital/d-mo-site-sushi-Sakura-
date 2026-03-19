'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { products } from '@/data/sushi'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// Formateur de prix en CAD
function formatPrice(price: number) {
  return price.toFixed(2).replace('.', ',') + ' $'
}

export default function Specialties() {
  return (
    <section id="specialites" className="section-pad bg-[#0a0a0a]">
      <div className="container-max">
        {/* En-tête de section */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body text-sakura-red text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            — Notre carte —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl text-white font-semibold mb-4"
          >
            Nos spécialités
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-muted text-base leading-relaxed"
          >
            Préparés à la commande avec du poisson frais livré chaque matin.
          </motion.p>
        </div>

        {/* Grille produits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group bg-surface rounded-card overflow-hidden border border-white/5 shadow-card hover:shadow-card-hover hover:border-white/10 transition-all duration-300 cursor-pointer"
            >
              {/* Image du produit */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge populaire */}
                {product.isPopular && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-sakura-red text-white text-xs font-body font-semibold px-2.5 py-1 rounded-full">
                      ⭐ Populaire
                    </span>
                  </div>
                )}
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-[#0a0a0a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Infos produit */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-heading text-xl text-white font-semibold leading-tight">
                    {product.name}
                  </h3>
                  <span className="font-body font-bold text-gold whitespace-nowrap text-base">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <p className="font-body text-muted text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA voir tout le menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#commander"
            className="inline-flex items-center gap-2 font-body text-muted-light hover:text-sakura-red text-sm font-medium transition-colors duration-200"
          >
            Voir tout le menu et commander
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
