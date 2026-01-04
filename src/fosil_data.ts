export interface PackageTier {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export interface ServiceItem {
  title: string;
  slug: string;
  description?: string;
  packages?: PackageTier[];
  useCases?: any[];
  timeline?: any[];
  faqs?: any[];
}

export interface CategoryItem {
  title: string;
  slug: string;
  description?: string;
  icon?: string;
  services: ServiceItem[];
}

export interface NavigationData {
  categories: CategoryItem[];
}

export const navigationData: NavigationData = {
  categories: [
    {
      title: "E-Ticaret",
      slug: "e-ticaret",
      description: "E-ticaret siteni kuruyor, yönetiyor ve büyütüyoruz. Shopify, İkas, Ticimax gibi altyapılarda satıştan stratejiye uzanan uçtan uca çözümler sunuyoruz.",
      icon: "ShoppingCart",
      services: [
        { title: "Shopify", slug: "shopify" },
        { title: "İkas", slug: "ikas" },
        { title: "Ticimax", slug: "ticimax" },
        { title: "E-İhracat", slug: "e-ihracat" }
      ]
    },
    {
      title: "Dijital Pazarlama",
      slug: "dijital-pazarlama",
      description: "Veriyle yönlenen 360° performans pazarlama stratejileriyle markanı büyütüyoruz. Google Ads, Meta ve diğer platformlarda ROAS değil, gerçek dönüşüm hedefliyoruz.",
      icon: "Lightbulb",
      services: [
        { title: "Google Ads", slug: "google-ads" },
        { title: "Meta Ads", slug: "meta-ads" },
        { title: "TikTok", slug: "tiktok" },
        { title: "Dönüşüm", slug: "donusum" }
      ]
    },
    {
      title: "Medya & Tasarım",
      slug: "medya-tasarim",
      description: "Markanı anlatan, fark yaratan görsel deneyimler tasarlıyoruz. Dijital ve basılı mecralar için özgün, stratejik tasarımlar üretiyoruz.",
      icon: "Palette",
      services: [
        { title: "Grafik", slug: "grafik" },
        { title: "UI/UX", slug: "ui-ux" },
        { title: "Kurumsal Web", slug: "kurumsal-web" },
        { title: "Sosyal Medya", slug: "sosyal-medya" }
      ]
    },
    {
      title: "Web & Yazılım",
      slug: "web-yazilim",
      description: "Kurumsal web siteleri, özel yazılımlar ve mobil uygulamalar geliştiriyoruz. Tasarım estetiğini güçlü altyapılarla birleştirerek dijital varlığını güçlendiriyoruz.",
      icon: "Code",
      services: [
        { title: "Kurumsal Web", slug: "kurumsal-web-yazilim" },
        { title: "Özel Yazılım", slug: "ozel-yazilim" },
        { title: "Mobil", slug: "mobil" },
        { title: "SLA", slug: "sla" }
      ]
    },
    {
      title: "Pazaryeri Yönetimi",
      slug: "pazaryeri-yonetimi",
      description: "Trendyol, Amazon, Hepsiburada ve diğer platformlarda operasyonlarını yönetiyoruz. Veri odaklı stratejilerle satışlarını ve görünürlüğünü artırıyoruz.",
      icon: "Store",
      services: [
        { title: "Trendyol", slug: "trendyol" },
        { title: "Amazon", slug: "amazon" },
        { title: "Hepsiburada", slug: "hepsiburada" },
        { title: "N11", slug: "n11" }
      ]
    },
    {
      title: "SEO",
      slug: "seo",
      description: "Arama motorlarında değil, kullanıcı zihninde konumlanmanı sağlıyoruz. Teknik, içerik ve otorite odaklı SEO danışmanlığı ile kalıcı sonuçlar üretiyoruz.",
      icon: "Search",
      services: [
        { title: "Teknik", slug: "teknik-seo" },
        { title: "İçerik", slug: "icerik-seo" },
        { title: "Otorite", slug: "otorite-seo" },
        { title: "Yerel", slug: "yerel-seo" }
      ]
    },
    {
      title: "Prodüksiyon",
      slug: "produksiyon",
      description: "Markanı hikâyeleştiriyoruz. Video, fotoğraf ve motion prodüksiyonla dijital kimliğini görsel bir deneyime dönüştürüyoruz.",
      icon: "Video",
      services: [
        { title: "Video", slug: "video" },
        { title: "Fotoğraf", slug: "fotograf" },
        { title: "Motion", slug: "motion" },
        { title: "Tanıtım", slug: "tanitim" }
      ]
    },
    {
      title: "Basılı Çözümler",
      slug: "basili-cozumler",
      description: "Kurumsal kimlik, katalog, ambalaj ve tüm baskı materyallerinde bütünsel tasarım anlayışı sunuyoruz. Her detayda markanın hikâyesini yaşatıyoruz.",
      icon: "Package",
      services: [
        { title: "Kimlik", slug: "kimlik" },
        { title: "Katalog", slug: "katalog" },
        { title: "Ambalaj", slug: "ambalaj" },
        { title: "Baskı", slug: "baski" }
      ]
    },
    {
      title: "Altyapı Partnerlikleri",
      slug: "altyapi-partnerlikleri",
      description: "Ticimax, İkas, T-Soft ve Shopify partnerliğiyle teknik gücü markana entegre ediyoruz. Doğru altyapı, sürdürülebilir büyümenin temelidir.",
      icon: "LayoutGrid",
      services: [
        { title: "Shopify", slug: "shopify-partner" },
        { title: "İkas", slug: "ikas-partner" },
        { title: "Ticimax", slug: "ticimax-partner" },
        { title: "T-Soft", slug: "t-soft-partner" }
      ]
    },
    {
      title: "Eğitim & Danışmanlık",
      slug: "egitim-danismanlik",
      description: "Ekiplerini güçlendir, markanı ileri taşı. Fosil'in deneyimiyle hazırlanan özel eğitimler ve danışmanlık programlarıyla dijital dönüşümünü hızlandır.",
      icon: "BookOpen",
      services: [
        { title: "Eğitim", slug: "egitim" },
        { title: "Danışmanlık", slug: "danismanlik" },
        { title: "Strateji", slug: "strateji" },
        { title: "Atölye", slug: "atolye" }
      ]
    }
  ]
};