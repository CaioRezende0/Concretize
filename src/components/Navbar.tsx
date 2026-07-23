import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../data";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      id="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-slate-100/40 border-b border-slate-100/80 py-3.5"
          : "bg-white/40 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/images/logo-concretize.png"
              alt="Concretize Engenharia"
              className="h-8 w-auto sm:h-10 object-contain"
            />
            <span className="text-xl sm:text-2xl font-black tracking-wider text-[#002d5b] transition-colors duration-300 group-hover:text-[#f27a24] font-sans">
              CONCRET<span className="text-[#f27a24]">IZE</span>
            </span>
          </a>

          {/* Desktop Links with sliding underline */}
          <nav
            aria-label="Menu principal"
            className="hidden md:flex items-center space-x-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                onMouseEnter={() => setHoveredId(link.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="text-sm font-semibold text-slate-700 hover:text-[#002d5b] transition-colors duration-200 relative py-1"
              >
                <span>{link.label}</span>
                {/* Slideline effect on hover */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#f27a24] transition-all duration-300 ease-out ${
                    hoveredId === link.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContactClick}
              className="inline-flex items-center justify-center px-5.5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-white bg-[#f27a24] hover:bg-[#d96516] shadow-md hover:shadow-lg hover:shadow-orange-500/15 transition-all duration-300 cursor-pointer"
            >
              Entre em contato
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#002d5b] hover:text-[#f27a24] focus:outline-hidden"
              aria-expanded={isOpen}
              aria-label={
                isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
              }
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="block px-3 py-3 rounded-md text-base font-bold text-slate-700 hover:text-[#f27a24] hover:bg-slate-50 transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 px-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="w-full inline-flex items-center justify-center px-4 py-3.5 rounded-md text-base font-bold text-white bg-[#f27a24] hover:bg-[#d96516] shadow-sm transition-all"
                >
                  Entre em contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
