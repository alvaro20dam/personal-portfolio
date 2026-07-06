import { useState } from "react";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "./Button";

export const RequestCVModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Email configuration is missing. Please check your environment variables."
        );
      }

      // We send the request as a contact message but with a pre-filled CV Request tag
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: `SOLICITUD DE CV: El usuario ha solicitado acceso a tu currículum desde el portfolio. Por favor, envíaselo a: ${formData.email}`,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "¡Solicitud enviada! Me pondré en contacto contigo a la brevedad.",
      });
      setFormData({ name: "", email: "" });
      
      // Auto close after 3 seconds on success
      setTimeout(() => {
        onClose();
        setSubmitStatus({ type: null, message: "" });
      }, 3000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || "No se pudo enviar la solicitud. Por favor intenta de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="glass max-w-md w-full p-8 rounded-3xl border border-primary/30 relative glow-border shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface/50 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground">Solicitud de CV</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Para proteger la privacidad de mis datos personales (teléfono y dirección), por favor introduce tu nombre y correo profesional para enviarte una copia digital del CV.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="modal-name" className="block text-sm font-medium mb-1.5">
              Nombre / Empresa
            </label>
            <input
              id="modal-name"
              type="text"
              required
              placeholder="Ej. Reclutador de Empresa X..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
            />
          </div>

          <div>
            <label htmlFor="modal-email" className="block text-sm font-medium mb-1.5">
              Correo Profesional
            </label>
            <input
              id="modal-email"
              type="email"
              required
              placeholder="tu@empresa.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
            />
          </div>

          <Button
            className="w-full mt-2"
            type="submit"
            size="default"
            disabled={isLoading || submitStatus.type === "success"}
          >
            {isLoading ? (
              <>Enviando solicitud...</>
            ) : submitStatus.type === "success" ? (
              <>¡Enviado!</>
            ) : (
              <>
                Solicitar CV
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`flex items-start gap-3 p-4 rounded-xl text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              )}
              <p>{submitStatus.message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
