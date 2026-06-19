'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Sprout,
  Workflow,
  Compass,
  TrendingUp,
  Leaf,
  type LucideIcon,
} from 'lucide-react';

type Pillar = {
  n: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    n: '01',
    title: 'Desenvolvimento Humano',
    Icon: Sprout,
    desc: 'Acreditamos no potencial das pessoas como força transformadora das organizações. Desenvolvemos talentos, fortalecemos relações e construímos times que crescem com propósito.',
  },
  {
    n: '02',
    title: 'Eficiência de Processos',
    Icon: Workflow,
    desc: 'Mapeamos, redesenhamos e implantamos processos que rodam com clareza e consistência — eliminando ruído e liberando a operação para escalar com previsibilidade.',
  },
  {
    n: '03',
    title: 'Liderança que Inspira',
    Icon: Compass,
    desc: 'Formamos líderes que desenvolvem pessoas, decidem com segurança e conduzem a mudança com clareza, autoridade e propósito.',
  },
  {
    n: '04',
    title: 'Performance Comercial',
    Icon: TrendingUp,
    desc: 'Estruturamos estratégias de vendas, captação e retenção que transformam esforço em resultado previsível e mensurável.',
  },
  {
    n: '05',
    title: 'Excelência Sustentável',
    Icon: Leaf,
    desc: 'Geramos resultados duradouros, que se sustentam ao longo do tempo, com qualidade orientada por um propósito maior.',
  },
];

const values: { n: string; title: string; desc: string }[] = [
  { n: '01', title: 'Excelência com propósito', desc: 'A mais alta qualidade, orientada por um propósito maior.' },
  { n: '02', title: 'Desenvolvimento humano', desc: 'O potencial das pessoas como força transformadora.' },
  { n: '03', title: 'Praticidade', desc: 'Soluções adaptadas à realidade de cada cliente.' },
  { n: '04', title: 'Ética e parceria', desc: 'Relações de confiança, transparência e compromisso.' },
  { n: '05', title: 'Foco em resultado', desc: 'Cada ação voltada a impacto real e mensurável.' },
  { n: '06', title: 'Sustentabilidade', desc: 'Resultados duradouros ao longo do tempo.' },
];

