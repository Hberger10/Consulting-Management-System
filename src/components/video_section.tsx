'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

const serif = { fontFamily: "'Playfair Display', Georgia, serif" } as const;




export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="video"
      className="relative overflow-hidden bg-[#0A0F1E] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[8%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#404D74]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        

        <h2
          className="text-center text-4xl font-bold leading-[1.08] tracking-tight text-[#FCFBF8] [text-wrap:balance] lg:text-6xl"
          style={serif}
        >
          Conheça mais sobre a <span className="italic text-[#CEBEA6]">Velten</span>
          <br />e a <span className="italic text-[#CEBEA6]">Ane Caroline Velten</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[#F6F1F1]/60">
          Uma consultoria que transforma operações caóticas em máquinas
          previsíveis de crescimento.
        </p>

        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Reproduzir vídeo"
          className="group relative mx-auto mt-16 block aspect-video w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1020] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)]"
        >
          {!playing ? (
            <>
              
              <img
                src="/image/capa.jpg"
                alt="Capa do vídeo da Velten"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                draggable={false}
              />
              <span className="absolute inset-0 bg-[#0B0F1A]/30" />
              <span className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/55 via-transparent to-transparent" />

              <span className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-[#CEBEA6]/40 motion-reduce:hidden" />

              <span className="absolute left-1/2 top-1/2 grid h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-b from-[#EFE5D9] to-[#CEBEA6] text-[#111729] shadow-[0_18px_50px_-12px_rgba(206,190,166,0.6)] transition-transform group-hover:scale-105">
                <Play className="ml-1 h-8 w-8" fill="#111729" strokeWidth={1.5} />
              </span>

              <span className="absolute bottom-6 left-7 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#F6F1F1]/55">
                <span
                  className="grid h-[30px] w-[30px] place-items-center rounded-lg border border-[#CEBEA6]/40 bg-gradient-to-br from-[#404D74]/40 to-[#111729] font-bold text-[#CEBEA6]"
                  style={serif}
                >
                  V
                </span>
                Palestra · Velten
              </span>
            </>
          ) : (
            <iframe
              title="Vídeo Velten"
              src="https://www.youtube.com/embed/J6ZD6wmWp7o?autoplay=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          )}
        </button>
      </div>
    </section>
  );
}