"use client";

const WHATSAPP_NUMBER_E164 = "919901455207"; // +91 99014 55207
const WHATSAPP_DISPLAY = "99014 55207";

export const WhatsAppPopup = () => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent("Hi Minimo Retail - Bengaluru!")}`;
    const isInIframe = typeof window !== "undefined" && window.self !== window.top;
    if (isInIframe && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        aria-label="Chat on WhatsApp"
        onClick={openWhatsApp}
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.12)] border-2 border-[var(--foreground)] flex items-center justify-center"
      >
        {/* Official WhatsApp logo (Simple Icons path) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.003-5.45 4.436-9.884 9.888-9.884 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.999c-.003 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.892a11.82 11.82 0 00-3.48-8.413" />
        </svg>
      </button>
    </div>
  );
};