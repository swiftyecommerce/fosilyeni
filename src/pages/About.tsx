import { Meteors } from '@/components/ui/meteors';
import { Target, Users, Zap, Award, TrendingUp, Globe } from 'lucide-react';

// İstatistikler
const stats = [
    { number: '200+', label: 'Marka', icon: <Award size={24} /> },
    { number: '8+', label: 'Yıllık Deneyim', icon: <TrendingUp size={24} /> },
    { number: '500+', label: 'Proje', icon: <Target size={24} /> },
    { number: '15+', label: 'Uzman Ekip', icon: <Users size={24} /> },
];

// Değerlerimiz
const values = [
    {
        icon: <Zap size={32} />,
        title: 'Yenilikçilik',
        description: 'Dijital dünyanın hızına ayak uydurmak yetmez, ona öncülük etmek gerekir. En güncel teknolojileri ve stratejileri kullanarak markalarımızı geleceğe hazırlıyoruz.'
    },
    {
        icon: <Target size={32} />,
        title: 'Sonuç Odaklılık',
        description: 'Güzel görüntüler yetmez, somut sonuçlar gerekir. Her projemizde ölçülebilir hedefler belirliyor ve başarıyı verilerle takip ediyoruz.'
    },
    {
        icon: <Users size={32} />,
        title: 'İş Ortaklığı',
        description: 'Müşteri değil, iş ortağı anlayışıyla çalışıyoruz. Markanızın başarısı bizim başarımızdır. Her adımda yanınızdayız.'
    },
    {
        icon: <Globe size={32} />,
        title: 'Bütünsel Yaklaşım',
        description: 'Dijital pazarlama, tasarım ve teknoloji tek bir çatı altında. Markanızın tüm dijital ihtiyaçlarını koordineli ve tutarlı şekilde yönetiyoruz.'
    },
];

export default function About() {
    return (
        <div className="page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-label-wrapper">
                            <span className="section-label-icon">✦</span>
                            <span className="section-label-text">Bizi Tanıyın</span>
                        </div>
                        <h1 className="page-hero-title">
                            Fosil'in <span className="text-highlight">Hikayesi</span>
                        </h1>
                        <p className="page-hero-description">
                            Dijital dünyada iz bırakmak isteyen markalar için yola çıktık.
                            Tutku, yaratıcılık ve teknolojiyle harmanlanmış bir serüven.
                        </p>
                    </div>
                </div>
            </section>

            {/* Agency Story Section */}
            <section className="section">
                <div className="container">
                    <div className="about-story-grid">
                        <div className="about-story-video">
                            <div className="about-video-wrapper">
                                <video
                                    src="/img/ajans.mp4"
                                    className="about-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                        </div>
                        <div className="about-story-content">
                            <h2 className="about-story-title">
                                Dijital Birim Departmanınız Gibi Çalışan <span className="text-highlight">Ajans</span>
                            </h2>
                            <p className="about-story-text">
                                Fosil Dijital Performans Ajansı olarak, 2016 yılından bu yana markaların dijital
                                dönüşüm yolculuklarında onlara rehberlik ediyoruz. Her projenin bir hikayesi
                                olduğuna inanıyor ve bu hikayeyi en etkileyici şekilde anlatmak için çalışıyoruz.
                            </p>
                            <p className="about-story-text">
                                Fosil, markanızın dijital çağda hayatta kalması ve evrimleşmesi için gereken
                                genetik kodları yazar. Sıradan bir ajans değil, dijital ekosistemin zorlu
                                koşullarında sizi zirveye taşıyan evrimsel bir güçtür.
                            </p>
                            <p className="about-story-text">
                                Veri odaklı stratejilerimiz ve yaratıcı çözümlerimizle, iş ortaklarımızın
                                hedeflerine ulaşmalarını sağlıyor, sürdürülebilir büyüme için kalıcı
                                dijital deneyimler yaratıyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card group relative overflow-hidden">
                                <div className="absolute inset-0 h-full w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Meteors number={20} />
                                </div>
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-label-wrapper">
                            <span className="section-label-icon">◇</span>
                            <span className="section-label-text">Değerlerimiz</span>
                        </div>
                        <h2 className="section-title-large">
                            Bizi Biz Yapan <span className="text-highlight">Değerler</span>
                        </h2>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card group relative overflow-hidden">
                                <div className="absolute inset-0 h-full w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Meteors number={25} />
                                </div>
                                <div className="relative z-10">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3 className="value-title">{value.title}</h3>
                                    <p className="value-description">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-card">
                        <h2 className="cta-title">Hikayenizi Birlikte <span className="text-highlight">Yazalım</span></h2>
                        <p className="cta-description">
                            Markanızın dijital dönüşüm yolculuğunda yanınızda olmak istiyoruz.
                            Sizinle tanışmak için sabırsızlanıyoruz.
                        </p>
                        <div className="cta-actions">
                            <a href="#iletisim" className="btn btn-primary btn-lg">İletişime Geç</a>
                            <a href="#ekibimiz" className="btn btn-secondary btn-lg">Ekibimizi Tanı</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
