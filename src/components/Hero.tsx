import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  Activity,
  Compass,
  Settings,
} from "lucide-react";

interface HeroProps {
  onQuoteClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onQuoteClick, onServicesClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 pb-24 flex items-center bg-radial from-[#5e7e9e] via-[#466380] to-[#2a4158] text-white overflow-hidden"
    >
      {/* Structural blueprint grid background overlay */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Decorative architectural layouts */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] border border-white/5 rounded-full pointer-events-none hidden lg:block" />
      <div className="absolute bottom-10 left-[5%] w-72 h-72 border border-white/5 rounded-xs rotate-12 pointer-events-none hidden lg:block" />

      {/* Subtle dynamic background glowing sphere */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main content */}
          <div className="lg:col-span-9 flex flex-col justify-center space-y-8">
            {/* Tagline / Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-3.5"
            >
              <div className="w-14 h-[2px] bg-[#f27a24]" />
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300 flex items-center gap-2">
                <Compass className="h-4 w-4 text-[#f27a24] animate-spin-slow" />
                ENGENHARIA DE ELITE
              </span>
            </motion.div>

            {/* Main Title with high impact typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] max-w-4xl"
            >
              Sua{" "}
              <span className="text-[#f27a24]">
                Empresa de Engenharia Civil
              </span>{" "}
              de Confiança em <br />
              <span className="text-4xl text-[#f27a24]">
                Hortolândia, Campinas e São Paulo.
              </span>
            </motion.h1>

            {/* Premium Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-lg sm:text-xl text-slate-100 max-w-3xl font-light leading-relaxed"
            >
              A{" "}
              <strong className="font-semibold text-amber-300">
                Concretize Engenharia
              </strong>{" "}
              atende de forma integral a qualquer demanda em{" "}
              <strong className="font-semibold text-white">
                construção civil em Hortolândia
              </strong>
              . Sob a responsabilidade do{" "}
              <strong className="font-semibold text-white">
                Engenheiro Civil Kaique Miranda da Cruz
              </strong>
              , operamos sob três pilares sólidos:
            </motion.p>

            {/* Core Pillars Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl font-sans"
            >
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-3 rounded-sm backdrop-blur-xs">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f27a24] shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-100">
                  Responsabilidade
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-3 rounded-sm backdrop-blur-xs">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-100">
                  Qualidade
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-3 rounded-sm backdrop-blur-xs">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-100">
                  Preço Justo
                </span>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row gap-5 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center px-9 py-4.5 rounded-sm text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#f27a24] hover:bg-[#d96516] transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 cursor-pointer"
              >
                Solicitar orçamento
                <ArrowRight className="ml-2.5 h-5 w-5 animate-pulse" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onServicesClick}
                className="inline-flex items-center justify-center px-9 py-4.5 rounded-sm text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/12 border border-white/30 hover:border-white/90 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                Conheça nossos serviços
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Structural technical details in bottom right (as seen in the print) */}
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 hidden md:block text-right select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-mono text-[10px] tracking-widest text-slate-300 space-y-2 uppercase bg-black/10 backdrop-blur-xs p-4 rounded-xs border border-white/5"
        >
          <p className="flex items-center justify-end gap-1.5">
            <Settings className="h-3.5 w-3.5 animate-spin-slow text-[#f27a24]" />{" "}
            COORD: 22.5404° S, 46.6333° W
          </p>
          <p className="flex items-center justify-end gap-1.5">
            <Activity className="h-3.5 w-3.5 text-emerald-400" />{" "}
            STRUCTURA_CORE_V4.2
          </p>
          <p>PRECISION_METRIC: 99.998%</p>
        </motion.div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/50 cursor-pointer hover:text-white transition-colors"
          onClick={onServicesClick}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </div>
    </section>
  );
}
