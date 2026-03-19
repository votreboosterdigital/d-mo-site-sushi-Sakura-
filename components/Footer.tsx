// Footer simple — nom du resto, année, crédit développeur

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="container-max py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo texte */}
        <div className="flex items-center gap-2">
          <span className="font-heading text-lg text-white/60 tracking-wide">sakura</span>
          <span className="text-sakura-red text-lg font-heading">桜</span>
          <span className="font-heading text-lg text-white/60 tracking-wide">sushi</span>
        </div>

        {/* Copyright + crédit */}
        <p className="font-body text-muted text-xs text-center">
          © {year} Sakura Sushi Montréal · Développé par{' '}
          <a
            href="https://votreboosterdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sakura-red hover:text-sakura-red-hover transition-colors duration-200"
          >
            Booster Digital
          </a>
        </p>

        {/* Liens légaux */}
        <div className="flex gap-4">
          <a href="#" className="font-body text-muted hover:text-white/60 text-xs transition-colors duration-200">
            Mentions légales
          </a>
          <a href="#" className="font-body text-muted hover:text-white/60 text-xs transition-colors duration-200">
            Confidentialité
          </a>
        </div>
      </div>
    </footer>
  )
}
