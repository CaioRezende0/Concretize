import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  CheckSquare,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0b131f] text-slate-300 pt-20 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black text-white tracking-wider">
                CONCRETIZE
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-[#f27a24]" />
            </div>
            <p className="text-sm font-light leading-relaxed text-slate-400">
              Elevando os padrões da engenharia civil em Hortolândia através de
              responsabilidade, qualidade de elite e preço justo em cada
              projeto.
            </p>
            <div className="text-xs text-slate-400 font-mono space-y-1">
              <p>Responsável Técnico:</p>
              <p className="text-amber-400 font-semibold">
                Kaique Miranda da Cruz
              </p>
              <p className="text-[10px] text-slate-500">
                Engenheiro Civil // CREA-SP
              </p>
            </div>

            {/* Minimalist social icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com/concretize.engcivil"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 bg-slate-800 hover:bg-[#f27a24] text-white flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105"
                title="Siga no Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 bg-slate-800 hover:bg-[#f27a24] text-white flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navegação */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#sobre");
                  }}
                  className="hover:text-white hover:underline transition-all"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#servicos");
                  }}
                  className="hover:text-white hover:underline transition-all"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#portfolio");
                  }}
                  className="hover:text-white hover:underline transition-all"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#processo");
                  }}
                  className="hover:text-white hover:underline transition-all"
                >
                  Metodologia
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Técnico */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Legal & Técnico
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-slate-400">
              <li>
                <a
                  href="#contato"
                  className="hover:text-white hover:underline transition-all"
                >
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-white hover:underline transition-all"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-white hover:underline transition-all"
                >
                  Memorial Descritivo
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-white hover:underline transition-all"
                >
                  Escritórios Regionais
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              Contato
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm font-light">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-[#f27a24] shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-normal">
                  R. Catarina de Camargo, 107 - Vila Inema, Hortolândia - SP,
                  13185-132
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4.5 w-4.5 text-[#f27a24] shrink-0" />
                <a
                  href="tel:+5519982535257"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +55 (19) 98253-5257
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-[#f27a24] shrink-0" />
                <a
                  href="mailto:eng.Kaiquemiranda@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  eng.Kaiquemiranda@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower footer: Copyright, Certifications, and scroll up button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <p>
              © 2026 Concretize Engineering Partners. Todos os direitos
              reservados.
            </p>
            <p className="mt-1 text-slate-600">
              Precision in Every Detail. CRM_CREA v9.41
            </p>
          </div>

          {/* Certifications and scroll top button */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-slate-400 bg-slate-800/40 px-3 py-1.5 rounded-sm border border-slate-800/80">
              <CheckSquare className="h-3.5 w-3.5 text-[#f27a24]" />
              <span className="font-bold tracking-wider uppercase text-[9px]">
                ISO 9001:2015 CERTIFIED
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-slate-800 hover:bg-[#f27a24] text-white rounded-md transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
