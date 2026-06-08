import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import Navbar from '../../components/navbar';
import VeltenStats from '../../components/navbar2';
import VideoSection from '../../components/video_section';
import {
  TrendingUp,
  Check,
  GitBranch,
  Rocket,
  Target,
  Users,
  Brain,
  ShieldCheck,
  Lock,
  FolderLock,
  FileCheck2,
  FileLock2,
  Download,
  Mail,
  Phone,
  CircleAlert,
} from 'lucide-react';

const serif = { fontFamily: "'Playfair Display', Georgia, serif" } as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111729] font-sans text-[#F6F1F1] antialiased">
      <Navbar />

      <section
        id="top"
        className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#111729] lg:min-h-screen"
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <img
            src="image/fundadora.jpg"
            alt="Fundadora e CEO da Velten"
            className="h-full w-full object-cover object-[center_20%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #111729 0%, rgba(17,23,41,0.85) 28%, rgba(17,23,41,0.25) 60%, rgba(17,23,41,0) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #111729 0%, rgba(17,23,41,0) 22%, rgba(17,23,41,0) 72%, #111729 100%)',
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-8 lg:py-0">
          <div className="max-w-2xl">
            <h1
              className="font-bold text-[#FCFBF8]"
              style={{ ...serif, fontSize: 'clamp(3rem, 7vw, 5.25rem)', lineHeight: 1.04 }}
            >
              Conheça
              <br />
              <span className="text-[#CEBEA6]"> Ane Caroline Velten</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#F6F1F1]/75 lg:text-xl">
              Fundadora e CEO da Velten,
              <br className="hidden sm:block" /> ajudando empresários a estruturar
              processos e escalar seus negócios.
            </p>
            <div className="mt-10">
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-b from-[#EFE5D9] to-[#CEBEA6] px-9 py-5 text-lg font-semibold text-[#111729] transition-all hover:from-[#FCFBF8] hover:to-[#EFE5D9]"
                style={{ boxShadow: '0 0 45px -8px rgba(206,190,166,0.55)' }}
              >
                Quero organizar meu negócio
                <ArrowUpRight
                  className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <VeltenStats />
      <VideoSection />
      <section className="w-full bg-[#0A0F1E] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#CEBEA6]/60">
              Diagnóstico
            </p>
            <h2
              className="text-5xl font-black tracking-tighter text-[#FCFBF8] [text-wrap:balance] lg:text-6xl"
              style={serif}
            >
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
              <h3
                className="mb-8 border-l-2 border-[#CEBEA6] pl-5 text-2xl font-black tracking-tighter text-[#FCFBF8] lg:text-3xl"
                style={serif}
              >
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
                    <CircleAlert
                      className="mt-1 h-5 w-5 shrink-0 text-[#CEBEA6]"
                      strokeWidth={1.5}
                    />
                    <span className="text-lg leading-relaxed text-zinc-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-10 lg:p-12">
              <h3
                className="mb-8 border-l-2 border-[#CEBEA6] pl-5 text-2xl font-black tracking-tighter text-[#FCFBF8] lg:text-3xl"
                style={serif}
              >
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
                    <CircleAlert
                      className="mt-1 h-5 w-5 shrink-0 text-[#CEBEA6]"
                      strokeWidth={1.5}
                    />
                    <span className="text-lg leading-relaxed text-zinc-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="relative bg-gradient-to-b from-[#111729] to-[#1A2235] py-24 lg:py-28"
      >
        <div id="metodo" className="absolute -top-20" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#CEBEA6]/80">
              Os dois pilares
            </p>
            <h2
              className="text-4xl font-bold leading-tight text-[#FCFBF8] [text-wrap:balance] lg:text-5xl"
              style={serif}
            >
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
              <h3
                className="relative mb-3 text-3xl font-bold text-[#FCFBF8]"
                style={serif}
              >
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
              <h3
                className="mb-3 text-3xl font-bold text-[#111729]"
                style={serif}
              >
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

      <section
        id="depoimentos"
        className="relative overflow-hidden bg-gradient-to-b from-[#1A2235] to-[#111729] py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-[#404D74]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#CEBEA6]/80">
              Depoimentos
            </p>
            <h2
              className="text-4xl font-bold leading-tight text-[#FCFBF8] [text-wrap:balance] lg:text-5xl"
              style={serif}
            >
              Empresas que saíram do caos
              <br />e passaram a crescer com método.
            </h2>
            <p className="mt-5 text-lg text-[#F6F1F1]/60">
              Resultados reais de quem estruturou processos, formou time e ganhou
              previsibilidade ao lado da Velten.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                id: 1,
                image: '/image/consultoria1.jpg',
                quote:
                  '',
              },
              {
                id: 2,
                image: '/image/consultoria2.jpg',
                quote:
                  '',
              },
              {
                id: 3,
                image: '/image/consultoria3.jpg',
                quote:
                  '',
              },
            ].map(({ id, image, quote }) => (
              <figure
                key={id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#262D41] to-[#111729]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={image}
                    alt={`Equipe da Empresa ${id}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111729]/80 via-[#111729]/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <blockquote className="flex-1 leading-relaxed text-[#F6F1F1]/75">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-full border border-[#CEBEA6]/30 bg-[#CEBEA6]/10 text-[#CEBEA6]"
                      style={serif}
                    >
                      {id}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-[#FCFBF8]">Empresa {id}</p>
                      <p className="text-xs text-[#F6F1F1]/50">Diretoria · Cliente Velten</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="plataforma"
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
              <h2
                className="text-4xl font-bold leading-tight text-[#FCFBF8] [text-wrap:balance] lg:text-5xl"
                style={serif}
              >
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
                    <Icon
                      className="mx-auto mb-2 h-6 w-6 text-[#CEBEA6]"
                      strokeWidth={1.6}
                    />
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

      <footer id="contato" className="border-t border-white/10 bg-[#111729]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  className="grid h-8 w-8 place-items-center rounded-md border border-[#CEBEA6]/40 bg-gradient-to-br from-[#404D74]/40 to-[#111729] text-lg font-bold text-[#CEBEA6]"
                  style={serif}
                >
                  V
                </span>
                <span
                  className="text-xl font-bold tracking-[0.18em] text-[#FCFBF8]"
                  style={serif}
                >
                  VELTEN
                </span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[#F6F1F1]/50">
                Consultoria de gestão empresarial, organização de processos e
                alavancagem de negócios. Estrutura, método e direção para
                empresas que querem crescer com clareza.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#F6F1F1]/40">
                Navegação
              </p>
              <ul className="space-y-2.5 text-sm text-[#F6F1F1]/60">
                <li>
                  <a href="#servicos" className="transition-colors hover:text-[#CEBEA6]">
                    Pilares
                  </a>
                </li>
                <li>
                  <a href="#metodo" className="transition-colors hover:text-[#CEBEA6]">
                    Método
                  </a>
                </li>
                <li>
                  <a href="#plataforma" className="transition-colors hover:text-[#CEBEA6]">
                    Plataforma
                  </a>
                </li>
                <li>
                  <Link href="/login" className="transition-colors hover:text-[#CEBEA6]">
                    Área do Cliente
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-widest text-[#F6F1F1]/40">
                Contato
              </p>
              <ul className="space-y-2.5 text-sm text-[#F6F1F1]/60">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#CEBEA6]/70" strokeWidth={1.75} />
                  contato@velten.com.br
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#CEBEA6]/70" strokeWidth={1.75} />
                  +55 (00) 0000-0000
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#F6F1F1]/40 sm:flex-row">
            <p>© 2026 Velten Consultoria e Treinamentos. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#F6F1F1]/70">
                Privacidade
              </a>
              <a href="#" className="hover:text-[#F6F1F1]/70">
                Termos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
