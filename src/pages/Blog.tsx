import { Clock, ArrowRight } from 'lucide-react';

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: 'Basitleştirilmiş Gümrük Beyannamesinde (BGB) Önemli Değişiklik',
        excerpt: 'E-ihracat yapan markalar için önemli düzenleme: Basitleştirilmiş Gümrük Beyanname süreçlerinde yeni değişiklikler ve dikkat edilmesi gereken noktalar.',
        category: 'E-Ticaret',
        date: '3 gün önce',
        image: null,
        placeholder: 'blog-placeholder-1'
    },
    {
        id: 2,
        title: 'Akbank Dönüşüm Akademisi & Timwings E-Ticaret ve E-İhracat Eğitimleri',
        excerpt: 'Fosil Dijital olarak Akbank Dönüşüm Akademisi iş birliğinde verdiğimiz e-ticaret ve e-ihracat eğitimlerinin detayları ve katılımcı geri bildirimleri.',
        category: 'Eğitim',
        date: '1 hafta önce',
        image: null,
        placeholder: 'blog-placeholder-2'
    },
    {
        id: 3,
        title: 'E-Ticarette Kargo ve Lojistik Çözümleri',
        excerpt: 'Kargo şirketleriyle doğru anlaşma yapmanın püf noktaları, maliyetleri düşürme stratejileri ve müşteri memnuniyetini artırma yöntemleri.',
        category: 'Lojistik',
        date: '2 hafta önce',
        image: null,
        placeholder: 'blog-placeholder-3'
    },
    {
        id: 4,
        title: '2024 Dijital Pazarlama Trendleri',
        excerpt: 'AI destekli pazarlama, video içerik stratejileri ve sosyal ticaret gibi 2024 yılının öne çıkan dijital pazarlama trendleri.',
        category: 'Dijital Pazarlama',
        date: '3 hafta önce',
        image: null,
        placeholder: 'blog-placeholder-4'
    },
    {
        id: 5,
        title: 'SEO 2024: Arama Motorlarında Üst Sıralara Çıkma Rehberi',
        excerpt: 'Google\'ın güncel algoritma değişiklikleri ve SEO stratejilerinizi nasıl güncellemeniz gerektiğine dair kapsamlı rehber.',
        category: 'SEO',
        date: '1 ay önce',
        image: null,
        placeholder: 'blog-placeholder-5'
    },
    {
        id: 6,
        title: 'Sosyal Medya Yönetiminde Başarının Sırları',
        excerpt: 'Markanızın sosyal medyada sesini bulması için içerik stratejisi, topluluk yönetimi ve etkileşim artırma teknikleri.',
        category: 'Sosyal Medya',
        date: '1 ay önce',
        image: null,
        placeholder: 'blog-placeholder-6'
    },
];

// Kategori renkleri
const categoryColors: { [key: string]: string } = {
    'E-Ticaret': 'bg-emerald-500/20 text-emerald-400',
    'Eğitim': 'bg-blue-500/20 text-blue-400',
    'Lojistik': 'bg-amber-500/20 text-amber-400',
    'Dijital Pazarlama': 'bg-purple-500/20 text-purple-400',
    'SEO': 'bg-rose-500/20 text-rose-400',
    'Sosyal Medya': 'bg-cyan-500/20 text-cyan-400',
};

export default function Blog() {
    return (
        <div className="page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-label-wrapper">
                            <span className="section-label-icon">✦</span>
                            <span className="section-label-text">Blog</span>
                        </div>
                        <h1 className="page-hero-title">
                            Bilgi Paylaştıkça <span className="text-highlight">Çoğalır</span>
                        </h1>
                        <p className="page-hero-description">
                            Güncel pazaryeri trendleri, reklam stratejileri ve mağaza optimizasyonu üzerine rehber içerikler.
                            E-ticarette güncel kalmak isteyen markalar için Fosil Blog.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section">
                <div className="container">
                    <div className="blog-page-grid">
                        {blogPosts.map((post) => (
                            <a key={post.id} href={`#blog/${post.id}`} className="blog-page-card group">
                                <div className="blog-page-image-wrapper">
                                    <div className={`blog-page-image-placeholder ${post.placeholder}`}></div>
                                    <div className="blog-page-overlay"></div>
                                    <div className="blog-page-category">
                                        <span className={`blog-category-badge ${categoryColors[post.category] || 'bg-slate-500/20 text-slate-400'}`}>
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="blog-page-content">
                                    <h3 className="blog-page-title">{post.title}</h3>
                                    <p className="blog-page-excerpt">{post.excerpt}</p>
                                    <div className="blog-page-meta">
                                        <span className="blog-page-date">
                                            <Clock size={14} />
                                            {post.date}
                                        </span>
                                        <span className="blog-page-read-more">
                                            Devamını Oku
                                            <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-card">
                        <h2 className="cta-title">Haftalık <span className="text-highlight">Bültenimize</span> Abone Olun</h2>
                        <p className="cta-description">
                            En güncel dijital pazarlama trendleri, e-ticaret ipuçları ve sektör haberlerini
                            her hafta e-posta kutunuza gönderelim.
                        </p>
                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="newsletter-input"
                            />
                            <button className="btn btn-primary">Abone Ol</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
