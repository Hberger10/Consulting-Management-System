'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Slide = {
  id: number;
  title: string;
  time: string;
  image: string;
  logo?: string;
  logoScale?: number;
  company?: string;
};


const SLIDES: Slide[] = [
  { id: 1, title: 'Estruturamos processos e ganhamos previsibilidade para crescer com método.', time: '5 mins ago', image: '/image/consultoria1.jpg', logo: '/image/maisestudio.jpg', company: 'Mais Studio' },
  { id: 2, title: '...', time: '35 mins ago', image: '/image/consultoria2.jpg', logo: '/image/iluminacao.jpg', logoScale: 1.6, company: 'Dragão Iluminação' },
  { id: 3, title: '...', time: '1 hour ago', image: '/image/consultoria3.jpg', logo: '/image/material.jpg', company: 'Material' },
  { id: 4, title: '...', time: 'Yesterday', image: '/image/consultoria1.jpg', logo: '/image/maisestudio.jpg', company: 'Mais Studio' },
  { id: 5, title: '...', time: '2 days ago', image: '/image/consultoria2.jpg', logo: '/image/iluminacao.jpg', logoScale: 1.6, company: 'Dragão Iluminação' },
  { id: 6, title: '...', time: '3 days ago', image: '/image/consultoria3.jpg', logo: '/image/material.jpg', company: 'Material' },
];

const DURATION = 5000;
const TRANSITION_MS = 600;
const ACTIVE_W = 680;
const PEEK_W = 300;
const GAP = 8;
const STEP = PEEK_W + GAP;
const DRAG_THRESHOLD = 60;
const CARD_H = 560;


const CLONES = 3;
const RENDER_SLIDES: Slide[] = [...SLIDES, ...SLIDES.slice(0, CLONES)];


function BrandLogo({ logo, logoScale = 1 }: { logo?: string; logoScale?: number }) {
  if (logo) {
    return (
      <div className="absolute left-5 top-5 flex h-[38px] items-center overflow-hidden rounded-[10px] bg-white/95 px-[15px] shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
        <img
          src={logo}
          alt=""
          className="h-[22px] w-auto object-contain"
          style={{ transform: `scale(${logoScale})`, transformOrigin: 'left center' }}
          draggable={false}
        />
      </div>
    );
  }

  return (
    <div className="absolute left-5 top-5 flex h-[38px] items-center gap-2.5 rounded-[10px] bg-white/95 px-[15px] shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
      <span className="h-[18px] w-[18px] rounded-[5px] bg-gradient-to-br from-[#CEBEA6] to-[#A88F6E]" />
      <span className="text-sm font-extrabold tracking-tight text-[#13201f]"> LOGO</span>
    </div>
  );
}

