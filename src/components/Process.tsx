import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { PROCESS_STEPS } from "../data";

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-bold text-[#f27a24] uppercase tracking-widest block font-mono">
            METODOLOGIA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002d5b] tracking-tight">
            Nosso Processo de Engenharia Civil e Obras
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A jornada para a realização do seu projeto de construção civil,
            regularização de imóveis ou reforma em Hortolândia segue etapas de
            rigor técnico e transparência absoluta, do atendimento à entrega
            final.
          </p>
          <div className="w-16 h-1 bg-[#f27a24] mx-auto rounded-full mt-2" />
        </div>

        {/* Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connector lines on desktop */}
          <div className="absolute top-12 left-12 right-12 h-0.5 bg-slate-100 hidden lg:block z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg border border-slate-100 hover:border-orange-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              {/* Number Circle Badge */}
              <div className="relative mb-6">
                <div className="h-14 w-14 rounded-full bg-white border-2 border-slate-200 group-hover:border-[#f27a24] flex items-center justify-center shadow-xs transition-all duration-300">
                  <span className="text-xl font-black text-[#002d5b] group-hover:text-[#f27a24] transition-colors duration-300 font-mono">
                    {step.number}
                  </span>
                </div>

                {/* Arrow inside layout for horizontal sequence flow on desktop */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-slate-200 hidden lg:block group-hover:text-[#f27a24] group-hover:translate-x-1 transition-all duration-300">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#002d5b] group-hover:text-[#f27a24] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Little detail block */}
              <div className="mt-4 text-[9px] font-mono text-gray-300 uppercase tracking-widest select-none group-hover:text-[#f27a24]/40 transition-colors">
                FASE_0{step.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
