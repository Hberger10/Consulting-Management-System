'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Slide = {
  id: number;
  title: string;
  time: string;
  image: string;
};


const SLIDES: Slide[] = [
  { id: 1, title: 'Tiptoe Simplicity with Honolua Blomfield', time: '5 mins ago', image: '/image/consultoria1.jpg' },
  { id: 2, title: 'Ocean Wave of the Decade Contender', time: '35 mins ago', image: '/image/consultoria2.jpg' },
  { id: 3, title: 'Board Review: John John Florence and Jon Pyzel', time: '1 hour ago', image: '/image/consultoria3.jpg' },
  { id: 4, title: 'Ultimate Guide to Understanding Neoprene', time: 'Yesterday', image: '/image/consultoria1.jpg' },
  { id: 5, title: 'Best Beaches for Beginner Surfers', time: '2 days ago', image: '/image/consultoria2.jpg' },
];

const DURATION = 5000; 
const ACTIVE_W = 560;
const PEEK_W = 224;
const GAP = 18;
const STEP = PEEK_W + GAP;
const DRAG_THRESHOLD = 60;


function BrandLogo() {
  return (
    <div className="absolute left-5 top-5 flex h-[38px] items-center gap-2.5 rounded-[10px] bg-white/95 px-[15px] shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
      <span className="h-[18px] w-[18px] rounded-[5px] bg-gradient-to-br from-[#CEBEA6] to-[#A88F6E]" />
      <span className="text-sm font-extrabold tracking-tight text-[#13201f]">SUA LOGO</span>
    </div>
  );
}

function ReadMore() {
  return (
    <span className="mt-4 inline-flex items-center gap-2.5 text-sm font-semibold text-white">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      Read more
    </span>
  );
}

function CarouselCard({
  slide,
  isActive,
  onSelect,
}: {
  slide: Slide;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative h-full shrink-0 overflow-hidden rounded-[18px] text-left focus:outline-none"
      style={{
        width: isActive ? ACTIVE_W : PEEK_W,
        transition: 'width 0.6s cubic-bezier(0.65, 0, 0.2, 1)',
        boxShadow: '0 30px 60px -25px rgba(8, 47, 50, 0.55)',
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
      <BrandLogo />
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
        <p className="mt-2 text-sm font-medium text-white/70">{slide.time}</p>
        {isActive && <ReadMore />}
      </div>
    </button>
  );
}



export default function MediaCarouselSection() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragDx, setDragDx] = useState(0);

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
    timerRef.current = window.setTimeout(() => {
      setActive((a) => (a + 1) % SLIDES.length);
    }, DURATION);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [active, dragging]);

  
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
      className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-16"
      style={{ background: 'linear-gradient(180deg, #1A2235 0%, #111729 100%)' }}
    >
      <div className="pointer-events-none absolute right-[-128px] top-10 h-[26rem] w-[26rem] rounded-full bg-[#404D74]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#CEBEA6]/[0.08] blur-[140px]" />
      <div className="relative w-full max-w-[900px]">
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
      </div>
      <div className="relative w-full max-w-[900px]">
        <div className="relative overflow-hidden" style={{ height: 480 }}>
          <div
            className="flex h-full will-change-transform"
            style={{
              gap: GAP,
              transform: `translateX(${translateX}px)`,
              transition: dragging ? 'none' : 'transform 0.6s cubic-bezier(0.65, 0, 0.2, 1)',
              cursor: dragging ? 'grabbing' : 'grab',
              touchAction: 'pan-y',
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onWheel={onWheel}
          >
            {SLIDES.map((slide, index) => (
              <CarouselCard
                key={slide.id}
                slide={slide}
                isActive={index === active}
                onSelect={() => handleSelect(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}