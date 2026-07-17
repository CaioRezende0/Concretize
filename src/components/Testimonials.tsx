import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Testimonials() {
  // Setup Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((api: any) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scrollPrev();
    } else if (e.key === 'ArrowRight') {
      scrollNext();
    }
  }, [scrollPrev, scrollNext]);

  return (
    <section className="py-24 bg-[#eef4fb] relative overflow-hidden">
      {/* Decorative architectural circle lines in background */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border-4 border-[#002d5b]/5 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full border-4 border-[#002d5b]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-[#f27a24] uppercase tracking-widest block font-mono">
            OPINIÃO DOS CLIENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002d5b] tracking-tight">
            Depoimentos de quem confia em nosso Engenheiro Civil em São Paulo
          </h2>
          <div className="w-16 h-1 bg-[#f27a24] mx-auto rounded-full mt-2" />
        </div>

        {/* Desktop 3-Column Testimonials Grid (Hidden on screens < 1024px) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 bg-white rounded-lg border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-0.5">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4.5 w-4.5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-[#002d5b]/10 transform scale-x-[-1]" />
                </div>

                {/* The Quote */}
                <p className="text-gray-600 font-light italic text-sm sm:text-base leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center space-x-3.5">
                {/* Initials Avatar Bubble */}
                <div className={`h-11 w-11 rounded-full ${test.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-sm select-none shrink-0`}>
                  {test.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()}
                </div>

                {/* Name & Credentials */}
                <div>
                  <h4 className="text-sm font-bold text-[#002d5b]">{test.author}</h4>
                  <p className="text-[11px] font-medium text-[#f27a24] uppercase tracking-wider font-mono">
                    {test.role} // <span className="text-gray-400">{test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel (Visible on screens < 1024px) */}
        <div 
          className="lg:hidden relative focus:outline-hidden"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de Clientes"
        >
          {/* Main Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {TESTIMONIALS.map((test) => (
                <div 
                  key={test.id} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] pl-4 min-w-0"
                >
                  <div className="p-7 bg-white rounded-lg border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 relative flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      {/* Header: Stars & Quote Icon */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-0.5">
                          {[...Array(test.stars)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>
                        <Quote className="h-7 w-7 text-[#002d5b]/10 transform scale-x-[-1]" />
                      </div>

                      {/* The Quote */}
                      <p className="text-gray-600 font-light italic text-xs sm:text-sm leading-relaxed">
                        "{test.quote}"
                      </p>
                    </div>

                    {/* Author Footer */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3">
                      {/* Initials Avatar Bubble */}
                      <div className={`h-10 w-10 rounded-full ${test.avatarColor} text-white flex items-center justify-center font-bold text-xs shadow-sm select-none shrink-0`}>
                        {test.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .toUpperCase()}
                      </div>

                      {/* Name & Credentials */}
                      <div>
                        <h4 className="text-xs font-bold text-[#002d5b]">{test.author}</h4>
                        <p className="text-[9px] font-medium text-[#f27a24] uppercase tracking-wider font-mono">
                          {test.role || "Cliente Satisfeito"} {test.company ? `// ${test.company}` : ''}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex space-x-1.5" role="group" aria-label="Slides do carrossel">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    index === selectedIndex ? 'w-6 bg-[#f27a24]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                  aria-current={index === selectedIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={scrollPrev}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 bg-white text-[#002d5b] hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 bg-white text-[#002d5b] hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
