import type { Metadata } from 'next';
import CulturaContent from './cultura_content';

export const metadata: Metadata = {
  title: 'Cultura Organizacional · Velten',
  description:
    'Soluções estratégicas para construir empresas mais produtivas, humanas e sustentáveis. Conheça o propósito, a missão, a visão, os valores e os cinco pilares da Velten.',
};

export default function CulturaPage() {
  return (
    <main className="min-h-screen">
      <CulturaContent />
    </main>
  );
}
