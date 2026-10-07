/**
 * Configuración centralizada del sitio de Milagro — Costurera
 * Cualquier cambio de variables o placeholders se realiza únicamente en este archivo.
 */

export const SITE_CONFIG = {
  // Placeholders y datos del cliente
  whatsapp: "5493884692528", // Número real de WhatsApp
  whatsappMessage: "Hola Milagro, quiero consultar por un arreglo o trabajo de costura",
  tiktok: "ro_mily024", // Usuario real de TikTok
  githubUser: "ulises47123", // Usuario de GitHub
  repoName: "Milagro-Costurera-y-Arreglo", // Nombre del repositorio

  // Metadatos del negocio
  businessName: "Milagro — Costura y Arreglos",
  tagline: "Arreglos de prendas, costura de hogar y tejidos artesanales",
  location: "Barrio El Chingo, San Salvador de Jujuy, Jujuy, Argentina",
  locationShort: "Barrio El Chingo, San Salvador de Jujuy",
  schedule: {
    weekdays: "Lunes a viernes: 8:00 a 18:00",
    weekdayBreak: "Corte: 12:00 a 14:00",
    saturdays: "Sábados: 13:00 a 16:00",
    sundays: "Domingos: cerrado"
  },

  // SEO
  seo: {
    title: "Milagro — Costurera en Barrio El Chingo, Jujuy | Arreglos, Hogar y Tejidos",
    description: "Arreglos de ropa, ajustes de prendas, costura de hogar (mantelería, servilletas, cortinas) y tejidos artesanales. Taller en Barrio El Chingo, San Salvador de Jujuy.",
    ogTitle: "Milagro — Costura y Arreglos en Barrio El Chingo, Jujuy",
    ogDescription: "Arreglos de prendas, ajustes, costura de hogar y tejidos artesanales. Taller en San Salvador de Jujuy.",
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
