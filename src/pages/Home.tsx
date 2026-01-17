import { useState, useEffect, useRef } from 'react'
import {
    Layers,
    ArrowRight,
    Star,
    Plus,
    Instagram,
    Linkedin,
    Twitter
} from 'lucide-react'
import { navigationData } from '../fosil_data'
import { Meteors } from '@/components/ui/meteors'

// Testimonials data
const testimonials = [
    {
        name: "Can Özkan",
        role: "Kurucu Ortak",
        company: "Batı Sömine",
        initials: "CÖ",
        content: "Basılı reklam tasarımlarımızı dijital dünyaya taşımak için Fosil Ajans ile çalıştık. Üretim süreçlerimizi optimize eden çözümler geliştirdiler. Sosyal medya yönetimi hizmetleri sayesinde marka bilinirliğimiz %180 arttı. Ekip her zaman ulaşılabilir ve çözüm odaklı."
    },
    {
        name: "Selin Yıldız",
        role: "Dijital Pazarlama Uzmanı",
        company: "Emirgan Halı",
        initials: "SY",
        content: "SEO çalışmaları ve dijital reklam yönetimi konusunda Fosil Ajans'ın performansı gerçekten etkileyici. Organik trafiğimiz %250 artarken, arama motoru sıralamalarımızda önemli iyileşmeler yaşadık. E-ticaret çözümleri de beklentilerimizin üzerindeydi."
    },
    {
        name: "Burak Şahin",
        role: "Marka Müdürü",
        company: "Kisshu Kozmetik",
        initials: "BŞ",
        content: "Fosil Ajans'ın grafik tasarım ve logo tasarım hizmetleri markamızı tamamen yeniledi. Kurumsal kimlik çalışmaları profesyonel bir şekilde tamamlandı. Web tasarım sürecinde gösterdikleri yaratıcılık ve teknik uzmanlık takdire şayan."
    }
]

// Reference project data
const referenceProjects = [
    { image: '/img/referans/siron-celik-katalog.webp', title: 'Çelik', subtitle: 'dijital katalog' },
    { image: '/img/referans/yoi-kurumsal-katalog.webp', title: 'Yoi Studio Dekorasyon', subtitle: 'Kurumsal ürünler katalog' },
    { image: '/img/referans/noblex-coffee.webp', title: 'Noblex Coffee', subtitle: 'Kahve üreticisi ambalaj paket tasarım' },
    { image: '/img/referans/kisshu-kozmetik-ikas.webp', title: 'Kisshu Kozmetik', subtitle: 'Kozmetik e-ticaret web sitesi' },
    { image: '/img/referans/emirgan-hali-ikas.webp', title: 'Emirgan Halı', subtitle: 'E-ticaret web sitesi' },
    { image: '/img/referans/kirmizisato-instagram.webp', title: 'Kırmızı Sato', subtitle: 'Sosyal medya yönetimi' },
    { image: '/img/referans/sidrex-web-site-ikas.webp', title: 'Sidrex', subtitle: 'Kurumsal web sitesi' },
    { image: '/img/referans/tohumluktan-instagram.webp', title: 'Tohumluktan', subtitle: 'Sosyal medya tasarım' },
]

// Brand logos for the marquee
const brandLogos = [
    '/img/markalar/cengiz-inler-logo.webp',
    '/img/markalar/hangel-logo.webp',
    '/img/markalar/akilli-saat-tekirdag-logo.webp',
    '/img/markalar/yoi-studio-logo.webp',
    '/img/markalar/shazel-logo.webp',
    '/img/markalar/astro-ecem-logo.webp',
    '/img/markalar/akdeniz-somine-logo.webp',
    '/img/markalar/bagaj-havuzu-logo.webp',
    '/img/markalar/emirgan-hali-logo.webp',
    '/img/markalar/plasmen-logo.webp',
    '/img/markalar/tesettur-han-logo.webp',
    '/img/markalar/imextech-logo.webp',
    '/img/markalar/red-castle-logo.webp',
    '/img/markalar/orange-padel-logo.webp',
    '/img/markalar/rug-chef-logo.webp',
    '/img/markalar/paydone-group-logo.webp',
]

const categories = navigationData.categories

// Simple icon map - can be expanded or replaced with proper imports
const iconMap: { [key: string]: React.ReactNode } = {
    // ... we can rely on defaults or pass icons properly. For now simple.
}