export default function CulturaContent() {
  const [active, setActive] = useState(0);
  const current = pillars[active];
  const CurrentIcon = current.Icon;

  return (
    <div className="bg-[#0A0F1E] font-sans text-[#F6F1F1] antialiased">
      
      <section className="relative flex min-h-[38.75rem] items-center overflow-hidden border-b border-white/[0.07]">
        
        <img
          src="/image/cultura.jpg"
          alt="Equipe Velten em treinamento"
          className="absolute inset-0 h-full w-full object-cover grayscale-[0.5] brightness-[0.8] contrast-[1.05]"
        />
        
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/95 via-[#0A0F1E]/80 to-[#0A0F1E]/30" />
        
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#0A0F1E_0%,transparent_38%,transparent_62%,#0A0F1E_100%)]" />
        
        <div className="pointer-events-none absolute -left-24 -top-28 h-[26rem] w-[26rem] rounded-full bg-[#404D74]/20 blur-[150px]" />

        <div className="relative flex w-full max-w-[82.5rem] flex-col justify-center px-8 py-[4.5rem] lg:px-[3.75rem]">
          <div className="absolute left-8 top-12 flex items-center gap-3 lg:left-[3.75rem]">
            <span className="font-serif text-[1.375rem] font-semibold text-[#FCFBF8]">Velten</span>
            <span className="border-l border-white/25 pl-[0.6875rem] text-[0.65625rem] font-semibold tracking-[0.26em] text-[#F6F1F1]/60">
              CONSULTORIA &amp; TREINAMENTOS
            </span>
          </div>

          <div className="max-w-2xl">
            <p className="mb-[1.625rem] text-xs font-bold tracking-[0.3em] text-[#CEBEA6]/80">
              CULTURA ORGANIZACIONAL
            </p>
            <h1 className="font-serif text-[clamp(2.375rem,4.4vw,3.375rem)] font-medium leading-[1.07] tracking-[-0.012em] text-[#FCFBF8] [text-wrap:balance]">
              Construímos empresas mais{' '}
              <span className="italic text-[#CEBEA6]">produtivas, humanas</span> e sustentáveis.
            </h1>
            <p className="mt-[1.625rem] max-w-[42ch] text-[1.0625rem] leading-relaxed text-[#F6F1F1]/[0.7]">
              Consultoria e treinamentos que desenvolvem pessoas e fortalecem resultados.
            </p>
            <div className="mt-10">
              <a
                href="#contato"
                className="inline-flex items-center gap-[0.6875rem] rounded-[0.875rem] bg-gradient-to-b from-[#EFE5D9] to-[#CEBEA6] px-[1.875rem] py-[1.0625rem] text-base font-bold text-[#111729] transition-all hover:from-[#FCFBF8] hover:to-[#EFE5D9]"
                style={{ boxShadow: '0 0 45px -8px rgba(206,190,166,0.55)' }}
              >
                Agendar Diagnóstico Gratuito
                <ArrowRight className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <section className="relative mx-auto max-w-[82.5rem] border-b border-white/[0.07] px-8 py-20 lg:px-[3.75rem]">
        <div className="mb-[3.125rem] flex items-baseline gap-3.5">
          <span className="text-xs font-bold tracking-[0.3em] text-[#CEBEA6]/80">O QUE NOS MOVE</span>
          <div className="h-px flex-1 bg-[#CEBEA6]/25" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border-white/[0.08] md:border-r md:pr-10">
            <div className="mb-[1.125rem] font-serif text-[1.0625rem] italic text-[#CEBEA6]">Propósito</div>
            <p className="text-[0.96875rem] leading-relaxed text-[#F6F1F1]/[0.66]">
              Porque o sucesso das empresas nasce do potencial das pessoas. Existimos para
              transformar organizações por meio de uma cultura de excelência.
            </p>
          </div>
          <div className="mt-10 border-white/[0.08] md:mt-0 md:border-r md:px-10">
            <div className="mb-[1.125rem] font-serif text-[1.0625rem] italic text-[#CEBEA6]">Abordagem</div>
            <p className="text-[0.96875rem] leading-relaxed text-[#F6F1F1]/[0.66]">
              Prática, estratégica e personalizada — adaptamos consultorias e treinamentos à
              realidade de cada cliente.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:pl-10">
            <div className="mb-[1.125rem] font-serif text-[1.0625rem] italic text-[#CEBEA6]">Soluções</div>
            <ul className="flex flex-col gap-[0.6875rem]">
              {[
                'Consultoria empresarial',
                'Treinamentos em liderança e vendas',
                'Diagnóstico organizacional e KPIs',
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-snug text-[#F6F1F1]/[0.74]">
                  <span className="text-[#CEBEA6]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      
      <section className="relative border-b border-white/[0.07] bg-[#111729] px-8 py-20 lg:px-[3.75rem]">
        <div className="mx-auto max-w-[82.5rem]">
          <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="mb-[1.125rem] text-[0.6875rem] font-bold tracking-[0.3em] text-[#CEBEA6]/80">MISSÃO</p>
              <p className="font-serif text-[1.5625rem] font-normal leading-snug text-[#FCFBF8] [text-wrap:pretty]">
                Apoiar gestores e equipes na construção de organizações mais{' '}
                <span className="italic text-[#CEBEA6]">produtivas, humanas e sustentáveis</span>.
              </p>
            </div>
            <div>
              <p className="mb-[1.125rem] text-[0.6875rem] font-bold tracking-[0.3em] text-[#CEBEA6]/80">VISÃO</p>
              <p className="font-serif text-[1.5625rem] font-normal leading-snug text-[#FCFBF8] [text-wrap:pretty]">
                Ser <span className="italic text-[#CEBEA6]">referência</span> em desenvolvimento
                organizacional, transformando pessoas, processos e resultados.
              </p>
            </div>
          </div>

          <p className="mb-[1.625rem] text-[0.6875rem] font-bold tracking-[0.3em] text-[#CEBEA6]/80">VALORES</p>
          <div className="grid grid-cols-1 gap-x-[2.125rem] gap-y-[1.625rem] sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.n} className="flex items-start gap-3.5">
                <span className="pt-px font-serif text-[0.9375rem] italic text-[#CEBEA6]">{v.n}</span>
                <div>
                  <div className="mb-[0.3125rem] text-[0.9375rem] font-bold text-[#FCFBF8]">{v.title}</div>
                  <div className="text-[0.84375rem] leading-relaxed text-[#F6F1F1]/50">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="relative overflow-hidden border-b border-white/[0.07] px-8 py-20 lg:px-[3.75rem]">
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-[24rem] w-[24rem] rounded-full bg-[#CEBEA6]/[0.07] blur-[150px]" />
        <div className="relative mx-auto max-w-[82.5rem]">
          <div className="mb-11 flex items-end justify-between">
            <h2 className="font-serif text-[clamp(1.875rem,3.4vw,2.5rem)] font-medium leading-[1.05] text-[#FCFBF8]">
              Os cinco <span className="italic text-[#CEBEA6]">pilares</span>
            </h2>
            <span className="hidden text-xs tracking-[0.24em] text-[#F6F1F1]/40 sm:block">
              CLIQUE PARA EXPLORAR
            </span>
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-[0.875rem] border border-white/[0.09] lg:grid-cols-2">
            
            <div className="flex flex-col border-white/[0.09] lg:border-r">
              {pillars.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.n}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`flex items-center gap-[1.125rem] border-b border-white/[0.06] px-[1.875rem] py-6 text-left transition-colors ${
                      isActive ? 'bg-[#CEBEA6]/[0.07]' : 'bg-transparent hover:bg-white/[0.02]'
                    }`}
                  >
                    <span
                      className={`min-w-[2.125rem] font-serif text-[1.3125rem] italic transition-colors ${
                        isActive ? 'text-[#CEBEA6]' : 'text-[#F6F1F1]/30'
                      }`}
                    >
                      {p.n}
                    </span>
                    <span
                      className={`flex-1 text-[1.0625rem] font-semibold transition-colors ${
                        isActive ? 'text-[#FCFBF8]' : 'text-[#F6F1F1]/55'
                      }`}
                    >
                      {p.title}
                    </span>
                    <span
                      className={`h-[0.4375rem] w-[0.4375rem] rounded-full transition-colors ${
                        isActive ? 'bg-[#CEBEA6]' : 'bg-transparent'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            
            <div className="flex min-h-[21.25rem] flex-col justify-center bg-[#111729] px-11 py-[2.875rem]">
              <div className="mb-[1.625rem] text-[#CEBEA6]">
                <CurrentIcon className="h-8 w-8" strokeWidth={1.6} />
              </div>
              <h3 className="mb-4 font-serif text-[clamp(1.625rem,2.6vw,2rem)] font-medium leading-[1.12] text-[#FCFBF8]">
                {current.title}
              </h3>
              <p className="text-base leading-relaxed text-[#F6F1F1]/[0.66] [text-wrap:pretty]">
                {current.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contato" className="relative overflow-hidden bg-[#111729] px-8 py-24 text-center lg:px-[3.75rem]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18.75rem] w-[37.5rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(206,190,166,0.12),transparent_65%)]" />
        <div className="relative mx-auto max-w-[47.5rem]">
          <p className="mb-6 text-xs font-bold tracking-[0.32em] text-[#CEBEA6]/85">A PROMESSA VELTEN</p>
          <h2 className="font-serif text-[clamp(2.125rem,4.6vw,3.25rem)] font-medium leading-[1.1] text-[#FCFBF8]">
            Desenvolvendo pessoas.
            <br />
            <span className="italic text-[#CEBEA6]">Fortalecendo resultados.</span>
          </h2>
          <p className="mx-auto mt-[1.625rem] max-w-[42ch] text-[1.03125rem] leading-relaxed text-[#F6F1F1]/60">
            Vamos construir juntos uma empresa mais produtiva, humana e sustentável.
          </p>
          <div className="mt-[2.375rem]">
            <a
              href="#contato"
              className="inline-flex items-center gap-[0.6875rem] rounded-[0.875rem] bg-gradient-to-b from-[#EFE5D9] to-[#CEBEA6] px-8 py-[1.0625rem] text-base font-bold text-[#111729] transition-all hover:from-[#FCFBF8] hover:to-[#EFE5D9]"
              style={{ boxShadow: '0 0 45px -8px rgba(206,190,166,0.55)' }}
            >
              Agendar Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
