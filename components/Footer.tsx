export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#f59e0b] text-sm font-bold">TTG</span>
          <span className="text-white/30 text-sm">·</span>
          <span className="text-white/30 text-sm">The Tilghman Group LLC</span>
        </div>

        <div className="flex items-center gap-6 text-white/25 text-sm">
          <a href="#work" className="hover:text-white/50 transition-colors">Work</a>
          <a href="#services" className="hover:text-white/50 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-white/50 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white/50 transition-colors">Contact</a>
        </div>

        <p className="text-white/20 text-sm">
          © 2026 The Tilghman Group LLC · tilghman-group.com
        </p>
      </div>
    </footer>
  );
}