function CarouselCard({
  slide,
  isActive,
  offset,
  noTransition,
  onSelect,
}: {
  slide: Slide;
  isActive: boolean;
  offset: number;
  noTransition: boolean;
  onSelect: () => void;
}) {
  const isLeft = offset < 0;
  const rotateY = isActive ? 0 : isLeft ? 16 : -16;
  const translateZ = isActive ? 60 : -90;

  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative shrink-0 overflow-hidden rounded-[22px] text-left focus:outline-none"
      style={{
        height: CARD_H,
        width: isActive ? ACTIVE_W : PEEK_W,
        transformOrigin: 'center center',
        transform: `translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
        transition: noTransition
          ? 'none'
          : 'width 0.6s cubic-bezier(0.65, 0, 0.2, 1), transform 0.6s cubic-bezier(0.65, 0, 0.2, 1), box-shadow 0.6s cubic-bezier(0.65, 0, 0.2, 1)',
        boxShadow: isActive
          ? '0 45px 90px -30px rgba(6, 22, 24, 0.75)'
          : '0 20px 50px -28px rgba(8, 47, 50, 0.4)',
        opacity: isActive ? 1 : 0.9,
      }}
    >
      <img
        src={slide.image}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 35%, rgba(8,30,32,0.35) 65%, rgba(6,22,24,0.82) 100%)',
        }}
      />
      <BrandLogo logo={slide.logo} logoScale={slide.logoScale} />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3
          className="font-extrabold text-white"
          style={{
            fontFamily: 'Archivo, system-ui, sans-serif',
            fontSize: isActive ? 30 : 22,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            textWrap: 'balance',
          }}
        >
          {slide.title}
        </h3>
        {slide.company && (
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-[#CEBEA6]">
            {slide.company}
          </p>
        )}
      </div>
    </button>
  );
}



export default function MediaCarouselSection() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragDx, setDragDx] = useState(0);
  const [noTransition, setNoTransition] = useState(false);

  const timerRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const movedRef = useRef(false);
  const wheelLockRef = useRef(false);
  const draggingRef = useRef(false);
  draggingRef.current = dragging;

  const goTo = useCallback((index: number) => {
    setActive(Math.max(0, Math.min(index, SLIDES.length - 1)));
  }, []);

  
  useEffect(() => {
    if (dragging) return;
    // Na posição clonada (SLIDES.length) quem comanda é o efeito de wrap.
    if (active >= SLIDES.length) return;
    timerRef.current = window.setTimeout(() => {
      setActive((a) => a + 1);
    }, DURATION);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [active, dragging]);


  useEffect(() => {
    if (active !== SLIDES.length) return;
    const id = window.setTimeout(() => {
      setNoTransition(true);
      setActive(0);
    }, TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [active]);

  
  useEffect(() => {
    if (!noTransition) return;
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setNoTransition(false));
    });
    return () => cancelAnimationFrame(raf);
  }, [noTransition]);

  
  const onPointerDown = (e: React.PointerEvent) => {
    startXRef.current = e.clientX;
    movedRef.current = false;
    setDragging(true);
    setDragDx(0);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    let dx = e.clientX - startXRef.current;
    dx = Math.max(-260, Math.min(260, dx));
    if (Math.abs(dx) > 5) movedRef.current = true;
    setDragDx(dx);
  };

  const onPointerUp = () => {
    if (!draggingRef.current) return;
    setDragDx((dx) => {
      setActive((a) => {
        if (dx <= -DRAG_THRESHOLD) return Math.min(a + 1, SLIDES.length - 1);
        if (dx >= DRAG_THRESHOLD) return Math.max(a - 1, 0);
        return a;
      });
      return 0;
    });
    setDragging(false);
  };

  const handleSelect = (index: number) => {
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    goTo(index);
  };

  
  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) + 2) return;
    if (wheelLockRef.current) return;
    if (e.deltaX > 12) goTo(active + 1);
    else if (e.deltaX < -12) goTo(active - 1);
    wheelLockRef.current = true;
    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 450);
  };

  const translateX = -(active * STEP) + (dragging ? dragDx : 0);

  return (
    <section
      id="media-carousel"
      aria-label="Media carousel"
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-6"
      style={{ background: 'linear-gradient(180deg, #1A2235 0%, #111729 100%)' }}
    >
      <div className="pointer-events-none absolute right-[-128px] top-10 h-[26rem] w-[26rem] rounded-full bg-[#404D74]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#CEBEA6]/[0.08] blur-[140px]" />
      <div className="relative w-full max-w-[1200px]">
        <div className="mb-8 max-w-2xl">
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
      </div>
      <div className="relative w-full max-w-[1200px]">
        <div
          className="relative overflow-hidden"
          style={{ height: CARD_H + 90, perspective: 1600, perspectiveOrigin: '35% 50%' }}
        >
          <div
            className="flex h-full items-center will-change-transform"
            style={{
              gap: GAP,
              transformStyle: 'preserve-3d',
              transform: `translateX(${translateX}px)`,
              transition:
                dragging || noTransition ? 'none' : 'transform 0.6s cubic-bezier(0.65, 0, 0.2, 1)',
              cursor: dragging ? 'grabbing' : 'grab',
              touchAction: 'pan-y',
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onWheel={onWheel}
          >
            {RENDER_SLIDES.map((slide, index) => (
              <CarouselCard
                key={`${slide.id}-${index}`}
                slide={slide}
                isActive={index === active}
                offset={index - active}
                noTransition={noTransition}
                onSelect={() => handleSelect(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}