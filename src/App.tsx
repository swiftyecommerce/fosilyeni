import { useState, useEffect, useRef } from 'react'
import { navigationData } from './fosil_data'
import { AuroraBackground } from './components/AuroraBackground'
import {
    ShoppingCart,
    Lightbulb,
    Palette,
    Code,
    Search,
    Layers,
    Store,
    TrendingUp,
    ArrowRight,
    Instagram,
    Twitter,
    Linkedin,
    Menu,
    Plus,
    Video,
    Package,
    LayoutGrid,
    BookOpen
} from 'lucide-react'

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

// Icon mapping for categories
const iconMap: { [key: string]: React.ReactNode } = {
    ShoppingCart: <ShoppingCart size={24} />,
    Lightbulb: <Lightbulb size={24} />,
    Palette: <Palette size={24} />,
    Code: <Code size={24} />,
    Search: <Search size={24} />,
    Layers: <Layers size={24} />,
    Store: <Store size={24} />,
    TrendingUp: <TrendingUp size={24} />,
    Video: <Video size={24} />,
    Package: <Package size={24} />,
    LayoutGrid: <LayoutGrid size={24} />,
    BookOpen: <BookOpen size={24} />,
}

function App() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark')
    const [isScrolled, setIsScrolled] = useState(false)
    const [refGalleryOffset, setRefGalleryOffset] = useState(0)
    const lastScrollY = useRef(0)
    const heroRef = useRef<HTMLElement>(null)

    useEffect(() => {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(prefersDark ? 'dark' : 'dark') // Default to dark
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setIsScrolled(currentScrollY > 10) // Instant navbar change on any scroll

            // Calculate scroll direction for reference gallery
            const scrollDelta = currentScrollY - lastScrollY.current
            // Scroll down = move left (negative), scroll up = move right (positive)
            setRefGalleryOffset(prev => {
                const newOffset = prev - scrollDelta * 0.5
                // Limit the offset range
                const maxOffset = 200
                const minOffset = -800
                return Math.max(minOffset, Math.min(maxOffset, newOffset))
            })

            lastScrollY.current = currentScrollY
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])



    const categories = navigationData.categories

    return (
        <div className="app">
            {/* WebGL Aurora Background with Perlin Noise + Mouse Ripples */}
            <AuroraBackground />

            {/* Header */}
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-inner">
                    <a href="/" className="logo">
                        <img src="/img/logo.webp" alt="Fosil" className="logo-img" />
                    </a>

                    <nav className="nav nav-pill">
                        <a href="#hizmetler" className="nav-link">Hizmetler</a>
                        <a href="#hakkimizda" className="nav-link">Hakkımızda</a>
                        <a href="#referanslar" className="nav-link">Referanslar</a>
                        <a href="#blog" className="nav-link">Blog</a>
                    </nav>

                    <a href="#iletisim" className="btn btn-primary btn-sm header-cta">
                        İletişime Geç
                    </a>

                    <button className="mobile-menu-btn" aria-label="Menüyü aç">
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero" ref={heroRef}>
                <div className="hero-inner">
                    <div className="hero-image-container">
                        {/* Background layer - blurred with 80% opacity */}
                        <img
                            src="/img/dino.png"
                            alt="Fosil Dino Background"
                            className="hero-dino-bg"
                        />
                        {/* Foreground layer - sharp and clear */}
                        <img
                            src="/img/dino2.png"
                            alt="Fosil Dino"
                            className="hero-dino-fg"
                        />
                        <div className="hero-image-mask"></div>
                        <div className="hero-aurora-overlay"></div>
                    </div>

                    <div className="hero-content">
                        <span className="hero-tagline">
                            <span className="tagline-dot"></span>
                            Dijital Dönüşüm Ajansı
                        </span>
                        <h1 className="hero-title">
                            <span className="hero-title-italic">Fosil ile</span><br />
                            <span className="hero-title-accent">Dijital Evrimi</span><br />
                            <span className="hero-title-bold">Başlat.</span>
                        </h1>

                        <p className="hero-subtitle">
                            Fosil, dijital dünyada markaların evrim geçirdiği yer. Burada iz bırakmak önemli.
                            Markanı dijital dünyada kalıcı kılmak için tasarım, teknoloji ve stratejiyi birleştirerek
                            işini büyüten, hatırlanan ve etkileyici dijital deneyimler yaratıyoruz.
                        </p>

                        <div className="hero-actions">
                            <a href="#hizmetler" className="btn btn-primary btn-lg">
                                Hizmetleri Keşfet
                            </a>
                            <a href="#hakkimizda" className="btn btn-ghost-play btn-lg">
                                <span className="play-icon">▶</span>
                                Bizi Tanı
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

            {/* Services Section */}
            <section className="section" id="hizmetler">
                <div className="container">
                    <div className="section-header services-header">
                        <p className="section-intro-italic">
                            Evrim burada durmaz — markanı dönüştüren adımlar tam burada başlıyor.
                        </p>
                        <div className="section-label-wrapper">
                            <span className="section-label-icon">◇</span>
                            <span className="section-label-text">Neler Yapıyoruz?</span>
                        </div>
                        <h2 className="section-title-large">Markanı Dijital Evrime Taşıyan Hizmetler</h2>
                        <p className="section-description-large">
                            Fosil’de her proje, markanı sadece internete taşımak için değil, dijitalde dönüştürmek için tasarlanır. Tasarım, yazılım, pazarlama ve strateji... Hepsi aynı hedef için: Gerçek ve kalıcı büyüme.
                        </p>
                    </div>

                    <div className="services-grid">
                        {categories.map((category, index) => {
                            const isLastCard = index === categories.length - 1;

                            return (
                                <div
                                    key={category.slug}
                                    className={`service-card ${isLastCard ? 'service-card-wide' : ''}`}
                                >
                                    {/* Background blur icon */}
                                    <div className="service-card-bg-icon">
                                        {iconMap[category.icon || 'Layers'] || <Layers size={120} />}
                                    </div>

                                    {/* Card header with title and arrow */}
                                    <div className="service-card-header">
                                        <h3 className="service-card-title">{category.title}</h3>
                                        {!isLastCard && (
                                            <a href={`#${category.slug}`} className="service-card-arrow">
                                                <ArrowRight size={18} />
                                                <span className="arrow-text">Detaylar</span>
                                            </a>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="service-card-description">{category.description}</p>

                                    {/* Tags */}
                                    <div className="service-card-tags">
                                        {category.services.slice(0, 4).map((service) => (
                                            <span key={service.slug} className="service-tag">
                                                {service.title}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Free Info Button for Last Card */}
                                    {isLastCard && (
                                        <div style={{ marginTop: 'var(--space-6)' }}>
                                            <a href="#iletisim" className="btn btn-primary">
                                                Ücretsiz Bilgi Al
                                            </a>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Infinite Marquee Section */}
            <section className="marquee-section">
                <div className="marquee-container">
                    {/* Row 1: Tools (Scrolling Right) - Rotated Wrapper */}
                    <div className="marquee-track-wrapper rotate-neg">
                        <div className="marquee-row marquee-right">
                            {[...Array(6)].map((_, i) => (
                                <div key={`tools-${i}`} className="marquee-content">
                                    <img src="/img/araclar/react-logo.webp" alt="React" />
                                    <img src="/img/araclar/google-ads-logo.webp" alt="Google Ads" />
                                    <img src="/img/araclar/chatgpt-logo.webp" alt="ChatGPT" />
                                    <img src="/img/araclar/meta-logo.webp" alt="Meta" />
                                    <img src="/img/araclar/canva-logo.webp" alt="Canva" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Partners (Scrolling Left) - Rotated Wrapper */}
                    <div className="marquee-track-wrapper rotate-pos">
                        <div className="marquee-row marquee-left">
                            {[...Array(6)].map((_, i) => (
                                <div key={`partners-${i}`} className="marquee-content">
                                    <img src="/img/isortaklari/shopify-logo.webp" alt="Shopify" />
                                    <img src="/img/isortaklari/ikas-logo.webp" alt="Ikas" />
                                    <img src="/img/isortaklari/ticimax-logo.webp" alt="Ticimax" />
                                    <img src="/img/isortaklari/ideasoft-logo.webp" alt="IdeaSoft" />
                                    <img src="/img/isortaklari/t-soft-logo.webp" alt="T-Soft" />
                                    <img src="/img/isortaklari/woo-commerce-logo.webp" alt="WooCommerce" />
                                    <img src="/img/isortaklari/wordpress-logo.webp" alt="WordPress" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="section projects-section">
                <div className="section-header">
                    <div className="section-label-wrapper">
                        <span className="section-label-icon">✦</span>
                        <span className="section-label-text">Neler Yaptık?</span>
                    </div>
                    <h2 className="section-title-large">Dönüşüme Bizimle Başlayanlar</h2>
                    <p className="section-description-large">
                        Kurumsal vizyonlarını dijitale taşıyan markalarla birçok başarılı projeye imza attık. Web tasarımından dijital pazarlamaya, sosyal medya yönetiminden e-ticaret çözümlerine kadar sunduğumuz hizmetlerle yüksek memnuniyet ve sürdürülebilir başarı sağladık. İşte dönüşüm yolculuğunu bizimle başlatan bazı iş ortaklarımız.
                    </p>
                </div>

                <div className="container projects-container">
                    {/* Project 1: Red Castle */}
                    <div className="project-card">
                        <div className="project-image-wrapper">
                            <img src="/img/projeler/kirmizisato.webp" alt="Red Castle Project" className="project-image" />
                        </div>
                        <div className="project-content">
                            <div className="project-brand-header">
                                <h3 className="project-title">Red Castle</h3>
                            </div>
                            <h4 className="project-subtitle">E-ticaret ve Pazaryeri yönetimine sıfırdan birlikte adım attığımız Kırmızı Şato ile yıllık ciro hedeflerine adım adım yürümekteyiz.</h4>
                            <div className="project-tags">
                                <span className="project-tag">İkas</span>
                                <span className="project-tag">E-Ticaret</span>
                                <span className="project-tag">Trendyol</span>
                                <span className="project-tag">Hepsi Burada</span>
                                <span className="project-tag">Meta</span>
                                <span className="project-tag">Google</span>
                                <span className="project-tag">Instagram</span>
                            </div>
                            <button className="btn-primary project-btn">Projeyi İncele</button>
                        </div>
                    </div>

                    {/* Project 2: Yoi Studio (Text Left, Image Right) */}
                    <div className="project-card reverse-layout">
                        <div className="project-content">
                            <div className="project-brand-header">
                                <h3 className="project-title">Yoi Studio</h3>
                            </div>
                            <h4 className="project-subtitle">Fiziki mağazanın kurulumundan e ticaretin kurulumuna, ticarete dair tüm adımları birlikte attığımız Yoi Studio, bizimle birlikte iç dekorasyona vizyon kazandıran ihracat serüvenini tüm hızıyla sürdürmektedir.</h4>
                            <div className="project-tags">
                                <span className="project-tag">İkas</span>
                                <span className="project-tag">E-Ticaret</span>
                                <span className="project-tag">Meta</span>
                                <span className="project-tag">Google Ads</span>
                                <span className="project-tag">Instagram</span>
                                <span className="project-tag">Katalog</span>
                                <span className="project-tag">Tabela</span>
                                <span className="project-tag">Logo</span>
                            </div>
                            <button className="btn-primary project-btn">Projeyi İncele</button>
                        </div>
                        <div className="project-image-wrapper">
                            <img src="/img/projeler/yoi-katalog.webp" alt="Yoi Studio Project" className="project-image" />
                        </div>
                    </div>

                    {/* Project 3: Sidrex */}
                    <div className="project-card">
                        <div className="project-image-wrapper">
                            <img src="/img/projeler/sidrex.webp" alt="Sidrex Project" className="project-image" />
                        </div>
                        <div className="project-content">
                            <div className="project-brand-header">
                                <h3 className="project-title">Sidrex</h3>
                            </div>
                            <h4 className="project-subtitle">Takviye edici gıda sektöründe çarpıcı izler bırakmak için pazaryerinde varolan Sidrex, fosil.io iş birliği ile pazaryerlerinde zirveye hızla yükselişini sürdürürken, eticaret serüveninde emin adımlarla ilerlemektedir.</h4>
                            <div className="project-tags">
                                <span className="project-tag">Trendyol</span>
                                <span className="project-tag">İkas</span>
                                <span className="project-tag">E-Ticaret</span>
                                <span className="project-tag">Hepsi Burada</span>
                                <span className="project-tag">Meta</span>
                                <span className="project-tag">Google</span>
                            </div>
                            <button className="btn-primary project-btn">Projeyi İncele</button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item card">
                            <div className="stat-value">500+</div>
                            <div className="stat-label">Tamamlanan Proje</div>
                        </div>
                        <div className="stat-item card">
                            <div className="stat-value">98%</div>
                            <div className="stat-label">Müşteri Memnuniyeti</div>
                        </div>
                        <div className="stat-item card">
                            <div className="stat-value">50+</div>
                            <div className="stat-label">Uzman Ekip</div>
                        </div>
                        <div className="stat-item card">
                            <div className="stat-value">8+</div>
                            <div className="stat-label">Yıllık Deneyim</div>
                        </div>
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="cta-section" >
                <div className="container">
                    <div className="cta-card">
                        <h2 className="cta-title">Projenizi hayata geçirelim</h2>
                        <p className="cta-description">
                            Dijital hedeflerinizi birlikte belirleyelim ve markanızı
                            büyütecek stratejiler geliştirelim.
                        </p>
                        <a href="#iletisim" className="btn btn-primary btn-lg">
                            Hemen Başlayalım
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section >

            {/* Footer */}
            < footer className="footer" >
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="logo-icon">F</div>
                            <span>Fosil</span>
                        </div>
                        <p className="footer-tagline">
                            Türkiye'nin lider dijital performans ajansı.
                            E-ticaret, pazarlama ve yazılım alanlarında
                            işletmelere değer katıyoruz.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Hizmetler</h4>
                        <div className="footer-links">
                            {categories.slice(0, 4).map((cat) => (
                                <a key={cat.slug} href={`#${cat.slug}`} className="footer-link">
                                    {cat.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Şirket</h4>
                        <div className="footer-links">
                            <a href="#hakkimizda" className="footer-link">Hakkımızda</a>
                            <a href="#referanslar" className="footer-link">Referanslar</a>
                            <a href="#blog" className="footer-link">Blog</a>
                            <a href="#kariyer" className="footer-link">Kariyer</a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>İletişim</h4>
                        <div className="footer-links">
                            <a href="tel:+902121234567" className="footer-link">+90 212 123 45 67</a>
                            <a href="mailto:info@fosil.com.tr" className="footer-link">info@fosil.com.tr</a>
                            <span className="footer-link">İstanbul, Türkiye</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2024 Fosil. Tüm hakları saklıdır.
                    </p>
                    <div className="footer-socials">
                        <a href="#" className="footer-social" aria-label="Instagram">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="footer-social" aria-label="Twitter">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="footer-social" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default App
