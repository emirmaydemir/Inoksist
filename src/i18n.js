import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Çeviri dosyalarını import edin
import sliderEn from "./assets/data/en/homeSlider";
import sliderTr from "./assets/data/tr/homeSlider";
import navbarEn from "./assets/data/en/navLinks";
import navbarTr from "./assets/data/tr/navLinks";
import aboutEn from "./assets/data/en/aboutSection";
import aboutTr from "./assets/data/tr/aboutSection";
import serviceEn from "./assets/data/en/services";
import serviceTr from "./assets/data/tr/services";
import motivationEn from "./assets/data/en/motivation";
import motivationTr from "./assets/data/tr/motivation";
import testimonialEn from "./assets/data/en/testimonial";
import testimonialTr from "./assets/data/tr/testimonial";
import footerEn from "./assets/data/en/footer";
import footerTr from "./assets/data/tr/footer";
import aboutpageEn from "./assets/data/en/about";
import aboutpageTr from "./assets/data/tr/about";
import categoriesEn from "./assets/data/en/categories";
import categoriesTr from "./assets/data/tr/categories";
import priceEn from "./assets/data/en/price";
import priceTr from "./assets/data/tr/price";
import contactEn from "./assets/data/en/contact";
import contactTr from "./assets/data/tr/contact";

const resources = {
  tr: {
    slider: sliderTr,
    navbar: navbarTr,
    about: aboutTr,
    service: serviceTr,
    motivation: motivationTr,
    testimonial: testimonialTr,
    footer: footerTr,
    aboutpage: aboutpageTr,
    categories: categoriesTr,
    price: priceTr,
    contact: contactTr,
  },
  en: {
    slider: sliderEn,
    navbar: navbarEn,
    about: aboutEn,
    service: serviceEn,
    motivation: motivationEn,
    testimonial: testimonialEn,
    footer: footerEn,
    aboutpage: aboutpageEn,
    categories: categoriesEn,
    price: priceEn,
    contact: contactEn,
  },
};

i18n
  .use(initReactI18next) // react-i18next entegrasyonu
  .init({
    resources,
    fallbackLng: "tr", // Varsayılan dil
    ns: [
      "slider",
      "navbar",
      "about",
      "service",
      "motivation",
      "testimonial",
      "footer",
      "aboutpage",
      "categories",
      "price",
      "contact",
    ], // Kullanılacak isim alanları
    defaultNS: "footer", // Varsayılan isim alanı
    interpolation: {
      escapeValue: false, // React için gerekli değil
    },
    react: {
      useSuspense: false, // Suspense özelliğini kapatabilirsiniz
    },
  });

export default i18n;
