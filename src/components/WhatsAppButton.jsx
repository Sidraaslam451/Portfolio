import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "923192845982";

  const message = encodeURIComponent(
    "Assalamualaikum Sidra! I'm interested in your web development services. Could we discuss my project?"
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with me on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_12px_35px_rgba(37,211,102,0.25)] sm:bottom-7 sm:right-7 sm:h-15 sm:w-15"
    >
      {/* Ping */}
      <span className="absolute inset-0 rounded-full border border-[#25D366]/30 animate-ping opacity-20" />

      <FaWhatsapp className="relative text-[28px] transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}

export default WhatsAppButton;