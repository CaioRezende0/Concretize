import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Drill } from "lucide-react";

interface CallToActionProps {
  onActionClick: () => void;
}

export default function CallToAction({ onActionClick }: CallToActionProps) {
  return (
    <section className="py-24 bg-[#002d5b] text-white relative overflow-hidden text-center">
      {/* Background radial soft light highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Structural subtle blueprint background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Visual Accent */}
        <div className="mx-auto w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full text-amber-400">
          <Drill className="h-6 w-6" />
        </div>

        {/* Text Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
          Pronto para iniciar seu projeto com nossa Empresa de Engenharia Civil?
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
          Nossa equipe de{" "}
          <strong className="font-semibold text-white">
            construção civil em Hortolândia
          </strong>{" "}
          está de prontidão para transformar seus planos em estruturas sólidas,
          eficientes, seguras e aprovadas pelos órgãos reguladores.
        </p>

        {/* Solid Orange CTA */}
        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onActionClick}
            className="inline-flex items-center justify-center px-10 py-5 rounded-md text-base font-bold text-white bg-[#f27a24] hover:bg-[#d96516] shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-200 cursor-pointer"
          >
            Solicitar Orçamento Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </div>

        {/* Small detail indicator */}
        <div className="pt-6 select-none font-mono text-[9px] tracking-widest text-slate-400">
          CONCRETIZE // DEPARTAMENTO DE RELACIONAMENTO INSTITUCIONAL
        </div>
      </div>
    </section>
  );
}
