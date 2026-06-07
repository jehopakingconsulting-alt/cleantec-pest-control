"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale, Dictionary } from "@/lib/i18n";

const SLIDE_DURATION = 6000;

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const slides = dict.home.slides;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative isolate h-[640px] sm:h-[720px] overflow-hidden bg-brand-dark text-white">
      {slides.map((slide, i) => (
        <div
          key={slide.image + i}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={`/images/${slide.image}`}
            alt={slide.title}
            fill
            priority={i === 0}
            className={`object-cover transition-transform duration-[7000ms] ease-out ${i === active ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/40" />
        </div>
      ))}

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              aria-hidden={i !== active}
              className={`transition-all duration-700 ease-out ${
                i === active ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <p className="font-heading font-bold tracking-wide text-brand-light uppercase mb-3">{slide.tag}</p>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-xl">{slide.subtitle}</p>
            </div>
          ))}

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href={`/${lang}/quote`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-light text-white font-semibold px-6 py-3.5 hover:bg-white hover:text-brand-dark transition-colors shadow-lg"
            >
              🟢 {dict.home.ctaQuote}
            </Link>
            <a
              href={`tel:${dict.common.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white font-semibold px-6 py-3.5 hover:bg-white hover:text-brand-dark transition-colors"
            >
              📞 {dict.home.ctaCall}
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.image + "-dot-" + i}
            aria-label={`${slide.tag}`}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-brand-light" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Prev / next arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => setActive((i) => (i - 1 + slides.length) % slides.length)}
        className="hidden sm:flex absolute left-4 top-1/2 z-20 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-xl backdrop-blur hover:bg-white/25 transition-colors"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={() => setActive((i) => (i + 1) % slides.length)}
        className="hidden sm:flex absolute right-4 top-1/2 z-20 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-xl backdrop-blur hover:bg-white/25 transition-colors"
      >
        ›
      </button>
    </section>
  );
}
