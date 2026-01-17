import { Meteors } from '@/components/ui/meteors';
import { ExternalLink } from 'lucide-react';

// Reference Projects - Ana sayfadan alınan ve genişletilmiş veriler
const referenceProjects = [
    {
        image: '/img/referans/siron-celik-katalog.webp',
        title: 'Siron Çelik',
        subtitle: 'Dijital Katalog Tasarımı',
        category: 'Tasarım',
        tags: ['Katalog', 'Grafik Tasarım', 'Kurumsal']
    },
    {
        image: '/img/referans/yoi-kurumsal-katalog.webp',
        title: 'Yoi Studio Dekorasyon',
        subtitle: 'Kurumsal Ürün Katalogu',
        category: 'Tasarım',
        tags: ['Katalog', 'E-Ticaret', 'İkas']
    },
    {
        image: '/img/referans/noblex-coffee.webp',
        title: 'Noblex Coffee',
        subtitle: 'Ambalaj & Paket Tasarımı',
        category: 'Tasarım',
        tags: ['Ambalaj', 'Marka Kimliği', 'Baskı']
    },
    {
        image: '/img/referans/kisshu-kozmetik-ikas.webp',
        title: 'Kisshu Kozmetik',
        subtitle: 'E-Ticaret Web Sitesi',
        category: 'E-Ticaret',
        tags: ['İkas', 'Web Tasarım', 'Kozmetik']
    },
    {
        image: '/img/referans/emirgan-hali-ikas.webp',
        title: 'Emirgan Halı',
        subtitle: 'E-Ticaret Platformu',
        category: 'E-Ticaret',
        tags: ['İkas', 'SEO', 'Dijital Pazarlama']
    },
    {
        image: '/img/referans/kirmizisato-instagram.webp',
        title: 'Kırmızı Sato',
        subtitle: 'Sosyal Medya Yönetimi',
        category: 'Sosyal Medya',
        tags: ['Instagram', 'İçerik', 'Pazarlama']
    },
    {
        image: '/img/referans/sidrex-web-site-ikas.webp',
        title: 'Sidrex',
        subtitle: 'Kurumsal Web Sitesi',
        category: 'Web',
        tags: ['Kurumsal', 'İkas', 'Takviye Gıda']
    },
    {
        image: '/img/referans/tohumluktan-instagram.webp',
        title: 'Tohumluktan',
        subtitle: 'Sosyal Medya Tasarım',
        category: 'Sosyal Medya',
        tags: ['Instagram', 'Grafik', 'Tarım']
    },
];

// Featured Projects (Öne çıkan projeler)
const featuredProjects = [
    {
        image: '/img/projeler/sidrex.webp',
        title: 'Sidrex',
        description: 'Takviye edici gıda sektöründe çarpıcı izler bırakmak için pazaryerinde varolan Sidrex, fosil.io iş birliği ile pazaryerlerinde zirveye hızla yükselişini sürdürürken, eticaret serüveninde emin adımlarla ilerlemektedir.',
        tags: ['Trendyol', 'İkas', 'E-Ticaret', 'Hepsi Burada', 'Meta', 'Google']
    },
    {
        image: '/img/projeler/yoi-katalog.webp',
        title: 'Yoi Studio',
        description: 'Fiziki mağazanın kurulumundan e ticaretin kurulumuna, ticarete dair tüm adımları birlikte attığımız Yoi Studio, bizimle birlikte iç dekorasyona vizyon kazandıran ihracat serüvenini tüm hızıyla sürdürmektedir.',
        tags: ['İkas', 'E-Ticaret', 'Meta', 'Google Ads', 'Instagram', 'Katalog', 'Logo']
    },
    {
        image: '/img/projeler/kirmizisato.webp',
        title: 'Red Castle',
        description: 'E-ticaret ve Pazaryeri yönetimine sıfırdan birlikte adım attığımız Kırmızı Şato ile yıllık ciro hedeflerine adım adım yürümekteyiz.',
        tags: ['İkas', 'E-Ticaret', 'Trendyol', 'Hepsi Burada', 'Meta', 'Google', 'Instagram']
    }
];

export default function References() {
    return (
        <div className="page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-label-wrapper">
                            <span className="section-label-icon">✦</span>
                            <span className="section-label-text">Neler Yaptık?</span>
                        </div>
                        <h1 className="page-hero-title">
                            Dönüşüme Bizimle <span className="text-highlight">Başlayanlar</span>
                        </h1>
                        <p className="page-hero-description">
                            Kurumsal vizyonlarını dijitale taşıyan markalarla birçok başarılı projeye imza attık.
                            İşte dönüşüm yolculuğunu bizimle başlatan iş ortaklarımızdan bazıları.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title-large">Öne Çıkan <span className="text-highlight">Projeler</span></h2>
                    </div>
                    <div className="featured-projects-grid">
                        {featuredProjects.map((project, index) => (
                            <div key={index} className="featured-project-card group relative overflow-hidden">
                                <div className="absolute inset-0 h-full w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Meteors number={30} />
                                </div>
                                <div className="featured-project-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="featured-project-image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="featured-project-content">
                                    <h3 className="featured-project-title">{project.title}</h3>
                                    <p className="featured-project-description">{project.description}</p>
                                    <div className="featured-project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="featured-project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <button className="btn btn-primary btn-sm">
                                        Projeyi İncele
                                        <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title-large">Tüm <span className="text-highlight">Projeler</span></h2>
                    </div>
                    <div className="references-page-grid">
                        {referenceProjects.map((project, index) => (
                            <div key={index} className="reference-page-card group">
                                <div className="reference-page-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="reference-page-image"
                                        loading="lazy"
                                    />
                                    <div className="reference-page-overlay">
                                        <span className="reference-page-category">{project.category}</span>
                                        <span className="reference-page-view">Projeyi İncele</span>
                                    </div>
                                </div>
                                <div className="reference-page-info">
                                    <h3 className="reference-page-title">{project.title}</h3>
                                    <p className="reference-page-subtitle">{project.subtitle}</p>
                                    <div className="reference-page-tags">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="reference-page-tag">{tag}</span>
                                        ))}
                                    </div>
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
                        <h2 className="cta-title">Sıradaki Başarı Hikayesi <span className="text-highlight">Sizinki Olsun</span></h2>
                        <p className="cta-description">
                            Markanızın dijital dönüşüm hikayesini birlikte yazalım.
                            Projelerimize sizin markanızı da ekleyelim.
                        </p>
                        <div className="cta-actions">
                            <a href="#iletisim" className="btn btn-primary btn-lg">Projenizi Anlatın</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
