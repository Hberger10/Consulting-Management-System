import Link from 'next/link';
import { ShieldCheck, Lock, FolderLock, FileCheck2, FileLock2, Download } from 'lucide-react';

export default function PlataformaSection() {
  return (
    <section
      id="plataforma"
      aria-label="Plataforma"
      className="relative overflow-hidden bg-[#0B0F1A] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#404D74]/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-[#F6F1F1]/70">
              <ShieldCheck className="h-4 w-4 text-[#CEBEA6]" strokeWidth={1.75} />
              Acesso exclusivo do mentorando
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-[#FCFBF8] [text-wrap:balance] lg:text-5xl">
              A sua empresa, organizada
              <br />
              em um ambiente criptografado.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F6F1F1]/60">
              Clientes de consultoria recebem acesso a uma área segura e
              exclusiva para baixar os{' '}
              <span className="text-[#FCFBF8]">playbooks de processos</span>,
              ferramentas e planos de ação construídos para o seu negócio.
            </p>

            <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                { icon: Lock, label: 'Criptografia ponta a ponta' },
                { icon: FolderLock, label: 'Playbooks privados' },
                { icon: FileCheck2, label: 'Planos de ação' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <Icon className="mx-auto mb-2 h-6 w-6 text-[#CEBEA6]" strokeWidth={1.6} />
                  <p className="text-xs text-[#F6F1F1]/60">{label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/login"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#EFE5D9] to-[#CEBEA6] px-7 py-3.5 text-base font-semibold text-[#111729] shadow-xl shadow-[#CEBEA6]/20 transition-all hover:from-[#FCFBF8] hover:to-[#EFE5D9]"
            >
              <Lock className="h-4 w-4" strokeWidth={1.75} />
              Acessar Área do Cliente
            </Link>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-gradient-to-br from-[#262D41] to-[#0B0F1A] p-8 shadow-[0_0_120px_-30px_rgba(91,104,141,0.6)]">
              <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl border border-[#CEBEA6]/30 bg-gradient-to-br from-[#CEBEA6]/20 to-transparent text-[#CEBEA6]">
                <ShieldCheck className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <FileLock2 className="h-5 w-5 text-[#F6F1F1]/60" strokeWidth={1.6} />
                  <span className="flex-1 text-sm text-[#F6F1F1]/80">
                    Playbook · Processos.pdf
                  </span>
                  <Download className="h-4 w-4 text-[#CEBEA6]" strokeWidth={1.75} />
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <FileLock2 className="h-5 w-5 text-[#F6F1F1]/60" strokeWidth={1.6} />
                  <span className="flex-1 text-sm text-[#F6F1F1]/80">
                    Plano de Ação · Q2.xlsx
                  </span>
                  <Download className="h-4 w-4 text-[#CEBEA6]" strokeWidth={1.75} />
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 opacity-60">
                  <Lock className="h-5 w-5 text-[#F6F1F1]/40" strokeWidth={1.6} />
                  <span className="flex-1 text-sm text-[#F6F1F1]/50">
                    Ferramentas de Gestão
                  </span>
                  <span className="text-[11px] text-[#CEBEA6]/80">premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
