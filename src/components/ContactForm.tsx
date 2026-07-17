import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  FileSpreadsheet,
  Sparkles,
} from "lucide-react";
import { LeadFormData } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "construcao-reforma",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    // Mask (XX) XXXXX-XXXX
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setFormData((prev) => ({ ...prev, phone: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const createWhatsAppMessage = (data: LeadFormData): string => {
    const projectLabels: Record<string, string> = {
      "construcao-reforma": "Construção e Reforma",
      regularizacao: "Regularização de Imóveis",
      "ilpi-lta": "ILPI e LTA para Casas de Repouso e outros estabelecimentos",
      outro: "Outras Necessidades",
    };

    const projectLabel = projectLabels[data.projectType] || data.projectType;
    const description = data.message.trim()
      ? data.message.trim()
      : "Não informado.";

    const text = `*Nova Solicitação de Orçamento*

- *Nome:*
${data.name.trim()}

- *Telefone:*
${data.phone.trim()}

- *E-mail:*
${data.email.trim()}

- *Serviço desejado:*
${projectLabel}

- *Descrição do projeto:*
${description}

━━━━━━━━━━━━━━━━━━

Solicitação enviada através da Landing Page da Concretize Engenharia.`;

    return `https://wa.me/5519982535257?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    // Simulate API call and open WhatsApp in a new tab
    setTimeout(() => {
      const whatsappUrl = createWhatsAppMessage(formData);
      window.open(whatsappUrl, "_blank");

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "construcao-reforma",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Text & Content Info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="text-sm font-bold text-[#f27a24] uppercase tracking-wider font-mono">
                ORÇAMENTO PERSONALIZADO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002d5b] tracking-tight">
                Orçamento de Engenharia Civil e Obras
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Nossa equipe de engenharia está pronta para analisar seu projeto
                de construção, reforma comercial ou residencial, ou
                regularização LTA/ILPI em São Paulo. Preencha o formulário para
                solicitar seu orçamento de engenharia detalhado.
              </p>
            </div>

            {/* Benefit Bullets */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-emerald-50 rounded-full shrink-0 text-emerald-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#002d5b]">
                    Retorno em até 24 Horas
                  </h4>
                  <p className="text-xs text-gray-400 font-light">
                    Análise preliminar ágil efetuada por nossa equipe.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-emerald-50 rounded-full shrink-0 text-emerald-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#002d5b]">
                    Estudo de Viabilidade Inicial
                  </h4>
                  <p className="text-xs text-gray-400 font-light">
                    Levantamento técnico básico de normas construtivas sem
                    custo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-emerald-50 rounded-full shrink-0 text-emerald-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#002d5b]">
                    Atendimento em todo o Brasil
                  </h4>
                  <p className="text-xs text-gray-400 font-light">
                    Prontidão logística com escritórios dedicados.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Serial Indicator */}
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-between font-mono text-[10px] text-gray-400 select-none">
              <span className="flex items-center gap-1.5">
                <FileSpreadsheet className="h-4 w-4 text-[#f27a24]" />{" "}
                FORM_UUID: CONC_L9_330A2
              </span>
              <span>v2.1_SSL</span>
            </div>
          </div>

          {/* Right Column: Interactive Form Box */}
          <div className="lg:col-span-7 bg-slate-50 rounded-xl p-6 sm:p-10 border border-slate-100 shadow-xs relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-[#002d5b] border-b border-slate-200/60 pb-3">
                    Formulário de Solicitação
                  </h3>

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-gray-600 uppercase tracking-wider block"
                    >
                      Nome Completo <span className="text-[#f27a24]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <User className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Ex: Carlos Roberto Silva"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-md focus:border-[#f27a24] focus:ring-1 focus:ring-[#f27a24] focus:outline-hidden text-sm text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold text-gray-600 uppercase tracking-wider block"
                      >
                        E-mail Corporativo{" "}
                        <span className="text-[#f27a24]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Mail className="h-4 w-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          placeholder="Ex: contato@suaempresa.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-md focus:border-[#f27a24] focus:ring-1 focus:ring-[#f27a24] focus:outline-hidden text-sm text-gray-800"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-xs font-bold text-gray-600 uppercase tracking-wider block"
                      >
                        Telefone / WhatsApp{" "}
                        <span className="text-[#f27a24]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Phone className="h-4 w-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          placeholder="Ex: (11) 99999-9999"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-md focus:border-[#f27a24] focus:ring-1 focus:ring-[#f27a24] focus:outline-hidden text-sm text-gray-800"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dropdown: Project Type */}
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-bold text-gray-600 uppercase tracking-wider block"
                    >
                      Qual é a especialidade requerida?
                    </label>
                    <select
                      name="projectType"
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:border-[#f27a24] focus:ring-1 focus:ring-[#f27a24] focus:outline-hidden text-sm text-gray-800 font-medium"
                    >
                      <option value="construcao-reforma">
                        Construção e Reforma
                      </option>
                      <option value="regularizacao">
                        Regularização de Imóveis
                      </option>
                      <option value="ilpi-lta">
                        ILPI e LTA para Casas de Repouso e outros
                        estabelecimentos
                      </option>
                      <option value="outro">Outras Necessidades</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold text-gray-600 uppercase tracking-wider block"
                    >
                      Descrição preliminar da obra ou desafio técnico
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Escreva brevemente sobre a metragem, localização e qual o escopo desejado..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-md focus:border-[#f27a24] focus:ring-1 focus:ring-[#f27a24] focus:outline-hidden text-sm text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 bg-red-50 border border-red-100 text-red-700 text-sm rounded-md font-medium"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-md text-white font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-md ${
                      isSubmitting
                        ? "bg-slate-400 cursor-not-allowed"
                        : "bg-[#f27a24] hover:bg-[#d96516] hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                    } flex items-center justify-center space-x-2`}
                  >
                    <span>
                      {isSubmitting
                        ? "Enviando Dados..."
                        : "Enviar Solicitação de Orçamento"}
                    </span>
                    {!isSubmitting && <Send className="h-4 w-4" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                    <CheckCircle className="h-10 w-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#002d5b]">
                      Solicitação Recebida!
                    </h3>
                    <p className="text-gray-500 font-light text-sm sm:text-base max-w-md">
                      Agradecemos o seu contato. Nosso departamento de
                      engenharia civil já foi notificado e fará o retorno em até{" "}
                      <span className="font-semibold text-[#f27a24]">
                        24 horas úteis
                      </span>
                      .
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-md border border-emerald-100/60 text-emerald-800 text-xs font-mono flex items-center gap-2">
                    <Sparkles className="h-4.5 w-4.5 text-[#f27a24] shrink-0" />{" "}
                    PROTOCOLO_SISTEMA: #CONC-
                    {Math.floor(100000 + Math.random() * 900000)}
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center text-sm font-semibold text-[#f27a24] hover:text-[#d96516] cursor-pointer"
                  >
                    Fazer outra solicitação
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
