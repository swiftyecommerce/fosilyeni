import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AuroraBackground } from './components/AuroraBackground'
import { Meteors } from '@/components/ui/meteors'
import { navigationData } from './fosil_data'
import Services from './pages/Services'
import About from './pages/About'
import References from './pages/References'
import Blog from './pages/Blog'
import Team from './pages/Team'
import {
    Layers,
    ArrowRight,
    Star,
    Plus,
    Instagram,
    Linkedin,
    Twitter,
    Menu,
    X,
    ShoppingCart,
    Lightbulb,
    Palette,
    Code,
    Search,
    Store,
    TrendingUp,
    Video,
    Package,
    LayoutGrid,
    BookOpen
} from 'lucide-react'

// Icon mapping
const iconMap: { [key: string]: any } = {
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

const categories = navigationData.categories

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

function App() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [refGalleryOffset, setRefGalleryOffset] = useState(0)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(prefersDark ? 'dark' : 'dark')
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Header scroll effect
            if (currentScrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            // Reference gallery scroll effect
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
        <div className="app">
            <AuroraBackground />

            {/* Header with centered Layout */}
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-inner">
                    {/* Left: Logo */}
                    <Link to="/" className="logo">
                        <img src="/img/logo.webp" alt="Fosil Digital" className="logo-img" />
                    </Link>

                    {/* Center: Navigation Pill */}
                    <nav className="nav hidden md:flex" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                        <div className="nav-pill">
                            <Link to="/hizmetler" className="nav-link">Hizmetler</Link>
                            <Link to="/referanslar" className="nav-link">Referanslar</Link>
                            <Link to="/hakkimizda" className="nav-link">Kurumsal</Link>
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </div>
                    </nav>

                    {/* Right: Actions */}
                    <div className="header-actions flex items-center gap-4">
                        <a href="#iletisim" className="btn btn-primary btn-sm header-cta hidden md:inline-flex">Teklif Al</a>
                        {/* Mobile Menu Toggle */}
                        <button
                            className="mobile-menu-toggle md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <Routes>
                    {/* Ana Sayfa */}
                    <Route path="/" element={
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
                                            <Link to="/hizmetler" className="btn btn-primary btn-lg">Hizmetleri Keşfet</Link>
                                            <Link to="/hakkimizda" className="btn btn-ghost-play btn-lg">
                                                <span className="play-icon">▶</span> Bizi Tanı
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Reference Projects Gallery */}
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

                            {/* Agency Intro Section */}
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
                                            <div className="agency-actions">
                                                <Link to="/hakkimizda" className="btn-story-text">Fosil'in Hikayesini Keşfet</Link>
                                                <Link to="/hakkimizda" className="btn-story-arrow"><span className="arrow-icon">→</span></Link>
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
                                                        {iconMap[category.icon || 'Layers'] || <Layers size={120} />}
                                                    </div>
                                                    <div className="service-card-header">
                                                        <h3 className="service-card-title">{category.title}</h3>
                                                        {!isLastCard && (
                                                            <div className="service-card-arrow">
                                                                <ArrowRight size={18} />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <p className="service-card-description">{category.description}</p>
                                                    <div className="service-card-tags">
                                                        {category.services?.slice(0, 4).map((service: any) => (
                                                            <span key={service.slug} className="service-tag">{service.title}</span>
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

                            {/* Infinite Marquee Section */}
                            <section className="marquee-section">
                                <div className="marquee-container">
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
                                    {/* Sidrex */}
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

                                    {/* Yoi Studio */}
                                    <div className="project-card">
                                        <div className="project-image-wrapper">
                                            <img src="/img/projeler/yoi-katalog.webp" alt="Yoi Studio Project" className="project-image" />
                                        </div>
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
                                    </div>

                                    {/* Red Castle */}
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

                            {/* Blog Section */}
                            <section className="section blog-section">
                                <div className="container">
                                    <div className="section-header">
                                        <div className="section-label-wrapper">
                                            <span className="section-label-icon">✦</span>
                                            <span className="section-label-text">Blog</span>
                                        </div>
                                        <h2 className="section-title-large">Bilgi Paylaştıkça <span className="text-highlight">Çoğalır</span></h2>
                                        <p className="section-description-large">
                                            Güncel pazaryeri trendleri, reklam stratejileri ve mağaza optimizasyonu üzerine rehber içerikler. E-ticarette güncel kalmak isteyen markalar için Fosil Blog.
                                        </p>
                                    </div>
                                    <div className="blog-grid">
                                        <a href="#" className="blog-card">
                                            <div className="blog-image-wrapper">
                                                <div className="blog-image-placeholder blog-placeholder-1"></div>
                                                <div className="blog-overlay"></div>
                                                <div className="blog-category-tags">
                                                    <span className="blog-tag">E-Ticaret</span>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h3 className="blog-title">Basitleştirilmiş Gümrük Beyannamesinde (BGB) Önemli Değişiklik</h3>
                                                <p className="blog-excerpt">Ullamcorper dignissim cras tincidunt lobortis. Lorem ipsum dolor sit amet consectetur. Bibendum ut tristique et egestas.</p>
                                                <span className="blog-time">3 gün önce</span>
                                            </div>
                                        </a>
                                        <a href="#" className="blog-card">
                                            <div className="blog-image-wrapper">
                                                <div className="blog-image-placeholder blog-placeholder-2"></div>
                                                <div className="blog-overlay"></div>
                                                <div className="blog-category-tags">
                                                    <span className="blog-tag">Eğitim</span>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h3 className="blog-title">Akbank Dönüşüm Akademisi & Timwings E-Ticaret ve E-İhracat Eğitimleri</h3>
                                                <p className="blog-excerpt">Ullamcorper dignissim cras tincidunt lobortis. Lorem ipsum dolor sit amet consectetur. Bibendum ut tristique et egestas.</p>
                                                <span className="blog-time">1 hafta önce</span>
                                            </div>
                                        </a>
                                        <a href="#" className="blog-card">
                                            <div className="blog-image-wrapper">
                                                <div className="blog-image-placeholder blog-placeholder-3"></div>
                                                <div className="blog-overlay"></div>
                                                <div className="blog-category-tags">
                                                    <span className="blog-tag">Lojistik</span>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h3 className="blog-title">E-Ticarette Kargo ve Lojistik Çözümleri (Kargo Şirketi ile Anlaşın)</h3>
                                                <p className="blog-excerpt">Ullamcorper dignissim cras tincidunt lobortis. Lorem ipsum dolor sit amet consectetur. Bibendum ut tristique et egestas.</p>
                                                <span className="blog-time">2 hafta önce</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="blog-actions">
                                        <Link to="/blog" className="btn btn-secondary btn-lg">Tüm Yazıları Gör</Link>
                                    </div>
                                </div>
                            </section>

                            {/* Team Section */}
                            <section className="section team-section">
                                <div className="container">
                                    <div className="section-header">
                                        <div className="section-label-wrapper">
                                            <span className="section-label-icon">✦</span>
                                            <span className="section-label-text">Ekibimiz</span>
                                        </div>
                                        <h2 className="section-title-large">Dijital Evrimin <span className="text-highlight">Öncüleri</span></h2>
                                        <p className="section-description-large">
                                            Fosil Dijital, pazarlama, tasarım, operasyon ve yazılımı aynı masada buluşturan, markaların dijital evrimine liderlik eden çekirdek bir ekiptir. Her proje bizim için sadece bir iş değil, birlikte yazılan bir başarı hikayesidir.
                                        </p>
                                    </div>

                                    <div className="team-grid">
                                        <div className="team-card">
                                            <div className="team-image-wrapper">
                                                <img src="/img/ekip/serdar.png" alt="Serdar Topbaş" className="team-image" />
                                                <div className="team-info-overlay">
                                                    <h3 className="team-name">Serdar Topbaş</h3>
                                                    <p className="team-role">Kurucu Ortak</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-card">
                                            <div className="team-image-wrapper">
                                                <img src="/img/ekip/serhat.png" alt="Serhat Atik" className="team-image" />
                                                <div className="team-social-overlay">
                                                    <div className="team-social-links">
                                                        <a href="https://instagram.com/iamserhatatik" target="_blank" rel="noopener noreferrer" className="team-social-link"><Instagram size={20} /></a>
                                                        <a href="https://linkedin.com/in/serhatatik" target="_blank" rel="noopener noreferrer" className="team-social-link"><Linkedin size={20} /></a>
                                                        <a href="https://x.com/iamserhatatik" target="_blank" rel="noopener noreferrer" className="team-social-link"><Twitter size={20} /></a>
                                                    </div>
                                                </div>
                                                <div className="team-info-overlay">
                                                    <h3 className="team-name">Serhat Atik</h3>
                                                    <p className="team-role">Kurucu Ortak</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-card">
                                            <div className="team-image-wrapper">
                                                <img src="/img/ekip/gokhan.png" alt="Gökhan Güran" className="team-image" />
                                                <div className="team-info-overlay">
                                                    <h3 className="team-name">Gökhan Güran</h3>
                                                    <p className="team-role">Dijital Pazarlama Uzmanı</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-card">
                                            <div className="team-image-wrapper">
                                                <img src="/img/ekip/gokce.png" alt="Gökçe N. Kudak" className="team-image" />
                                                <div className="team-info-overlay">
                                                    <h3 className="team-name">Gökçe N. Kudak</h3>
                                                    <p className="team-role">Art Direktör</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    } />

                    {/* Diğer Sayfalar */}
                    <Route path="/hizmetler" element={<Services />} />
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/referanslar" element={<References />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/ekibimiz" element={<Team />} />
                </Routes>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/img/logo.webp" alt="Fosil Digital" className="logo-img" style={{ height: '32px', filter: 'brightness(0) invert(1)' }} />
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
                            <a href="#ekibimiz" className="footer-link">Kariyer</a>
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
                    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} Fosil. Tüm hakları saklıdır.
                        </p>
                        <div className="footer-socials flex gap-4">
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
                </div>
            </footer>
        </div>
    )
}

export default App
