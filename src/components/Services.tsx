import React from "react";
import { motion } from "motion/react";
import { Building2, FileText, HeartPulse, ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data";

// Helper to render Lucide Icons dynamically for Services
const renderIcon = (name: string) => {
  switch (name) {
    case "Building2":
      return (
        <Building2 className="h-7 w-7 text-[#f27a24] group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
      );
    case "FileText":
      return (
        <FileText className="h-7 w-7 text-[#f27a24] group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
      );
    case "HeartPulse":
      return (
        <HeartPulse className="h-7 w-7 text-[#f27a24] group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
      );
    default:
      return (
        <Building2 className="h-7 w-7 text-[#f27a24] group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
      );
  }
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-28 bg-gradient-to-b from-[#0b1f33] to-[#002d5b] text-white relative overflow-hidden"
    >
      {/* Background blueprint subtle line pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Glowing accent sphere */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Heading with custom Orange underline marker */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block font-mono">
            CONSTRUÇÃO CIVIL, REFORMAS E LICENCIAMENTO EM HORTOLÂNDIA
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-black tracking-tight text-white leading-tight">
            Serviços Especializados de Engenharia Civil
          </h2>
          <div className="w-14 h-1 bg-[#f27a24] mx-auto rounded-full mt-2" />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group p-8 bg-white/[0.03] rounded-xs border border-white/10 hover:border-amber-400/50 backdrop-blur-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-xl"
            >
              {/* Slide-in color top bar on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#f27a24] to-amber-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="inline-flex p-3 bg-white/5 rounded-xs group-hover:bg-amber-400/10 transition-colors duration-300">
                  {renderIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors duration-300 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-amber-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>

                {/* Service Description */}
                <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative technical serial/code indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase select-none">
                <span>SERVIÇO // DEPT_0{idx + 1}</span>
                <span className="text-emerald-400/80 tracking-widest flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ✓ ATIVO
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
