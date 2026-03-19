'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Navigation sticky avec fond semi-transparent au scroll
export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between">
        {/* Logo texte japonais */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-heading text-2xl font-semibold text-[#f5f5f5] tracking-wide group-hover:text-gold transition-colors duration-200">
            sakura
          </span>
          <span className="text-sakura-red text-2xl font-heading">桜</span>
          <span className="font-heading text-2xl font-semibold text-[#f5f5f5] tracking-wide group-hover:text-gold transition-colors duration-200">
            sushi
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Spécialités', href: '#specialites' },
            { label: 'Pourquoi nous', href: '#pourquoi' },
            { label: 'Avis', href: '#avis' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-light hover:text-[#f5f5f5] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Commander */}
        <motion.a
          href="#commander"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-sakura-red hover:bg-sakura-red-hover text-white font-body font-semibold text-sm px-5 py-2.5 rounded-card transition-colors duration-200 shadow-red"
        >
          Commander
        </motion.a>
      </div>
    </header>
  )
}
