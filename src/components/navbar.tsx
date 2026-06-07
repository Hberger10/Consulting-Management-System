'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Lock, ArrowRight } from 'lucide-react';


const navLinks = [
  { label: 'Pilares', href: '#servicos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Plataforma', href: '#plataforma' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b backdrop-blur-xl transition-colors duration-300 ${
          scrolled
            ? 'border-white/10 bg-[#111729]/80'
            : 'border-transparent bg-[#111729]/40'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="group flex select-none flex-col items-start leading-none">
  <span
    className="bg-gradient-to-b from-[#FCFBF8] via-[#EFE5D9] to-[#CEBEA6] bg-clip-text text-transparent"
    style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 500,
      fontSize: '25px',
      letterSpacing: '0.36em',
      textIndent: '0.36em',
    }}
  >
    VELTEN
  </span>
  <span className="mt-1.5 flex w-full items-center gap-2">
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CEBEA6]/50 to-transparent" />
    <span
      className="whitespace-nowrap font-medium uppercase text-[#CEBEA6]"
      style={{ fontSize: '8px', letterSpacing: '0.42em', textIndent: '0.42em' }}
    >
      Consultoria Empresarial
    </span>
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CEBEA6]/50 to-transparent" />
  </span>
</Link>

            <div className="hidden items-center gap-9 text-sm font-medium text-[#F6F1F1]/70 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="transition-colors hover:text-[#CEBEA6]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="/login"
                className="flex items-center gap-1.5 text-sm font-medium text-[#F6F1F1]/60 transition-colors hover:text-[#FCFBF8]"
              >
                <Lock className="h-4 w-4" strokeWidth={1.75} />
                Área do Cliente
              </Link>
              <a
                href="#contato"
                onClick={(e) => handleAnchor(e, '#contato')}
                className="rounded-full bg-gradient-to-b from-[#EFE5D9] to-[#CEBEA6] px-5 py-2.5 text-sm font-semibold text-[#111729] shadow-lg shadow-[#CEBEA6]/20 transition-all hover:from-[#FCFBF8] hover:to-[#EFE5D9]"
              >
                Falar com Consultor
              </a>
            </div>

            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-[#FCFBF8] transition-colors hover:border-[#CEBEA6]/40 md:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`overflow-hidden border-b border-white/10 bg-[#111729]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className="border-b border-white/5 py-3 text-[#F6F1F1]/80 transition-colors hover:text-[#CEBEA6]"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 text-[#F6F1F1]/80 transition-colors hover:text-[#CEBEA6]"
          >
            <Lock className="h-4 w-4" strokeWidth={1.75} />
            Área do Cliente
          </Link>
          <a
            href="#contato"
            onClick={(e) => handleAnchor(e, '#contato')}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#EFE5D9] to-[#CEBEA6] px-5 py-3 font-semibold text-[#111729]"
          >
            Falar com Consultor
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </header>
  );
}
