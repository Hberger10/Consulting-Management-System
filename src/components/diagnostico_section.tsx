import { CircleAlert } from 'lucide-react';

export default function DiagnosticoSection() {
  return (
    <section aria-label="Diagnóstico" className="w-full bg-[#0A0F1E] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#CEBEA6]/60">
            Diagnóstico
          </p>
          <h2 className="font-serif text-5xl font-black tracking-tighter text-[#FCFBF8] [text-wrap:balance] lg:text-6xl">
            Para quem é a{' '}
            <span className="italic text-[#CEBEA6]">Velten</span>?
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-zinc-400">
            Donos e gestores de empresas com equipe própria que buscam
            organização, método e crescimento escalável.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-10 lg:p-12">
            <h3 className="font-serif mb-8 border-l-2 border-[#CEBEA6] pl-5 text-2xl font-black tracking-tighter text-[#FCFBF8] lg:text-3xl">
              Isso acontece na<br />sua empresa?
            </h3>
            <ul className="space-y-6">
              {[
                'Processos desorganizados e dependência total do dono;',
                'Time sem autonomia ou iniciativa própria;',
                'Falta de clareza nas metas e indicadores;',
                'Crescimento travado por falta de estrutura.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CircleAlert className="mt-1 h-5 w-5 shrink-0 text-[#CEBEA6]" strokeWidth={1.5} />
                  <span className="text-lg leading-relaxed text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-10 lg:p-12">
            <h3 className="font-serif mb-8 border-l-2 border-[#CEBEA6] pl-5 text-2xl font-black tracking-tighter text-[#FCFBF8] lg:text-3xl">
              Você sofre com:
            </h3>
            <ul className="space-y-6">
              {[
                'Sobrecarga de trabalho e dificuldade de delegar;',
                'Incapacidade de tirar férias sem a empresa parar;',
                'Sensação de que o negócio não avança;',
                'Decisões tomadas no improviso, sem método.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CircleAlert className="mt-1 h-5 w-5 shrink-0 text-[#CEBEA6]" strokeWidth={1.5} />
                  <span className="text-lg leading-relaxed text-zinc-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
