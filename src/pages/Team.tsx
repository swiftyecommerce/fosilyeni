import { Meteors } from '@/components/ui/meteors';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

// Team members data - App.tsx'den alınmış
const teamMembers = [
    {
        name: 'Serdar Topbaş',
        role: 'Kurucu Ortak',
        image: '/img/ekip/serdar.png',
        bio: 'E-ticaret ve dijital stratejiler konusunda 10+ yıllık deneyim.',
        social: {
            instagram: null,
            linkedin: null,
            twitter: null
        }
    },
    {
        name: 'Serhat Atik',
        role: 'Kurucu Ortak',
        image: '/img/ekip/serhat.png',
        bio: 'Dijital pazarlama ve marka yönetimi uzmanı.',
        social: {
            instagram: 'https://instagram.com/iamserhatatik',
            linkedin: 'https://linkedin.com/in/serhatatik',
            twitter: 'https://x.com/iamserhatatik'
        }
    },
    {
        name: 'Gökhan Güran',
        role: 'Dijital Pazarlama Uzmanı',
        image: '/img/ekip/gokhan.png',
        bio: 'Google & Meta sertifikalı performans pazarlama uzmanı.',
        social: {
            instagram: null,
            linkedin: null,
            twitter: null
        }
    },
    {
        name: 'Gökçe N. Kudak',
        role: 'Art Direktör',
        image: '/img/ekip/gokce.png',
        bio: 'Yaratıcı tasarım ve marka kimliği geliştirme uzmanı.',
        social: {
            instagram: null,
            linkedin: null,
            twitter: null
        }
    },
];

export default function Team() {
    return (
        <div className="page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-label-wrapper">
                            <span className="section-label-icon">✦</span>
                            <span className="section-label-text">Ekibimiz</span>
                        </div>
                        <h1 className="page-hero-title">
                            Dijital Evrimin <span className="text-highlight">Öncüleri</span>
                        </h1>
                        <p className="page-hero-description">
                            Fosil Dijital, pazarlama, tasarım, operasyon ve yazılımı aynı masada buluşturan,
                            markaların dijital evrimine liderlik eden çekirdek bir ekiptir.
                            Her proje bizim için sadece bir iş değil, birlikte yazılan bir başarı hikayesidir.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section">
                <div className="container">
                    <div className="team-page-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-page-card group relative overflow-hidden">
                                {/* Meteor Effect */}
                                <div className="absolute inset-0 h-full w-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Meteors number={25} />
                                </div>

                                {/* Image Wrapper */}
                                <div className="team-page-image-wrapper">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="team-page-image"
                                        loading="lazy"
                                    />

                                    {/* Social Links Overlay */}
                                    {(member.social.instagram || member.social.linkedin || member.social.twitter) && (
                                        <div className="team-page-social-overlay">
                                            <div className="team-page-social-links">
                                                {member.social.instagram && (
                                                    <a
                                                        href={member.social.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="team-page-social-link"
                                                    >
                                                        <Instagram size={20} />
                                                    </a>
                                                )}
                                                {member.social.linkedin && (
                                                    <a
                                                        href={member.social.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="team-page-social-link"
                                                    >
                                                        <Linkedin size={20} />
                                                    </a>
                                                )}
                                                {member.social.twitter && (
                                                    <a
                                                        href={member.social.twitter}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="team-page-social-link"
                                                    >
                                                        <Twitter size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Info Overlay */}
                                    <div className="team-page-info-overlay">
                                        <h3 className="team-page-name">{member.name}</h3>
                                        <p className="team-page-role">{member.role}</p>
                                    </div>
                                </div>

                                {/* Card Content Below Image */}
                                <div className="team-page-content">
                                    <p className="team-page-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-card">
                        <h2 className="cta-title">Ekibimize <span className="text-highlight">Katılın</span></h2>
                        <p className="cta-description">
                            Dijital dünyanın heyecan verici yolculuğunda yetenekli ekip arkadaşları arıyoruz.
                            Tutkulu ve yaratıcıysanız, sizi aramızda görmekten mutluluk duyarız.
                        </p>
                        <div className="cta-actions">
                            <a href="#kariyer" className="btn btn-primary btn-lg">Kariyer Fırsatları</a>
                            <a href="#iletisim" className="btn btn-secondary btn-lg">İletişime Geç</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
