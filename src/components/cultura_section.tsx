import { Sparkles, HeartHandshake, Compass, Users, Target } from 'lucide-react';

const valores = [
  {
    icon: Compass,
    title: 'Clareza de propósito',
    description:
      'Cada decisão parte de uma direção bem definida, alinhada aos objetivos do negócio.',
  },
  {
    icon: HeartHandshake,
    title: 'Confiança e parceria',
    description:
      'Construímos relações de longo prazo, com transparência em cada etapa da jornada.',
  },
  {
    icon: Target,
    title: 'Excelência na execução',
    description:
      'Acreditamos que estratégia só gera valor quando vira ação consistente e mensurável.',
  },
  {
    icon: Users,
    title: 'Pessoas no centro',
    description:
      'Negócios são feitos por pessoas — desenvolvemos times tão fortes quanto os processos.',
  },
];

export default function CulturaSection() {
  return (
    <section
      id="cultura"
      aria-label="Cultura"
      className="relative overflow-hidden bg-[#111729] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute right-1/2 top-0 h-[28rem] w-[28rem] translate-x-1/2 rounded-full bg-[#CEBEA6]/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-[#F6F1F1]/70">
            <Sparkles className="h-4 w-4 text-[#CEBEA6]" strokeWidth={1.75} />
            Nossa cultura
          </div>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#FCFBF8] [text-wrap:balance] lg:text-5xl">
            Os princípios que guiam
            <br />
            cada parceria.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#F6F1F1]/60">
            Mais do que metodologia, a Velten é movida por valores que sustentam
            resultados duradouros para os negócios que acompanhamos.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-[#CEBEA6]/30"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#CEBEA6]/10">
                <Icon className="h-6 w-6 text-[#CEBEA6]" strokeWidth={1.6} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#FCFBF8]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#F6F1F1]/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
