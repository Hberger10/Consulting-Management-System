import Link from 'next/link';

export default function VeltenStats() {
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
