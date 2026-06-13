import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import Navbar from '../../components/navbar';
import VeltenStats from '../../components/velten_stats';
import VideoSection from '../../components/video_section';
import DiagnosticoSection from '../../components/diagnostico_section';
import ServicosSection from '../../components/servicos_section';
import PlataformaSection from '../../components/plataforma_section';
import PageFooter from '../../components/page_footer';
import AceleradorSection from '../../components/acelerador_section';
import MediaCarouselSection from '../../components/carousel_section';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111729] font-sans text-[#F6F1F1] antialiased">
      <Navbar />

      <section
        id="top"
        aria-label="Apresentação"
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
              className="font-serif font-bold text-[#FCFBF8]"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.25rem)', lineHeight: 1.04 }}
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
      <DiagnosticoSection />
      
      <ServicosSection />
      <AceleradorSection />
      <MediaCarouselSection />
      <PlataformaSection />
      
      <PageFooter />
    </div>
  );
}
