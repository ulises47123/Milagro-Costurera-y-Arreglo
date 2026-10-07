/**
 * Configuración centralizada del sitio de Milagro — Costurera
 * Cualquier cambio de variables o placeholders se realiza únicamente en este archivo.
 */

export const SITE_CONFIG = {
  // Placeholders y datos del cliente
  whatsapp: "{{WHATSAPP}}", // Ejemplo: 5493881234567 (sin + ni espacios)
  whatsappMessage: "Hola Milagro, quiero consultar por un arreglo",
  tiktok: "{{TIKTOK}}", // Usuario de TikTok sin @
  githubUser: "ulises47123", // Usuario de GitHub
  repoName: "Milagro-Costurera-y-Arreglo", // Nombre del repositorio

  // Metadatos del negocio
  businessName: "Milagro — Costurera",
  tagline: "Arreglos y costura a medida",
  location: "Alto Comedero, Jujuy, Argentina",
  locationShort: "Alto Comedero, Jujuy",
  schedule: {
    weekdays: "Lunes a viernes: 9:00 a 18:00",
    weekdayBreak: "Corte: 12:00 a 14:00",
    saturdays: "Sábados: 13:00 a 16:00",
    sundays: "Domingos: cerrado"
  },

  // SEO
  seo: {
    title: "Milagro — Costurera en Alto Comedero, Jujuy | Arreglos y costura a medida",
    description: "Arreglos de ropa, ajustes de vestidos, confección a medida. Taller en Alto Comedero, Jujuy. Dejás tu prenda y la retirás lista. Escribime por WhatsApp.",
    ogTitle: "Milagro — Costurera en Alto Comedero, Jujuy",
    ogDescription: "Arreglos, ajustes y confección a medida. Taller en Alto Comedero, Jujuy.",
    ogImage: "/images/og-image.webp"
  }
};

export function getWhatsAppUrl(): string {
  const phone = SITE_CONFIG.whatsapp;
  const text = encodeURIComponent(SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${phone}?text=${text}`;
}

export function getTikTokUrl(): string {
  return `https://www.tiktok.com/@${SITE_CONFIG.tiktok}`;
}
