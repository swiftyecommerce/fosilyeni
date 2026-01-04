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
      description: "E-ticaret kurulum, yönetim ve büyüme odaklı çözümler",
      icon: "ShoppingCart",
      services: [
        {
          title: "Kurulum",
          slug: "kurulum",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'Hazır Tema Kurulumu',
                'Temel SEO Ayarları',
                'Ödeme Sistemi Entegrasyonu',
                'Kargo Entegrasyonu',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺25.000',
              features: [
                'Basic paket özellikleri',
                'Gelişmiş Kategori Yapısı',
                'Blog Modülü Kurulumu',
                'Google Analytics 4 Kurulumu',
                'Whatsapp Sipariş Hattı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺40.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Özel UI/UX Düzenlemeleri',
                'Pazaryeri Entegrasyonu (1 Adet)',
                'Gelişmiş SEO optimizasyonu',
                'Hız Optimizasyonu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'ERP Entegrasyonu',
                'B2B Altyapısı',
                'Özel Yazılım Geliştirme',
                'Sınırsız Özelleştirme',
                'Kurumsal SLA',
                'Yerinde Eğitim & Danışmanlık'
              ]
            }
          ]
        },
        {
          title: "Yönetim",
          slug: "yonetim",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Aylık Stok Takibi',
                'Temel Raporlama',
                'Banner Güncellemeleri',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Kampanya Yönetimi',
                'Kategori Yönetimi',
                'SEO İçerik Girişi (Ayda 4)',
                'Haftalık Raporlama',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Gelişmiş Ürün Yönetimi',
                'Reklam Hesapları Yönetimi Desteği',
                'Dönüşüm Oranı Optimizasyonu (CRO)',
                'Rakip Analizi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Tam Kapsamlı Operasyon Yönetimi',
                'Büyüme Stratejisi Danışmanlığı',
                'Özel Veri Analitiği',
                'Çok Kanallı Pazarlama Yönetimi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "E-İhracat",
          slug: "e-ihracat",
          packages: [
            {
              name: 'Basic',
              price: '₺25.000',
              features: [
                'Yurtdışı Kargo Entegrasyonu',
                'Çoklu Para Birimi Ayarları',
                'Temel Çeviri (Otomatik)',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺45.000',
              features: [
                'Basic paket özellikleri',
                'Hedef Pazar Analizi',
                'Profesyonel Çeviri Desteği',
                'Yurtdışı Ödeme Yöntemleri',
                'Gümrük Vergisi Ayarları',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺75.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Global Pazaryeri Entegrasyonları',
                'Ülke Bazlı Fiyatlandırma',
                'Lokalleştirme Stratejisi',
                'Yurtdışı Reklam Kurulumu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Global Marka Konumlandırma',
                'Depo & Lojistik Danışmanlığı',
                'Yurtdışı Şirket Kurulum Desteği',
                'Sınırsız Pazar Hedefleme',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Migrasyon",
          slug: "migrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'Ürün Verisi Taşıma',
                'Müşteri Verisi Taşıma',
                'Sipariş Geçmişi Taşıma',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺25.000',
              features: [
                'Basic paket özellikleri',
                '301 Yönlendirmeleri',
                'SEO Yapısının Korunması',
                'Tema Uyarlaması (Basit)',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺40.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Gelişmiş Tema Özelleştirme',
                'Özel Fonksiyonların Taşınması',
                'Entegrasyonların Yeniden Kurulumu',
                'Veri Doğrulama & Test',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Platformlar Arası Karmaşık Geçişler',
                'ERP Veri Eşitleme',
                'Özel Script Yazılımı',
                'Kesintisiz Geçiş Planı',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Entegrasyonlar",
          slug: "entegrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Standart API Bağlantısı',
                'Temel Veri Akışı',
                'Tek Yönlü Entegrasyon',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'Çift Yönlü Veri Akışı',
                'Stok & Fiyat Senkronizasyonu',
                'Hata Loglama Sistemi',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Özel API Geliştirme',
                'Otomasyon Kurguları',
                'Çoklu Platform Bağlantısı',
                'Gerçek Zamanlı Senkronizasyon',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Kurumsal ERP Entegrasyonları',
                'Özel Middleware Yazılımı',
                'Yüksek Hacimli Veri İşleme',
                'Sınırsız Kaynak Bağlantısı',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Dijital Pazarlama",
      slug: "dijital-pazarlama",
      description: "Performans odaklı 360° dijital pazarlama yönetimi",
      icon: "Lightbulb",
      services: [
        {
          title: "Google Ads",
          slug: "google-ads",
          packages: [
            {
              name: 'Basic',
              price: '₺7.500',
              features: [
                'Hesap Kurulumu',
                'Arama Ağı Reklamları',
                'Temel Anahtar Kelime Analizi',
                'Aylık Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺15.000',
              features: [
                'Basic paket özellikleri',
                'Görüntülü Reklam Ağı (GDN)',
                'Re-marketing Kurguları',
                'Negatif Kelime Optimizasyonu',
                'Haftalık Raporlama',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺25.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Google Shopping Reklamları',
                'YouTube Reklamları',
                'Dönüşüm Optimizasyonu',
                'Rakip Analizi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Programatik Reklamcılık',
                'Cross-Channel Entegrasyon',
                'Özel Veri Stüdyosu Raporları',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Meta Ads (Facebook/Instagram)",
          slug: "meta-ads",
          packages: [
            {
              name: 'Basic',
              price: '₺7.500',
              features: [
                'Business Manager Kurulumu',
                'Pixel Kurulumu',
                'Temel Kampanya Kurgusu',
                'Aylık Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺15.000',
              features: [
                'Basic paket özellikleri',
                'Katalog Reklamları (DPA)',
                'Hedef Kitle Segmentasyonu',
                'A/B Testleri',
                'Haftalık Raporlama',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺25.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Re-marketing Stratejileri',
                'CAPI (Conversion API) Kurulumu',
                'Kreatif Danışmanlığı',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Global Kampanya Yönetimi',
                'İleri Düzey Veri Analitiği',
                'Offline Dönüşüm Takibi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "TikTok Ads",
          slug: "tiktok-ads",
          packages: [
            {
              name: 'Basic',
              price: '₺7.500',
              features: [
                'Hesap Kurulumu',
                'Pixel Kurulumu',
                'Temel Kampanya Kurgusu',
                'Aylık Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺15.000',
              features: [
                'Basic paket özellikleri',
                'Spark Ads Yönetimi',
                'Kreatif Düzenleme Desteği',
                'Haftalık Raporlama',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺25.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'UGC Kampanya Kurgusu',
                'Influencer İşbirlikleri',
                'Trend Analizi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Özel Efekt & Filtre Üretimi',
                'Marka Meydan Okumaları',
                'Global Erişim',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Diğer Kanallar (Twitter, Yandex, Bing, RTB)",
          slug: "diger-kanallar",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Tek Kanal Yönetimi',
                'Kampanya Kurulumu',
                'Aylık Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'İki Kanal Yönetimi',
                'Pixel & Tag Kurulumları',
                'Haftalık Raporlama',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Tüm Alternatif Kanallar',
                'Cross-Channel Stratejisi',
                'RTB (Real Time Bidding)',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Programatik Satın Alma',
                'Premium Envanter Erişimi',
                'Özel Veri Anlaşmaları',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "İçerik Pazarlaması",
          slug: "icerik-pazarlamasi",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Aylık 4 Blog Yazısı',
                'Temel SEO Uyumu',
                'Görsel Seçimi',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺12.000',
              features: [
                'Basic paket özellikleri',
                'Aylık 8 Blog Yazısı',
                'Anahtar Kelime Analizi',
                'Editoryal Takvim',
                'İnfografik Tasarımı (1 Adet)',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'E-kitap / Whitepaper',
                'Video Senaryo Yazımı',
                'Rakip İçerik Analizi',
                'İçerik Dağıtım Stratejisi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Thought Leadership Stratejisi',
                'Çok Dilli İçerik Üretimi',
                'PR Bültenleri',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "E-posta & SMS",
          slug: "eposta-sms",
          packages: [
            {
              name: 'Basic',
              price: '₺4.000',
              features: [
                'Aylık 2 Newsletter',
                'Temel Liste Yönetimi',
                'Hazır Şablon Kullanımı'
              ]
            },
            {
              name: 'Standard',
              price: '₺8.000',
              features: [
                'Basic paket özellikleri',
                'Otomasyon Kurguları (Hoşgeldin vb.)',
                'SMS Kampanya Yönetimi',
                'A/B Testleri',
                'Haftalık Raporlama',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺15.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Gelişmiş Segmentasyon',
                'Kişiselleştirilmiş Akışlar',
                'Özel Tasarım Şablonlar',
                'Terk Edilmiş Sepet Kurgusu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'CDP Entegrasyonu',
                'Omnichannel Kurgular',
                'Milyon+ Gönderim Kapasitesi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Influencer & Affiliate",
          slug: "influencer-affiliate",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Mikro-Influencer Listesi',
                'İletişim Yönetimi',
                'Ürün Gönderim Organizasyonu'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Makro-Influencer Anlaşmaları',
                'Affiliate Program Kurulumu',
                'Sözleşme Yönetimi',
                'Haftalık Raporlama',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Yaratıcı Kampanya Kurgusu',
                'Etkinlik Katılımları',
                'ROI Analizi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Celebrity İşbirlikleri',
                'Global Influencer Ağı',
                'Özel Platform Geliştirme',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Medya & Tasarım",
      slug: "medya-tasarim",
      description: "Marka odaklı tasarım ve medya üretim hizmetleri",
      icon: "Palette",
      services: [
        {
          title: "Grafik Tasarım",
          slug: "grafik-tasarim",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Aylık 10 Tasarım (Sosyal Medya)',
                '1 Revizyon Hakkı',
                'Hazır Şablon Kullanımı',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'Aylık 20 Tasarım',
                '2 Revizyon Hakkı',
                'Özgün Tasarım Dili',
                'Banner & Slider Tasarımı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Sınırsız Sosyal Medya Tasarımı',
                'Sınırsız Revizyon',
                'Basılı Materyal Tasarımı',
                'Hareketli Tasarım (Motion)',
                '7/24 Destek',
                'Özel Tasarımcı Ataması'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Marka Kimliği Yönetimi',
                '3D Modelleme & Render',
                'UX/UI Danışmanlığı',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "UI/UX",
          slug: "ui-ux",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'Landing Page Tasarımı',
                'Mobil Uyumlu Tasarım',
                'Temel UI Kit',
                '2 Revizyon Hakkı'
              ]
            },
            {
              name: 'Standard',
              price: '₺30.000',
              features: [
                'Basic paket özellikleri',
                '5 Sayfaya Kadar Web Tasarım',
                'Kullanıcı Akış Diyagramları',
                'Wireframe Çalışması',
                'Prototip Oluşturma',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺50.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Kapsamlı Web/Mobil Projesi',
                'Kullanıcı Araştırması & Testi',
                'Design System Oluşturma',
                'Developer Handoff',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Dönüşüm Odaklı UX Audit',
                'Erişilebilirlik (WCAG) Uyumu',
                'Sürekli Optimizasyon',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Kurumsal Web Tasarım",
          slug: "kurumsal-web-tasarim",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'Hazır Tema Uygulaması',
                '5 Sayfa İçerik Girişi',
                'İletişim Formu',
                'Mobil Uyumlu',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺25.000',
              features: [
                'Basic paket özellikleri',
                'Yarı Özel Tasarım',
                'Blog Altyapısı',
                'Google Maps Entegrasyonu',
                'Temel SEO Ayarları',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺45.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Tamamen Özel Tasarım',
                'Gelişmiş CMS Paneli',
                'Çoklu Dil Desteği',
                'Hız Optimizasyonu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Özel Veritabanı Mimarisi',
                'Intranet / Extranet Modülleri',
                'Siber Güvenlik Paketi',
                'Yük Testleri',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Sosyal Medya Yönetimi",
          slug: "sosyal-medya-yonetimi",
          packages: [
            {
              name: 'Basic',
              price: '₺7.500',
              features: [
                'Haftalık 3 Post',
                'İçerik Metinleri',
                'Yorum Yanıtlama (Mesai Saatleri)',
                'Aylık Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺15.000',
              features: [
                'Basic paket özellikleri',
                'Haftalık 5 Post + 2 Story',
                'Reels Video Kurgusu',
                'Topluluk Yönetimi',
                'Reklam Yönetimi Desteği',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺25.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Günlük İçerik Paylaşımı',
                'Profesyonel Çekim Günleri',
                'Kriz Yönetimi',
                'Rakip Analizi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Global Hesap Yönetimi',
                '7/24 Moderasyon Ekibi',
                'Özel Kampanya Kurguları',
                'Canlı Yayın Prodüksiyonu',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Televizyon Reklamları",
          slug: "televizyon-reklamlari",
          packages: [
            {
              name: 'Basic',
              price: '₺50.000',
              features: [
                'Bant Reklam Kurgusu',
                'Yerel Kanal Planlama',
                'Medya Satın Alma Yönetimi'
              ]
            },
            {
              name: 'Standard',
              price: '₺100.000',
              features: [
                'Basic paket özellikleri',
                'Spot Reklam Prodüksiyonu (Düşük Bütçe)',
                'Ulusal Kanal Planlama (Off-Prime)',
                'RTÜK Süreç Yönetimi',
                'Erişim Raporlama'
              ]
            },
            {
              name: 'Pro',
              price: '₺250.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Profesyonel Reklam Filmi Prodüksiyonu',
                'Prime Time Planlama',
                '360 Derece Kampanya Entegrasyonu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Ünlü Oyuncu / Yüz Kullanımı',
                'Global Kanal Planlama',
                'Program Sponsorlukları',
                'Neuro-Marketing Testleri',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Web & Yazılım",
      slug: "web-yazilim",
      description: "Kurumsal web, özel yazılım ve mobil uygulamalar",
      icon: "Code",
      services: [
        {
          title: "Kurumsal Web Sitesi",
          slug: "kurumsal-web-sitesi",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'Hazır Tema',
                '5 Sayfa',
                'Form Entegrasyonu',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺25.000',
              features: [
                'Basic paket özellikleri',
                'Özel Tasarım Desteği',
                'Blog Modülü',
                'SEO Altyapısı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺45.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Çoklu Dil',
                'Özel İK Modülü',
                'Gelişmiş Filtreleme',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Kapsamlı Intranet',
                'Yüksek Güvenlik',
                'Özel Entegrasyonlar',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Özel Yazılım",
          slug: "ozel-yazilim",
          packages: [
            {
              name: 'Basic',
              price: '₺50.000',
              features: [
                'MVP Geliştirme',
                'Temel Veritabanı',
                'Admin Paneli',
                'Standart Dokümantasyon'
              ]
            },
            {
              name: 'Standard',
              price: '₺100.000',
              features: [
                'Basic paket özellikleri',
                'Gelişmiş Backend',
                'API Entegrasyonları',
                'Test Süreçleri',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺250.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Mikroservis Mimarisi',
                'Cloud Altyapı',
                'CI/CD Pipeline',
                '7/24 Destek',
                'Dedicated Team'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Yüksek Ölçeklenebilirlik',
                'AI/ML Entegrasyonu',
                'Big Data Çözümleri',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Mobil Uygulama",
          slug: "mobil-uygulama",
          packages: [
            {
              name: 'Basic',
              price: '₺40.000',
              features: [
                'React Native / Flutter',
                'Tek Platform (iOS veya Android)',
                'Temel Arayüz',
                'Mağaza Yayınlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺80.000',
              features: [
                'Basic paket özellikleri',
                'Çift Platform (iOS & Android)',
                'Push Bildirimler',
                'Admin Paneli',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺150.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Özel UI/UX',
                'Gelişmiş Animasyonlar',
                'Offline Mod',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Native Geliştirme',
                'IoT Entegrasyonu',
                'Özel Güvenlik Protokolleri',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Bakım & SLA",
          slug: "bakim-sla",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Aylık Güncellemeler',
                'Yedekleme (Haftalık)',
                'Güvenlik Taraması',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'Yedekleme (Günlük)',
                'Hata Düzeltme Garantisi',
                'Performans İzleme',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Anlık Müdahale',
                'Sunucu Yönetimi',
                'Kod Review',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Dedike DevOps',
                'Felaket Kurtarma Senaryoları',
                'Yük Dengeleme',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Pazaryeri Yönetimi",
      slug: "pazaryeri-yonetimi",
      description: "Pazaryerlerinde operasyon ve büyüme yönetimi",
      icon: "ShoppingCart",
      services: [
        {
          title: "Trendyol",
          slug: "trendyol",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Mağaza Açılışı',
                'Ürün Yükleme (50 Adet)',
                'Temel Banner Tasarımı',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'Ürün Optimizasyonu',
                'Kampanya Katılım Yönetimi',
                'Reklam Kurgusu',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Buybox Stratejisi',
                'Stoğa Göre Fiyatlandırma',
                'Yorum Yönetimi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Entegrasyon Yönetimi',
                'Çoklu Mağaza',
                'Rakip Takibi Otomasyonu',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Hepsiburada",
          slug: "hepsiburada",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Mağaza Açılışı',
                'Ürün Yükleme (50 Adet)',
                'Görsel Düzenleme',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'HepsiAd Yönetimi',
                'Kupon Oluşturma',
                'SEO Uyumlu Başlıklar',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Buybox Takibi',
                'Fiyat Rekabet Analizi',
                'Stok Optimasyonu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'API Tabanlı Yönetim',
                'ERP Entegrasyonu',
                'Otomatik Fiyatlandırma',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Amazon",
          slug: "amazon",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Seller Central Kurulumu',
                'GTIN Muafiyeti',
                'İlk Ürün Listeleme',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'A+ Content (EBC) Tasarımı',
                'FBA Gönderim Planı',
                'PPC Reklam Kurulumu',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺40.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Marka Tescili (Brand Registry)',
                'Storefront Tasarımı',
                'Gelişmiş PPC Yönetimi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Global Satış (Pan-EU / NA)',
                'Hesap Sağlığı Yönetimi',
                'Askıya Alma (Suspend) İtiraz',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "N11 / ÇiçekSepeti vb.",
          slug: "n11-ciceksepeti",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Mağaza Başvurusu',
                'Kategori Eşleştirme',
                'Ürün Yükleme',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'Reklam Bütçe Yönetimi',
                'Öne Çıkarma Kurguları',
                'Haftalık Rapor',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺15.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Çoklu Platform Tek Panel',
                'Rakip Fiyat Analizi',
                'Kampanya Planlama',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Tam Otomasyon',
                'Stok Senkronizasyonu',
                'Özel XML Entegrasyonu',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    },
    {
      title: "SEO",
      slug: "seo",
      description: "Teknik, içerik ve otorite odaklı SEO danışmanlığı",
      icon: "Search",
      services: [
        {
          title: "Teknik SEO",
          slug: "teknik-seo",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Site Hızı Analizi',
                'Kırık Link Kontrolü',
                'Sitemap Kontrolü',
                'Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Core Web Vitals Optimizasyonu',
                'Yapısal Veri (Schema) Kurulumu',
                'Tarama Bütçesi Optimizasyonu',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Javascript SEO',
                'Uluslararası SEO (Hreflang)',
                'Log Dosyası Analizi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Özel Teknik SEO Danışmanlığı',
                'Migration (Taşıma) Desteği',
                'Sunucu Log Analizi Otomasyonu',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Site İçi SEO",
          slug: "site-ici-seo",
          packages: [
            {
              name: 'Basic',
              price: '₺7.500',
              features: [
                'Meta Tag Düzenlemesi (50 Sayfa)',
                'Başlık Etiketleri Optimizasyonu',
                'URL Yapısı Kontrolü',
                'Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺15.000',
              features: [
                'Basic paket özellikleri',
                'İç Linkleme Stratejisi',
                'Görsel Optimizasyonu',
                'İçerik GAP Analizi',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺25.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Kullanıcı Deneyimi (UX) İyileştirmeleri',
                'Dönüşüm Odaklı Optimizasyon',
                'A/B Testleri',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Kapsamlı Content Hub Kurgusu',
                'Yapay Zeka Destekli Optimizasyon',
                'Büyük Ölçekli Site Mimarisi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Site Dışı SEO",
          slug: "site-disi-seo",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Backlink Analizi',
                'Zararlı Link Reddi (Disavow)',
                'Rakip Backlink İncelemesi',
                'Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Tanıtım Yazısı (3 Adet)',
                'Trust Flow Artırma',
                'Yerel Dizin Kayıtları',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Premium Publisher Anlaşmaları',
                'Digital PR Çalışmaları',
                'Marka Bilinirliği Kurgusu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Online İtibar Yönetimi (ORM)',
                'Haber Kaynağı (News) Kayıtları',
                'Kriz Yönetimi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "İçerik SEO",
          slug: "icerik-seo",
          packages: [
            {
              name: 'Basic',
              price: '₺6.000',
              features: [
                '4 Adet SEO Uyumlu Makale',
                'Anahtar Kelime Araştırması',
                'Özgünlük Kontrolü',
                'Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺12.000',
              features: [
                'Basic paket özellikleri',
                '8 Adet SEO Uyumlu Makale',
                'Semantik İçerik Analizi',
                'Rakip İçerik Stratejisi',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Topic Cluster Oluşturma',
                'Evergreen İçerik Üretimi',
                'İçerik Güncelleme Planı',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Video İçerik Senaryoları',
                'E-Book & Whitepaper',
                'Çok Dilli İçerik Stratejisi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Yerel SEO",
          slug: "yerel-seo",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Google My Business Kurulumu',
                'Harita Kaydı',
                'NAP Tutarlılığı Kontrolü',
                'Raporlama'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'Yorum Yönetimi Stratejisi',
                'Yerel Anahtar Kelime Optimizasyonu',
                'Fotoğraf Güncellemeleri',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺15.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Çoklu Lokasyon Yönetimi',
                'Yerel Etkinlik ve PR',
                'Bölgesel Landing Page Kurgusu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Zincir Mağaza Otomasyonu',
                'İtibar Koruma',
                'Rakip Bölge Analizi',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Prodüksiyon",
      slug: "produksiyon",
      description: "Video, fotoğraf ve motion prodüksiyon",
      icon: "Video",
      services: [
        {
          title: "Tanıtım Filmi",
          slug: "tanitim-filmi",
          packages: [
            {
              name: 'Basic',
              price: '₺20.000',
              features: [
                '1 Mekan Çekimi',
                'Full HD Kamera',
                'Temel Kurgu & Montaj',
                'Lisanslı Müzik'
              ]
            },
            {
              name: 'Standard',
              price: '₺40.000',
              features: [
                'Basic paket özellikleri',
                'Senaryo Yazımı',
                'Drone Çekimi',
                'Seslendirme (Voice Over)',
                'Renk Düzenlemesi (Color Grade)',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺75.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                '4K Sinema Kamerası',
                'Oyuncu / Model Desteği',
                'Yönetmen & Sanat Yönetmeni',
                'Özel Müzik Bestesi',
                '7/24 Destek',
                'Özel Yapımcı'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Global Yayın Standartları',
                'Çok Dilli Altyazı & Dublaj',
                'TV Reklam Versiyonu',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Sosyal Video",
          slug: "sosyal-video",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Aylık 4 Reels Videosu',
                'Mobil Çekim',
                'Trend Müzik Kullanımı',
                'Kurgu'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Aylık 8 Reels Videosu',
                'Profesyonel Kamera',
                'Işık Kurulumu',
                'Kapak Tasarımı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Aylık 12 Video',
                'Stüdyo Kullanımı',
                'Motion Graphics Eklentileri',
                'Model Temini',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Günlük İçerik Üretimi',
                'Canlı Yayın Prodüksiyonu',
                'Etkinlik Takibi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Animasyon & Motion",
          slug: "animasyon-motion",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                '15 Saniye 2D Animasyon',
                'Hazır Vektör Kullanımı',
                'Temel Ses Efektleri',
                'Kurgu'
              ]
            },
            {
              name: 'Standard',
              price: '₺30.000',
              features: [
                'Basic paket özellikleri',
                '30 Saniye 2D Animasyon',
                'Özel Karakter Tasarımı',
                'Profesyonel Seslendirme',
                'Storyboarding',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺50.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                '1 Dakika 2D/3D Animasyon',
                'Gelişmiş Motion Graphics',
                'Kinetik Tipografi',
                'Lisanslı Müzik',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Kısa Film Animasyon',
                '3D Modelleme & Rigging',
                'VR / AR Deneyimi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Fotoğraf Çekimi",
          slug: "fotograf-cekimi",
          packages: [
            {
              name: 'Basic',
              price: '₺7.500',
              features: [
                '20 Adet Ürün Fotoğrafı',
                'Beyaz Fon',
                'Temel Retouch',
                'Web Çözünürlüğü'
              ]
            },
            {
              name: 'Standard',
              price: '₺15.000',
              features: [
                'Basic paket özellikleri',
                '50 Adet Fotoğraf',
                'Konsept Çekim (Lifestyle)',
                'Model Kullanımı (Model Hariç)',
                'Gelişmiş Retouch',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺25.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                '100+ Fotoğraf',
                'Mekan / Stüdyo Temini',
                'Profesyonel Model & MUA',
                'Yüksek Çözünürlük (Baskı)',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Katalog Çekimi',
                '360 Derece Ürün Fotoğrafı',
                'Global Kampanya Görselleri',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Basılı Çözümler",
      slug: "basilicozumler",
      description: "Kurumsal kimlik, katalog ve ambalaj tasarımı",
      icon: "Package",
      services: [
        {
          title: "Kurumsal Kimlik",
          slug: "kurumsal-kimlik",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Logo Tasarımı (3 Alternatif)',
                'Kartvizit Tasarımı',
                'Antetli Kağıt & Diplomat Zarf',
                'Temel Sunum Dosyası'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Fatura & İrsaliye Tasarımı',
                'E-posta İmzası',
                'Sosyal Medya Kit',
                'Kurumsal Kimlik Rehberi (Mini)',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Araç Giydirme Tasarımı',
                'Personel Kartı & Yaka Kartı',
                'Promosyon Ürün Tasarımları',
                'Kapsamlı Marka Kitapçığı',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Mağaza / Ofis Konsept Tasarımı',
                'Tabela & Yönlendirme Sistemleri',
                'Fuar Stand Tasarımı',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Broşür & Katalog",
          slug: "brosur-katalog",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                '4 Sayfa Broşür / Föy',
                'Hazır Şablon Uyarlama',
                'Metin Düzenleme',
                'Baskıya Hazır Teslim'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                '8-16 Sayfa Katalog',
                'Özel Kapak Tasarımı',
                'Ürün Dekupe İşlemleri',
                'Sayfa Düzeni (Layout) Tasarımı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                '32+ Sayfa Katalog',
                'Konsept Sayfa Tasarımları',
                'Dijital İnteraktif Versiyon',
                'Matbaa Takibi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Çok Dilli Katalog',
                'Özel Ciltleme & Kağıt Danışmanlığı',
                'Dağıtım Planlama',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Ambalaj & Kargo Kutusu",
          slug: "ambalaj-kargo-kutusu",
          packages: [
            {
              name: 'Basic',
              price: '₺7.500',
              features: [
                'Etiket Tasarımı',
                'Standart Kutu Uyarlama',
                'Bıçak İzi Hazırlama',
                'Baskı Öncesi Kontrol'
              ]
            },
            {
              name: 'Standard',
              price: '₺15.000',
              features: [
                'Basic paket özellikleri',
                'Özel Kutu Formu Tasarımı',
                'Ambalaj İçi Materyaller (Pelur vb.)',
                '3D Mockup Sunumu',
                'Seri Ürün Uyarlamaları (3 Adet)',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺25.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Ürün Ailesi Ambalaj Tasarımı',
                'Prototip Üretim Desteği',
                'Malzeme & Baskı Tekniği Danışmanlığı',
                'Sürdürülebilir Ambalaj Çözümleri',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Endüstriyel Tasarım Desteği',
                'Maliyet Optimizasyonu',
                'Lojistik Dayanıklılık Testi',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Eğitim & Danışmanlık",
      slug: "egitim-danismanlik",
      description: "Eğitimler ve danışmanlık programları",
      icon: "BookOpen",
      services: [
        {
          title: "Kurumsal E-Ticaret Eğitimi",
          slug: "kurumsal-eticaret-egitimi",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Online Eğitim (1 Gün)',
                'Temel Panel Kullanımı',
                'Sipariş Yönetimi',
                'Katılım Belgesi'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Online/Fiziki Eğitim (2 Gün)',
                'Pazarlama Modülleri Eğitimi',
                'Kampanya Kurgusu Eğitimi',
                'Uygulamalı Atölye',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Ekip Bazlı Özelleştirilmiş Eğitim',
                'İleri Düzey Raporlama Eğitimi',
                '3 Ay Mentorluk Desteği',
                'Eğitim Kayıtları',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Yıllık Eğitim Planlaması',
                'Departman Bazlı Uzmanlık Eğitimleri',
                'LMS İçerik Üretimi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "İşe Alım Danışmanlığı",
          slug: "ise-alim-danismanligi",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'Pozisyon Tanımı Oluşturma',
                'İlan Metni Hazırlama',
                'Aday Havuzu Tarama',
                'CV Ön Eleme'
              ]
            },
            {
              name: 'Standard',
              price: '₺30.000',
              features: [
                'Basic paket özellikleri',
                'Teknik Mülakat Desteği',
                'Kültür Uyumu Değerlendirmesi',
                'Referans Kontrolü',
                'Mülakat Organizasyonu',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺50.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Yetenek Avcılığı (Headhunting)',
                'Teklif Süreci Yönetimi',
                'Onboarding Planlaması',
                '6 Ay Yerleştirme Garantisi',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Departman Yapılanması Danışmanlığı',
                'Yedekleme Planları',
                'Yönetici Koçluğu',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Strateji Atölyesi",
          slug: "strateji-atolyesi",
          packages: [
            {
              name: 'Basic',
              price: '₺20.000',
              features: [
                'Yarım Gün Atölye',
                'Mevcut Durum Analizi (SWOT)',
                'Temel Yol Haritası',
                'Sonuç Raporu'
              ]
            },
            {
              name: 'Standard',
              price: '₺40.000',
              features: [
                'Basic paket özellikleri',
                'Tam Gün Atölye',
                'Rakip & Pazar Analizi',
                'Hedef Kitle Personaları',
                'Aksiyon Planı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺75.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                '2 Günlük Kapsamlı Çalıştay',
                'Büyüme Hacking Kurguları',
                'Finansal Projeksiyonlar',
                'KPI Belirleme',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Dönemsel Strateji Revizyonları',
                'Yönetim Kurulu Sunumları',
                'Dijital Dönüşüm Yol Haritası',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Altyapı Partnerlikleri",
      slug: "altyapi-partnerlikleri",
      description: "Ticimax, İkas, T-Soft, Shopify ve diğerleri",
      icon: "Building",
      services: [
        {
          title: "Ticimax Kurulum",
          slug: "ticimax-kurulum",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Paket Seçimi Danışmanlığı',
                'Temel Ayarlar Yapılandırması',
                'Domain Yönlendirme',
                'SSL Kurulumu'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Hazır Tema Düzenleme',
                'Kategori Ağacı Oluşturma',
                'Ödeme & Kargo Entegrasyonu',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Özel CSS/JS Düzenlemeleri',
                'Veri Girişi (100 Ürün)',
                'SEO Modülü Ayarları',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Özel Tasarım Giydirme',
                'ERP / Muhasebe Entegrasyonu',
                'B2B Modül Kurulumu',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Ticimax Entegrasyon",
          slug: "ticimax-entegrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'XML Çıktısı Ayarlama',
                'Pazaryeri Bağlantısı (1 Adet)',
                'Stok Eşitleme',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'Çift Yönlü Entegrasyon',
                'Sipariş Aktarımı',
                'Kargo Etiketi Oluşturma',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Muhasebe Programı Entegrasyonu',
                'Fatura Tasarımı Uyarlama',
                'Otomatik SMS Kurguları',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Özel API Yazılımı',
                'Third-Party Tool Bağlantısı',
                'Depo Yönetim Sistemi (WMS)',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Ticimax E-İhracat",
          slug: "ticimax-e-ihracat",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'Döviz Ayarları',
                'Yurtdışı Kargo Tanımlama',
                'İngilizce Dil Paketi',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺25.000',
              features: [
                'Basic paket özellikleri',
                'Lokasyon Bazlı Yönlendirme',
                'Yurtdışı Pazaryeri (Etsy vb.)',
                'Otomatik Çeviri Modülü',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺40.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Ülke Bazlı Fiyatlandırma',
                'Gümrük Vergisi Hesaplama',
                'Global Ödeme Sistemleri',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Mikro İhracat Danışmanlığı',
                'Fulfilment Entegrasyonu',
                'Global Marka Stratejisi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Ticimax Migrasyon",
          slug: "ticimax-migrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Ürün Aktarımı',
                'Kategori Eşleştirme',
                'Marka Tanımlamaları',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Kullanıcı Üyelikleri Taşıma',
                'Resim Linklerini Güncelleme',
                '301 Yönlendirmeleri (URL)',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Tasarım Uyarlama (Birebir)',
                'Sipariş Geçmişi Aktarımı',
                'SEO Metadataları Taşıma',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Özel Veritabanı Scriptleri',
                'Blog & İçerik Taşıma',
                'Test & Validasyon Süreci',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "İkas Kurulum",
          slug: "ikas-kurulum",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'İkas Panel Kurulumu',
                'Tema Seçimi',
                'Logo & Favicon Yükleme',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Navigasyon Menüsü Ayarları',
                'Kargo & Ödeme Ayarları',
                'Hukuki Metin Girişleri',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Tema Özelleştirme (Liquid)',
                'Ürün Varyasyon Kurgusu',
                'Uygulama Mağazası Kurulumları',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Migrasyon Desteği',
                'Headless Commerce Danışmanlığı',
                'Özel App Geliştirme',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "İkas Entegrasyon",
          slug: "ikas-entegrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'İkas Pazaryeri Bağlantısı',
                'Temel Stok Takibi',
                'Fatura Entegrasyonu',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'Toplu Ürün Güncelleme',
                'Fiyat Kuralı Oluşturma',
                'Sipariş Bildirimleri',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Muhasebe Yazılımı Bağlantısı',
                'CRM Entegrasyonu',
                'Özel XML Entegrasyonu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Omnichannel Kurgusu',
                'Fiziksel Mağaza (POS) Bağlantısı',
                'Özel API Geliştirmeleri',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "İkas E-İhracat",
          slug: "ikas-e-ihracat",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'İkas Global Aktivasyonu',
                'Para Birimi Tanımları',
                'Yurtdışı Kargo Ayarları',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺25.000',
              features: [
                'Basic paket özellikleri',
                'Dil Çevirileri (AI Destekli)',
                'Yurtdışı SEO Ayarları',
                'Vergi Oranı Yapılandırması',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺40.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Ülke Bazlı Domain Yönlendirme',
                'Yurtdışı Reklam İzleme Kodları',
                'Global Pazaryeri Entegrasyonu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Depo & Fulfillment Entegrasyonu',
                'Uluslararası Marka Danışmanlığı',
                'Lokal Ödeme Çözümleri',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "İkas Migrasyon",
          slug: "ikas-migrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'CSV ile Ürün Yükleme',
                'Müşteri Listesi Aktarımı',
                'Görsel Taşıma',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Kategori Yapısı Koruma',
                'SEO Link Yönlendirmeleri',
                'Blog Yazıları Aktarımı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Sipariş Geçmişi Aktarımı',
                'Tema Görüntüsü Benzerliği',
                'Özel Alan (Metadata) Taşıma',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Tam Kapsamlı Veri Taşıma',
                'Script Dönüşümleri',
                'Canlıya Geçiş Desteği',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "T-Soft Kurulum",
          slug: "tsoft-kurulum",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Yönetim Paneli Eğitimi',
                'Site Ayarları',
                'Kategori Oluşturma',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Tasarım Sihirbazı Ayarları',
                'Mobil Uygulama Kontrolü',
                'Ödeme Sistemi Bağlantısı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'CSS/HTML Müdahalesi',
                'Kampanya Modülü Kurguları',
                'SEO Ayarları (Advanced)',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'B2B Portal Kurulumu',
                'CRM Modülü Yapılandırması',
                'Bayi Yönetimi Ayarları',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "T-Soft Entegrasyon",
          slug: "tsoft-entegrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Standart XML Entegrasyonu',
                'Stok Güncelleme',
                'Fiyat Güncelleme',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'ERP Entegrasyonu (Nebim vb.)',
                'Sipariş Akışı',
                'Cari Kart Eşlemesi',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Özel API Entegrasyonu',
                'Pazaryeri Connector',
                'Kargo Otomasyonu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Karmaşık Veri Mimarisi',
                'Özel Middleware',
                'Çoklu Depo Yönetimi',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "T-Soft E-İhracat",
          slug: "tsoft-e-ihracat",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'Dil Seçeneği Aktivasyonu',
                'Para Birimi Ekleme',
                'Yurtdışı Kargo Tablosu',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺25.000',
              features: [
                'Basic paket özellikleri',
                'Lokasyon Bazlı İçerik',
                'Google Translate API',
                'Yurtdışı Ödeme (Stripe vb.)',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺40.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Ülke Bazlı Kampanyalar',
                'Global Pazaryeri Entegrasyonları',
                'Yurtdışı SEO Yapılandırması',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Global Franchise Yönetimi',
                'Uluslararası Lojistik Kurgusu',
                'Gümrük Entegrasyonları',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "T-Soft Migrasyon",
          slug: "tsoft-migrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Excel ile Veri Transferi',
                'Kategori Yapısı Oluşturma',
                'Görsel Yükleme',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'URL Rewrite (301)',
                'SEO Bilgilerinin Taşınması',
                'Blog/Haber Aktarımı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Üye ve Sipariş Transferi',
                'Yorum ve Puan Aktarımı',
                'Tasarım Uyarlaması',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Tam XML Entegrasyon Geçişi',
                'Özel Kod Taşıma',
                'Risk Analizi ve Test',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Shopify Tema",
          slug: "shopify-tema",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Hazır Tema Kurulumu',
                'Logo & Renk Ayarları',
                'Ana Sayfa Düzeni',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺25.000',
              features: [
                'Basic paket özellikleri',
                'Tema Türkçeleştirme',
                'Font Özelleştirme',
                'Koleksiyon Sayfası Tasarımı',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺45.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Liquid Kod Düzenlemeleri',
                'Özel Sayfa Şablonları (LP)',
                'Hız Optimizasyonu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Sıfırdan Özel Tema Yazılımı',
                'Headless Shopify',
                'Gelişmiş UX/UI Testleri',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Shopify Markets",
          slug: "shopify-markets",
          packages: [
            {
              name: 'Basic',
              price: '₺10.000',
              features: [
                'Markets Aktivasyonu',
                'Para Birimi Ekleme',
                'Temel Bölge Ayarları',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺20.000',
              features: [
                'Basic paket özellikleri',
                'Translate & Adapt Kurulumu',
                'Uluslararası Fiyatlandırma',
                'Kargo Profilleri',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺35.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Subdomain/Alt Klasör Ayarları',
                'Yerel Ödeme Yöntemleri',
                'Duty & Tax Hesaplama',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Shopify Plus Markets Pro',
                'Global Envanter Yönetimi',
                'Özel B2B Markets',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Shopify Entegrasyon",
          slug: "shopify-entegrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'App Store Uygulama Kurulumu',
                'Pazaryeri Bağlantısı (Temel)',
                'Google Merchant Center',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺15.000',
              features: [
                'Basic paket özellikleri',
                'E-fatura Entegrasyonu',
                'Kargo Firması Entegrasyonu',
                'SMS & Email Marketing App',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺30.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Custom Private App',
                'ERP Entegrasyonu',
                'Stok Senkronizasyonu',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'API Tabanlı Komple Çözüm',
                'Legacy Sistem Bağlantısı',
                'Yüksek Performanslı Veri Akışı',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Shopify Migrasyon",
          slug: "shopify-migrasyon",
          packages: [
            {
              name: 'Basic',
              price: '₺15.000',
              features: [
                'Matrixify Kullanımı',
                'Ürün ve Müşteri Taşıma',
                'Temel Görsel Aktarımı',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺30.000',
              features: [
                'Basic paket özellikleri',
                'URL Yönlendirmeleri (301)',
                'Sipariş Geçmişi',
                'Blog Yazıları',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺50.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Metafield Tanımlamaları ve Taşıma',
                'Tema Uyarlaması',
                'Yorum Aktarımı (Review Apps)',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Script Tag Aktarımı',
                'Özel Fonksiyonların Yeniden Yazımı',
                'Plus Mimarisine Geçiş',
                'Kurumsal SLA'
              ]
            }
          ]
        },
        {
          title: "Diğer: IdeaSoft, Qukasoft, Faprika",
          slug: "diger-partnerler",
          packages: [
            {
              name: 'Basic',
              price: '₺5.000',
              features: [
                'Panel Kurulum Desteği',
                'DNS Yönlendirme',
                'Temel Ayarlar',
                'E-posta Desteği'
              ]
            },
            {
              name: 'Standard',
              price: '₺10.000',
              features: [
                'Basic paket özellikleri',
                'XML Entegrasyonu',
                'Thema Düzenleme (CSS)',
                'Ödeme Ayarları',
                'Öncelikli Destek'
              ]
            },
            {
              name: 'Pro',
              price: '₺20.000',
              highlighted: true,
              features: [
                'Standard paket özellikleri',
                'Veri Taşıma Desteği',
                'Gelişmiş SEO Ayarları',
                'Eğitim ve Danışmanlık',
                '7/24 Destek',
                'Özel Hesap Yöneticisi'
              ]
            },
            {
              name: 'Enterprise',
              price: 'Özel Fiyat',
              features: [
                'Pro paket özellikleri',
                'Platform Değişikliği Projesi',
                'Özel API Geliştirmeleri',
                'Kurumsal Anlaşmalar',
                'Kurumsal SLA'
              ]
            }
          ]
        }
      ]
    }
  ]
}