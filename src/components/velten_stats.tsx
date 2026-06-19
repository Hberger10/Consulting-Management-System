'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Stat = {
  target: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { target: 120, label: 'Empresas estruturadas em todo o Brasil.' },
  { target: 900, label: 'Processos mapeados e implementados.' },
  { target: 20, suffix: ' mil', label: 'Horas de consultoria e mentoria aplicadas.' },
];

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.target, start);
  return (
    <div className="flex gap-5">
      <span className="mt-2 block h-16 w-1 shrink-0 -skew-x-12 bg-gradient-to-b from-[#CEBEA6] to-[#EFE5D9]" />
      <div>
        <p className="font-serif text-5xl font-bold leading-none text-[#FCFBF8] lg:text-6xl">
          <span className="text-[#CEBEA6]">+</span>
          {value.toLocaleString('pt-BR')}
          {stat.suffix && <span className="text-[#FCFBF8]">{stat.suffix}</span>}
        </p>
        <p className="mt-4 max-w-[14rem] text-base leading-relaxed text-[#F6F1F1]/65">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export default function VeltenStats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section aria-label="Estatísticas da Velten" className="relative overflow-hidden bg-[#0B0F1A] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/image/ane3.jpg"
          alt=""
          className="absolute right-0 top-0 h-full w-full object-cover object-[center_35%] opacity-65 grayscale lg:w-2/3"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-[#0B0F1A]/50" />
      </div>
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[#404D74]/20 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-serif max-w-3xl text-4xl font-bold leading-[1.05] text-[#FCFBF8] [text-wrap:balance] sm:text-5xl lg:text-6xl">
          A Velten está{' '}
          <span className="italic text-[#CEBEA6]">estruturando</span> o
          empreendedorismo no Brasil.
        </h2>

        <div ref={ref} className="mt-16 grid max-w-4xl gap-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={inView} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/cultura"
            className="group inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors duration-200 hover:text-[#C5A880]"
          >
            Conheça o método e os pilares por trás dos nossos resultados
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
