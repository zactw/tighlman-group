import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="text-[#f59e0b] text-base font-bold">TG</span>
          <span className="text-white/40 text-base">·</span>
          <span className="text-white/60 text-base">The Tighlman Group LLC</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-base">
          <a href="/#services" className="hover:text-white transition-colors">Services</a>
          <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        </div>

        <p className="text-white/40 text-sm">
          © 2026 The Tighlman Group LLC
        </p>
      </div>
    </footer>
  );
}
