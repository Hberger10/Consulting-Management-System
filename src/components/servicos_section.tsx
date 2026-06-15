import { TrendingUp, Check, GitBranch, Rocket, Target, Users, Brain } from 'lucide-react';

export default function ServicosSection() {
  return (
    <section
      id="servicos"
      aria-label="Serviços"
      className="relative bg-gradient-to-b from-[#111729] to-[#1A2235] py-24 lg:py-28"
    >
      <div id="Serviços" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#CEBEA6]/80">
            Os dois pilares
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#FCFBF8] [text-wrap:balance] lg:text-5xl">
            Estrutura que organiza.
            <br />
            Estratégia que escala.
          </h2>
          <p className="mt-5 text-lg text-[#F6F1F1]/60">
            Duas frentes de trabalho que transformam a operação caótica em uma
            máquina previsível de crescimento.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#262D41] to-[#111729] p-8 transition-colors hover:border-[#CEBEA6]/30 lg:col-span-7 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#404D74]/20 blur-3xl" />
            <span className="relative mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-[#CEBEA6]/10 text-[#CEBEA6]">
              <GitBranch className="h-7 w-7" strokeWidth={1.6} />
            </span>
            <h3 className="font-serif relative mb-3 text-3xl font-bold text-[#FCFBF8]">
              Eficiência Operacional
              <br />e Processos
            </h3>
            <p className="relative mb-7 max-w-lg leading-relaxed text-[#F6F1F1]/65">
              Mapeamento de processos, organograma estruturado e rotinas de
              gestão que acabam com o apagamento de incêndios diário. A empresa
              passa a funcionar sem depender da presença constante do fundador.
            </p>
            <ul className="relative grid gap-3 text-sm text-[#F6F1F1]/70 sm:grid-cols-2">
              {[
                'Mapeamento de processos',
                'Organograma estruturado',
                'Rotinas de gestão',
                'Indicadores e controle',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#CEBEA6]" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-[#CEBEA6]/20 bg-gradient-to-br from-[#EFE5D9] to-[#CEBEA6] p-8 transition-all hover:shadow-2xl hover:shadow-[#CEBEA6]/10 lg:col-span-5 lg:p-10">
            <span className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-[#111729]/10 text-[#111729]">
              <Rocket className="h-7 w-7" strokeWidth={1.6} />
            </span>
            <h3 className="font-serif mb-3 text-3xl font-bold text-[#111729]">
              Estratégia de Crescimento e Alavancagem
            </h3>
            <p className="mb-7 leading-relaxed text-[#111729]/70">
              Definição de metas, escala do negócio, desenvolvimento de
              liderança e alinhamento da mentalidade do empresário para
              sustentar o crescimento.
            </p>
            <ul className="space-y-3 text-sm text-[#111729]/80">
              {[
                { icon: Target, label: 'Definição de metas' },
                { icon: TrendingUp, label: 'Escala do negócio' },
                { icon: Users, label: 'Liderança e times' },
                { icon: Brain, label: 'Mentalidade do empresário' },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#111729]" strokeWidth={1.75} />
                  {label}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
