import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Plus } from 'lucide-react'
import { navigationData } from '../../fosil_data'

const categories = navigationData.categories

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="navbar">
                    <Link to="/" className="logo">
                        <div className="logo-icon">F</div>
                        <span>Fosil</span>
                    </Link>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        {/* Updated Main Navigation Links */}
                        <Link to="/hakkimizda" className="nav-link" onClick={() => setIsMenuOpen(false)}>Kurumsal</Link>

                        <div className="nav-group">
                            <Link to="/hizmetler" className="nav-link" onClick={() => setIsMenuOpen(false)}>Hizmetler</Link>
                            <div className="nav-dropdown">
                                {categories.map((cat) => (
                                    <Link key={cat.slug} to={`/hizmetler/${cat.slug}`} className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                                        {cat.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link to="/referanslar" className="nav-link" onClick={() => setIsMenuOpen(false)}>Referanslar</Link>
                        <Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>

                        {/* Mobile Only: Extra links */}
                        <div className="mobile-links md:hidden">
                            <Link to="/ekibimiz" className="nav-link" onClick={() => setIsMenuOpen(false)}>Ekibimiz</Link>
                        </div>

                        <Link to="/iletisim" className="btn btn-primary btn-sm mobile-cta md:hidden" onClick={() => setIsMenuOpen(false)}>Teklif Al</Link>
                    </div>

                    <div className="header-actions">
                        <Link to="/iletisim" className="btn btn-primary btn-sm hidden md:inline-flex">Teklif Al</Link>
                        <button
                            className="menu-toggle"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
