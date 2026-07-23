import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  MapPin,
  X,
  Info,
  Hammer,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PORTFOLIO } from "../data";
import { PortfolioItem } from "../types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null,
  );

  // Setup Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

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
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-4 max-w-2xl">
            <span className="text-sm font-bold text-[#f27a24] uppercase tracking-wider font-mono">
              NOSSO ACERVO TÉCNICO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002d5b] tracking-tight">
              Portfólio de Projetos
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Explore nossa seleção de obras que unem técnica apurada, rigor de
              engenharia estrutural e design moderno de alto impacto.
            </p>
          </div>

          <div>
            <button
              onClick={() => setSelectedProject(PORTFOLIO[0])}
              className="inline-flex items-center text-sm font-semibold text-[#f27a24] hover:text-[#d96516] transition-colors group cursor-pointer"
            >
              Ver detalhes técnicos
              <ArrowUpRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div
          className="relative focus:outline-hidden select-none"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Projetos do Portfólio Concretize"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {PORTFOLIO.map((project, idx) => (
                <div
                  key={project.id}
                  className="pl-4 min-w-0 flex-[0_0_100%] lg:flex-[0_0_calc(100%/3)]"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group bg-slate-50 rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative aspect-video sm:aspect-4/3 overflow-hidden bg-slate-200">
                      <img
                        src={project.image}
                        alt={`${project.title} - Projeto de Engenharia Civil da Concretize Engenharia`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#002d5b]/80 via-[#002d5b]/10 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 lg:p-6">
                        <span className="text-white text-xs font-semibold bg-[#f27a24] py-1 px-2.5 lg:py-1.5 lg:px-3 rounded-full flex items-center gap-1">
                          <Info className="h-3 w-3 lg:h-3.5 lg:w-3.5" />{" "}
                          {idx === 0
                            ? "Toque para ver detalhes"
                            : "Clique para ver ficha técnica"}
                        </span>
                      </div>
                      <div className="absolute top-3 left-3 lg:top-4 lg:left-4 bg-white/95 backdrop-blur-xs px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-sm text-[10px] lg:text-xs font-semibold text-[#002d5b] uppercase shadow-sm">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-5 lg:p-6 flex flex-col justify-between grow">
                      <div className="space-y-2 lg:space-y-3">
                        <h3 className="text-base lg:text-lg font-bold text-[#002d5b] group-hover:text-[#f27a24] transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-xs lg:text-sm text-gray-500 font-light line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-gray-100 flex flex-wrap gap-1.5 lg:gap-2">
                        {project.details.map((detail, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[9px] lg:text-[10px] font-mono text-gray-600 bg-white border border-gray-200/80 rounded-sm px-2 py-0.5 lg:px-2.5 lg:py-1"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div
              className="flex space-x-1.5"
              role="group"
              aria-label="Slides do carrossel"
            >
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    index === selectedIndex
                      ? "w-6 bg-[#f27a24]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                  aria-current={index === selectedIndex ? "true" : "false"}
                />
              ))}
            </div>

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

      {/* Interactive Project Technical Specification Sheet Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden relative z-10 border border-slate-100 max-h-[90vh] flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-64 sm:h-80 bg-slate-100 shrink-0">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} - Especificações Técnicas - Concretize Engenharia`}
                  referrerPolicy="no-referrer"
                  width={640}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white hover:scale-105 transition-all"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Overlay details */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-xs font-bold uppercase text-amber-400 bg-black/30 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body (Scrollable if tiny screens) */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                    Descrição do Empreendimento
                  </h4>
                  <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono mb-4 flex items-center gap-1.5">
                    <Hammer className="h-4 w-4 text-[#f27a24]" />
                    Especificações Técnicas de Engenharia
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center space-x-3 bg-slate-50 p-3 rounded-md border border-slate-100"
                      >
                        <CheckCircle2 className="h-4.5 w-4.5 text-[#f27a24] shrink-0" />
                        <span className="text-sm text-slate-700 font-medium font-mono">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>CONCRETIZE // DET_SPEC_REPORT</span>
                  <span className="text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-sm">
                    CONCLUÍDO & ENTREGUE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
