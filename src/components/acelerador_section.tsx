import { Fragment } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Pillar = {
  letter: string;
  title: string;
  benefit: string;
  result?: boolean;
};

const pillars: Pillar[] = [
  { letter: 'V', title: 'Visão Estratégica', benefit: 'Saber exatamente para onde ir.' },
  { letter: 'E', title: 'Estrutura Inteligente', benefit: 'Processos que rodam sem você.' },
  { letter: 'L', title: 'Liderança que Desenvolve', benefit: 'Um time que cresce sozinho.' },
  { letter: 'T', title: 'Transformação Financeira', benefit: 'Números que viram decisão.' },
  { letter: 'E', title: 'Experiência do Cliente', benefit: 'Clientes que voltam e indicam.' },
  {
    letter: 'N',
    title: 'Negócio com Resultado',
    benefit: 'Crescimento previsível e escalável.',
    result: true,
  },
];

export default function AceleradorSection() {
  return (
    <section
      aria-label="Método Velten"
      className="relative overflow-hidden bg-[#0A0F1E] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[#404D74]/20 blur-[150px]" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[24rem] w-[24rem] rounded-full bg-[#CEBEA6]/[0.07] blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-24 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-6 text-base font-semibold uppercase tracking-[0.2em] text-[#CEBEA6]/70 sm:text-[1.0625rem]">
            Método Velten
          </p>
          <h2
            className="font-serif font-bold text-[#FCFBF8] [text-wrap:balance]"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: 1.04 }}
          >
            Saia da operação e{' '}
            <span className="italic text-[#CEBEA6]">acelere</span> o seu negócio.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-[#F6F1F1]/65">
            Seis pilares que levam a sua empresa a um só lugar: resultado.
          </p>
          <div className="mt-10">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-b from-[#EFE5D9] to-[#CEBEA6] px-9 py-5 text-lg font-semibold text-[#111729] transition-all hover:from-[#FCFBF8] hover:to-[#EFE5D9]"
              style={{ boxShadow: '0 0 45px -8px rgba(206,190,166,0.55)' }}
            >
              Quero acelerar meu negócio
              <ArrowUpRight
                className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </div>

        <div className="w-full rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 sm:p-9">
          <div className="flex flex-col">
            {pillars.map((pillar, index) => (
              <Fragment key={`${pillar.letter}-${index}`}>
                {pillar.result && (
                  <div className="flex items-stretch">
                    <div className="flex w-14 shrink-0 items-center justify-center py-1.5">
                      <span className="text-2xl font-bold leading-none text-[#CEBEA6]/80">=</span>
                    </div>
                    <div className="flex-1 border-l border-[#CEBEA6]/20" />
                  </div>
                )}
                <div className="flex items-stretch">
                  <div className="flex w-14 shrink-0 items-center justify-center">
                    {pillar.result ? (
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#EFE5D9] to-[#CEBEA6] font-serif text-xl font-bold text-[#111729]">
                        {pillar.letter}
                      </span>
                    ) : (
                      <span className="font-serif text-2xl font-bold text-[#CEBEA6]">
                        {pillar.letter}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 border-l border-[#CEBEA6]/20 py-4 pl-6">
                    <p
                      className={`text-base font-semibold leading-tight sm:text-lg ${
                        pillar.result ? 'text-[#CEBEA6]' : 'text-[#FCFBF8]'
                      }`}
                    >
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-sm text-[#F6F1F1]/50">{pillar.benefit}</p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}