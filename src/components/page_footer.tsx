import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function PageFooter() {
  return (
    <footer id="contato" aria-label="Rodapé" className="border-t border-white/10 bg-[#111729]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="font-serif grid h-8 w-8 place-items-center rounded-md border border-[#CEBEA6]/40 bg-gradient-to-br from-[#404D74]/40 to-[#111729] text-lg font-bold text-[#CEBEA6]">
                V
              </span>
              <span className="font-serif text-xl font-bold tracking-[0.18em] text-[#FCFBF8]">
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
  );
}
