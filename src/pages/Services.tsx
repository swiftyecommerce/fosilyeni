import { Link } from 'react-router-dom'
import { navigationData } from '../fosil_data'
import {
    Layers,
    ArrowRight,
    BarChart3,
    PenTool,
    Code2,
    Globe,
    ShoppingCart,
    TrendingUp,
    Palette,
    Server,
    Search,
    BookOpen,
    Package,
    Users
} from 'lucide-react'
import { Meteors } from '@/components/ui/meteors'

// Icon map for dynamic icons
const iconMap: Record<string, any> = {
    Layers: Layers,
    BarChart: BarChart3,
    PenTool: PenTool,
    Code: Code2,
    Globe: Globe,
    ShoppingCart: ShoppingCart,
    TrendingUp: TrendingUp,
    Palette: Palette,
    Server: Server,
    Search: Search,
    BookOpen: BookOpen,
    Package: Package,
    Users: Users
}

const Services = () => {
    const categories = navigationData.categories || []

    return (
        <div className="page-wrapper">
            {/* Page Hero - Two Column Layout */}
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-grid">
                        {/* Left Content */}
                        <div className="services-hero-content">
                            <div className="section-label-wrapper">
                                <span className="section-label-icon">◇</span>
                                <span className="section-label-text">Hizmetlerimiz</span>
                            </div>
                            <h1 className="services-hero-title">
                                Markanı Dijital Evrime Taşıyacak<br />
                                <span className="text-highlight">Doğru Dijital Partnerle</span> Tanış.
                            </h1>
                            <p className="services-hero-description">
                                Fosil, markaların dijital dünyada sadece var olmasını değil, iz bırakmasını hedefler.
                                Strateji, tasarım, teknoloji ve pazarlamayı aynı masada buluşturur; markanı
                                sürdürülebilir biçimde büyüten dijital sistemler kurar.
                            </p>
                            <div className="services-hero-actions">
                                <a href="#hizmetler-grid" className="btn btn-primary btn-lg">
                                    Hizmetleri Keşfet
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Right Content - 2x2 Card Grid */}
                        <div className="services-hero-cards">
                            {/* Strateji */}
                            <div className="hero-feature-card group">
                                <div className="hero-feature-icon">
                                    <BarChart3 size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="hero-feature-title">Strateji</h3>
                                <p className="hero-feature-subtitle">MARKA & DİJİTAL STRATEJİ</p>
                                <p className="hero-feature-description">Konumlandırma, hedef kitle, yol haritası</p>
                            </div>

                            {/* Tasarım */}
                            <div className="hero-feature-card group">
                                <div className="hero-feature-icon">
                                    <PenTool size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="hero-feature-title">Tasarım</h3>
                                <p className="hero-feature-subtitle">DENEYİM ODAKLI TASARIM</p>
                                <p className="hero-feature-description">UI/UX, görsel kimlik, etkileşim</p>
                            </div>

                            {/* Teknoloji */}
                            <div className="hero-feature-card group">
                                <div className="hero-feature-icon">
                                    <Code2 size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="hero-feature-title">Teknoloji</h3>
                                <p className="hero-feature-subtitle">ALTYAPI & YAZILIM</p>
                                <p className="hero-feature-description">Web, özel yazılım, entegrasyon</p>
                            </div>

                            {/* 360 */}
                            <div className="hero-feature-card hero-feature-card-highlight group">
                                <div className="hero-feature-icon">
                                    <Globe size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="hero-feature-title">360°</h3>
                                <p className="hero-feature-subtitle">UÇTAN UCA DİJİTAL HİZMET</p>
                                <p className="hero-feature-description">Fikirden yayına, ölçümden ölçeğe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="section" id="hizmetler-grid">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label-wrapper">
                            <span className="section-label-icon">◇</span>
                            <span className="section-label-text">Keşfet</span>
                        </div>
                        <h2 className="section-title-large">
                            Markanı Dijital Evrime<br />
                            <span className="text-highlight">Taşıyan Hizmetler</span>
                        </h2>
                        <p className="section-description-large">
                            Her marka aynı yoldan büyümez. Fosil, ihtiyacın olan noktayı tespit eder ve doğru çözümü devreye alır.
                            Tek tek güçlü, birlikte çalıştığında evrimsel sonuçlar üreten hizmetler sunar.
                        </p>
                    </div>

                    <div className="services-page-grid">
                        {categories.map((category) => {
                            const Icon = iconMap[category.icon || 'Layers'] || Layers;
                            return (
                                <div key={category.slug} className="service-page-card group relative overflow-hidden">
                                    <div className="service-page-card-bg-icon">
                                        <Icon size={120} strokeWidth={1} />
                                    </div>
                                    <div className="service-page-icon-wrapper">
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div className="service-page-card-header">
                                        <h3 className="service-page-card-title">{category.title}</h3>
                                        <div className="service-page-card-arrow">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                    <p className="service-page-card-description">{category.description}</p>
                                    <div className="service-page-card-tags">
                                        {category.services?.slice(0, 4).map((service: any, i: number) => (
                                            <span key={i} className="service-page-tag">{service.title}</span>
                                        ))}
                                    </div>
                                    <Link to={`/hizmetler/${category.slug}`} className="service-page-cta">
                                        Detaylı Bilgi <ArrowRight size={14} />
                                    </Link>
                                    <div className="absolute inset-0 h-full w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <Meteors number={30} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Manifesto Section - Single CTA */}
            <section className="manifesto-section">
                <div className="manifesto-content">
                    <span className="manifesto-label">Manifesto</span>
                    <h2 className="manifesto-title">
                        Siz İşinize Odaklanın,<br />
                        Dijital Operasyonu Bize Bırakın.
                    </h2>
                    <p className="manifesto-text">
                        Fosil, sıradan bir ajans değildir.<br />
                        Strateji yazar, uygular ve ölçer.<br />
                        Lafla değil, sonuçla konuşur.
                    </p>
                    <Link to="/iletisim" className="manifesto-cta">
                        Bizimle Çalış
                    </Link>
                </div>
            </section>

            {/* Bottom CTA Section - Contact Focused */}
            <section className="bottom-cta-section">
                <div className="bottom-cta-content">
                    <h2 className="bottom-cta-title">
                        Markanız İçin Birlikte Ne Yapabileceğimizi Konuşalım
                    </h2>
                    <div className="bottom-cta-text">
                        <p>
                            Her marka için tek bir çözüm yok.<br />
                            Fosil, hedeflerinizi dinler ve ihtiyaçlarınıza uygun dijital çözümler üretir.
                        </p>
                        <p>
                            Formu doldurun, sizi arayalım.<br />
                            Kısa bir görüşmeyle nerede durduğunuzu birlikte netleştirelim.
                        </p>
                    </div>
                    <Link to="/iletisim" className="bottom-cta-button">
                        Bizimle İletişime Geç
                    </Link>
                    <span className="bottom-cta-note">İlk görüşme ücretsizdir.</span>
                </div>
            </section>
        </div>
    )
}

export default Services
