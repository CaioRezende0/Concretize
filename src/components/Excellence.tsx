import React from "react";
import { motion } from "motion/react";
import {
  Wrench,
  ClipboardCheck,
  Award,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { EXCELLENCE_CARDS } from "../data";

// Helper to render Lucide Icons dynamically
const renderIcon = (name: string) => {
  switch (name) {
    case "Wrench":
      return <Wrench className="h-5 w-5 text-[#f27a24]" />;
    case "ClipboardCheck":
      return <ClipboardCheck className="h-5 w-5 text-[#f27a24]" />;
    case "Award":
      return <Award className="h-5 w-5 text-[#f27a24]" />;
    case "ShieldCheck":
      return <ShieldCheck className="h-5 w-5 text-[#f27a24]" />;
    default:
      return <Wrench className="h-5 w-5 text-[#f27a24]" />;
  }
};

export default function Excellence() {
  return (
    <section
      id="sobre"
      className="py-28 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Overlapping Images & Badges */}
          <div className="lg:col-span-6 relative">
            {/* Base elegant offset decorative frames */}
            <div className="absolute -top-5 -left-5 w-24 h-24 border-t-3 border-l-3 border-[#f27a24] z-0 rounded-tl-sm pointer-events-none" />
            <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-3 border-r-3 border-[#002d5b] z-0 rounded-br-sm pointer-events-none" />

            {/* Subtle background blueprint matrix */}
            <div className="absolute inset-4 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:16px_16px] -z-10 rounded-lg" />

            {/* Main Image with refined frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-sm overflow-hidden shadow-2xl shadow-slate-300/60 z-10 border-4 border-white bg-white"
            >
              <img
                src="/images/Imagem-1.png"
                alt="Engenheiro Civil Kaique Miranda da Cruz analisando projetos da Concretize Engenharia em Horto"
                referrerPolicy="no-referrer"
                loading="lazy"
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-103 transition-transform duration-700"
              />
            </motion.div>

            {/* Overlapping Exp Badge (as seen in the print) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute -bottom-6 -left-2 sm:left-8 z-20 bg-[#002d5b] text-white px-8 py-5.5 rounded-sm shadow-xl shadow-slate-900/15 border-l-4 border-[#f27a24]"
            >
              <p className="text-4xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight">
                15+
              </p>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-300 mt-1">
                Projetos Completos
              </p>
            </motion.div>
          </div>

          {/* Right Side: Content & Grid */}
          <div className="lg:col-span-6 flex flex-col space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#f27a24] uppercase tracking-widest font-mono block">
                CONFIANÇA E ENGENHARIA EM HORTOLÂNDIA
              </span>
              <h2 className="text-3xl sm:text-4.5xl font-black text-[#002d5b] tracking-tight leading-tight">
                Empresa de Engenharia com Foco em Responsabilidade, Qualidade e
                Preço Justo.
              </h2>
              <div className="w-12 h-1 bg-[#f27a24] rounded-full" />
              <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed pt-2">
                A{" "}
                <strong className="font-semibold text-[#002d5b]">
                  Concretize Engenharia
                </strong>{" "}
                é uma{" "}
                <strong className="font-semibold text-[#002d5b]">
                  empresa de engenharia civil em Hortolândia
                </strong>{" "}
                nascida com o compromisso inabalável de elevar os padrões de
                qualidade técnica e atendimento personalizado. Sob a liderança
                do{" "}
                <strong className="font-semibold text-[#002d5b]">
                  Engenheiro Civil Kaique Miranda da Cruz
                </strong>
                , atuamos com foco estrito no cumprimento de prazos, custos
                otimizados e máxima segurança em cada{" "}
                <strong className="font-semibold text-[#002d5b]">
                  projeto estrutural
                </strong>
                ,{" "}
                <strong className="font-semibold text-[#002d5b]">
                  reforma residencial e comercial
                </strong>{" "}
                de alto padrão ou processo de licenciamento de imóveis.
              </p>
            </div>

            {/* 2x2 Grid of Excellence values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {EXCELLENCE_CARDS.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -4,
                    shadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)",
                  }}
                  className="p-6 bg-white rounded-sm border border-slate-100 shadow-sm shadow-slate-100/40 hover:border-slate-200 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4.5">
                    <div className="p-2.5 bg-orange-50 rounded-sm group-hover:bg-[#f27a24]/10 transition-colors duration-300">
                      {renderIcon(card.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-[#002d5b] group-hover:text-[#f27a24] transition-colors duration-200">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
