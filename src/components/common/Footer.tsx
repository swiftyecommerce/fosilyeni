import { Link } from 'react-router-dom'
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import { navigationData } from '../../fosil_data'

const categories = navigationData.categories

export default function Footer() {
    return (
        <footer className="footer">
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
                            <Link key={cat.slug} to={`/hizmetler/${cat.slug}`} className="footer-link">
                                {cat.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Şirket</h4>
                    <div className="footer-links">
                        <Link to="/hakkimizda" className="footer-link">Hakkımızda</Link>
                        <Link to="/referanslar" className="footer-link">Referanslar</Link>
                        <Link to="/blog" className="footer-link">Blog</Link>
                        <Link to="/ekibimiz" className="footer-link">Kariyer</Link>
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
    )
}
