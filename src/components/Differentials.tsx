import React from "react";
import { motion } from "motion/react";
import { UserCheck, Users, CalendarRange, SearchCode } from "lucide-react";
import { DIFFERENTIALS } from "../data";

// Helper to render Lucide Icons dynamically for Differentials
const renderIcon = (name: string) => {
  switch (name) {
    case "UserCheck":
      return <UserCheck className="h-6 w-6 text-[#f27a24]" />;
    case "Users":
      return <Users className="h-6 w-6 text-[#f27a24]" />;
    case "CalendarRange":
      return <CalendarRange className="h-6 w-6 text-[#f27a24]" />;
    case "SearchCode":
      return <SearchCode className="h-6 w-6 text-[#f27a24]" />;
    default:
      return <UserCheck className="h-6 w-6 text-[#f27a24]" />;
  }
};

export default function Differentials() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Bold Statement */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-sm font-bold text-[#f27a24] uppercase tracking-wider font-mono">
              VALORES FUNDAMENTAIS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002d5b] tracking-tight leading-snug">
              Nossos diferenciais em engenharia civil garantem a qualidade,
              segurança e preço justo de nossas obras em Hortolândia.
            </h2>
            <div className="w-12 h-1 bg-[#f27a24] rounded-full" />
          </div>

          {/* Right Column: 2x2 Grid of Differentials */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {DIFFERENTIALS.map((diff, idx) => (
                <motion.div
                  key={diff.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 p-6 bg-white rounded-lg border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0 p-3 bg-orange-50 rounded-md h-fit">
                    {renderIcon(diff.iconName)}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-[#002d5b]">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
