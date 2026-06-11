export default function DepoimentosSection() {
  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos"
      className="relative overflow-hidden bg-gradient-to-b from-[#1A2235] to-[#111729] py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-[#404D74]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#CEBEA6]/80">
            Depoimentos
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#FCFBF8] [text-wrap:balance] lg:text-5xl">
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
            { id: 1, image: '/image/consultoria1.jpg', quote: '' },
            { id: 2, image: '/image/consultoria2.jpg', quote: '' },
            { id: 3, image: '/image/consultoria3.jpg', quote: '' },
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
                  <span className="font-serif grid h-10 w-10 place-items-center rounded-full border border-[#CEBEA6]/30 bg-[#CEBEA6]/10 text-[#CEBEA6]">
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
  );
}