export default function Home() {
    const [refGalleryOffset, setRefGalleryOffset] = useState(0)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const scrollDelta = currentScrollY - lastScrollY.current
            setRefGalleryOffset(prev => {
                const newOffset = prev - scrollDelta * 0.5
                const maxOffset = 200
                const minOffset = -800
                return Math.max(minOffset, Math.min(maxOffset, newOffset))
            })
            lastScrollY.current = currentScrollY
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-image-container">
                        <img src="/img/dino.png" alt="Fosil Dino Background" className="hero-dino-bg" />
                        <img src="/img/dino2.png" alt="Fosil Dino" className="hero-dino-fg" />
                        <div className="hero-image-mask"></div>
                        <div className="hero-aurora-overlay"></div>
                    </div>

                    <div className="hero-content">
                        <span className="hero-tagline">
                            <span className="tagline-dot"></span>
                            Dijital Dönüşüm Ajansı
                        </span>
                        <h1 className="hero-title">
                            <span className="hero-title-bold">Fosil ile</span> <span className="highlight-marker">Dijital Evrimi</span><br />
                            <span className="hero-title-bold">Başlat.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Fosil, dijital dünyada markaların evrim geçirdiği yer. Burada iz bırakmak önemli.
                            Markanı dijital dünyada kalıcı kılmak için tasarım, teknoloji ve stratejiyi birleştirerek
                            işini büyüten, hatırlanan ve etkileyici dijital deneyimler yaratıyoruz.
                        </p>
                        <div className="hero-actions">
                            <a href="#hizmetler" className="btn btn-primary btn-lg">Hizmetleri Keşfet</a>
                            <a href="#hakkimizda" className="btn btn-ghost-play btn-lg">
                                <span className="play-icon">▶</span> Bizi Tanı
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reference Projects Gallery - Scroll Reactive */}
            <section className="references-gallery">
                <div
                    className="references-track"
                    style={{ transform: `translateX(${refGalleryOffset}px)` }}
                >
                    {referenceProjects.map((project, index) => (
                        <div key={index} className="reference-card">
                            <div className="reference-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="reference-image"
                                    loading="lazy"
                                />
                                <div className="reference-overlay">
                                    <span className="reference-view-text">Projeyi İncele</span>
                                </div>
                            </div>
                            <div className="reference-info">
                                <h3 className="reference-title">{project.title}</h3>
                                <p className="reference-subtitle">{project.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Brands Section */}
            <section className="brands-section">
                <p className="brands-tagline">
                    200'den Fazla Firma, Sıfırdan Yükselenler, Değerini Katlayanlar ve Her Zaman Önde Olanlar...
                </p>
                <div className="brands-grid">
                    {brandLogos.map((logo, index) => (
                        <div key={index} className="brand-logo-wrapper">
                            <img src={logo} alt="Marka logosu" className="brand-logo" loading="lazy" />
                        </div>
                    ))}
                    <div className="brand-logo-wrapper brand-cta-cell">
                        <a href="#iletisim" className="btn btn-primary btn-sm">
                            Sizi de Ekleyelim
                            <Plus size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Agency Intro (Video) */}
            <section className="section agency-intro-section">
                <div className="agency-container">
                    <div className="agency-intro-grid">
                        <div className="agency-video-container">
                            <div className="agency-video-wrapper">
                                <video src="/img/ajans.mp4" className="agency-video" autoPlay muted loop playsInline />
                            </div>
                            <div className="agency-bracket"></div>
                        </div>
                        <div className="agency-content">
                            <div className="agency-label">DİJİTAL BİRİM DEPARTMANINIZ GİBİ ÇALIŞAN AJANS</div>
                            <h2 className="agency-title">Siz İşinize Odaklanın, <span className="text-highlight">Operasyonu Bize</span> Bırakın.</h2>
                            <p className="agency-description">
                                Fosil, markanızın dijital çağda hayatta kalması ve evrimleşmesi için gereken genetik kodları yazar.
                                Sıradan bir ajans değil, dijital ekosistemin zorlu koşullarında sizi zirveye taşıyan evrimsel bir güçtür.
                            </p>
                            {/* Features omitted for brevity but can be added back */}
                            <div className="agency-actions">
                                <a href="#hakkimizda" className="btn-story-text">Fosil'in Hikayesini Keşfet</a>
                                <a href="#hakkimizda" className="btn-story-arrow"><span className="arrow-icon">→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section" id="hizmetler">
                <div className="container">
                    <div className="section-header services-header">
                        <div className="section-label-wrapper">
                            <span className="section-label-icon">◇</span>
                            <span className="section-label-text">Neler Yapıyoruz?</span>
                        </div>
                        <h2 className="section-title-large">Markanı Dijital Evrime Taşıyan Hizmetler</h2>
                    </div>

                    <div className="services-grid">
                        {categories.map((category, index) => {
                            const isLastCard = index === categories.length - 1;
                            return (
                                <div key={category.slug} className={`service-card group relative overflow-hidden ${isLastCard ? 'service-card-wide' : ''}`}>
                                    <div className="service-card-bg-icon">
                                        <Layers size={120} />
                                    </div>
                                    <div className="service-card-header">
                                        <h3 className="service-card-title">{category.title}</h3>
                                        {!isLastCard && (
                                            <a href={`#${category.slug}`} className="service-card-arrow">
                                                <ArrowRight size={18} />
                                                <span className="arrow-text">Detaylar</span>
                                            </a>
                                        )}
                                    </div>
                                    <p className="service-card-description">{category.description}</p>
                                    <div className="service-card-tags">
                                        {category.items?.slice(0, 4).map((service, i) => (
                                            <span key={i} className="service-tag">{service}</span>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 h-full w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Meteors number={40} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title-large">Mutlu <span className="text-highlight">Müşterilerimiz</span></h2>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card group relative overflow-hidden">
                                <div className="absolute inset-0 h-full w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Meteors number={40} />
                                </div>
                                <div className="testimonial-stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <p className="testimonial-content">{testimonial.content}</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">
                                        <span className="testimonial-initials">{testimonial.initials}</span>
                                    </div>
                                    <div className="testimonial-info">
                                        <h4 className="testimonial-name">{testimonial.name}</h4>
                                        <p className="testimonial-role">{testimonial.role}, {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
