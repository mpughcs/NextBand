import Image from 'next/image'
import NewRecordAvailable from './NewRecordAvailable'

export default function HeroSection() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 480px) {
                    .hero-title-box {
                        bottom: -15px !important;
                        left: -10px !important;
                        font-size: clamp(18px, 5vw, 28px) !important;
                        padding: 10px !important;
                        border-width: 2px !important;
                        letter-spacing: 0.1em !important;
                        max-width: calc(100% + 20px) !important;
                    }
                }
                
                @media (min-width: 481px) and (max-width: 767px) {
                    .hero-title-box {
                        bottom: -25px !important;
                        left: -25px !important;
                        font-size: clamp(28px, 5vw, 48px) !important;
                        padding: 15px !important;
                        border-width: 3px !important;
                        max-width: calc(100% + 50px) !important;
                    }
                }
            `}} />
            <div style={{
                minHeight: '100vh',
                backgroundColor: '#fff',
                fontFamily: 'Times New Roman, serif',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    padding: 'clamp(20px, 4vw, 40px) 20px',
                    position: 'relative',
                    flex: '1'
                }}>
                    {/* Image container with title overlapping */}
                    <div style={{
                        marginBottom: '40px',
                        position: 'relative',
                        width: '100%',
                        maxWidth: '600px',
                        margin: '0 auto 40px',
                        aspectRatio: '3/4',
                        padding: '0 clamp(10px, 3vw, 20px)'
                    }}>
                        <Image
                            src="/images/hero_image.JPG"
                            alt="Sunday Mourners"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                            sizes="(max-width: 768px) 100vw, 600px"
                        />

                        {/* Title positioned interestingly - overlapping bottom-left */}
                        <h1 className="hero-title-box" style={{
                            position: 'absolute',
                            bottom: '-30px',
                            left: '-40px',
                            fontSize: 'clamp(32px, 6vw, 72px)',
                            fontFamily: 'Courier New, monospace',
                            fontWeight: 'bold',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            border: '4px solid #000',
                            padding: '20px',
                            backgroundColor: '#fff',
                            margin: 0,
                            zIndex: 10,
                            lineHeight: '1.2',
                            maxWidth: 'calc(100% + 80px)',
                            boxSizing: 'border-box'
                        }}>
                            SUNDAY<br />MOURNERS
                        </h1>
                    </div>

                    {/* Lorem blurb */}
                    <div style={{
                        maxWidth: '600px',
                        margin: '0 auto 60px',
                        padding: '0 20px'
                    }}>
                        <p style={{
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            lineHeight: '1.8',
                            fontFamily: 'Times New Roman, serif',
                            textAlign: 'justify',
                            color: '#000'
                        }}>
                            Sunday Mourners are college and childhood friends tempered from years-long freak-folk wanderings into a razor sharp post-punk exercise in thrusting and carving. They can cut through any surface and environment, maintain a rough serrated edge through repetitive use, and only use the finest foreign products and materials. Flat wound strings, dry mouths, and brittle old cymbals recall the smarmy button-up design of lounge lizards like Subway Sect, Richard Hell and the Voidoids, and Television. Instruments that skewer a martini olive as easily as they pulverize a ham hock.

                        </p>
                    </div>
                    <hr className="my-4" />

                    <div className="max-w-4xl mx-auto"><NewRecordAvailable /></div>

                </div>

                {/* Contact info at bottom */}
                <div style={{
                    textAlign: 'center',
                    fontSize: 'clamp(12px, 2.5vw, 14px)',
                    lineHeight: '1.6',
                    fontFamily: 'Courier New, monospace',
                    padding: '',
                    borderTop: '1px solid #ccc',
                    marginTop: 'auto'
                }}>
                    <p style={{ margin: '10px 0' }}>
                        Booking: <a href="mailto:sundaymourner@gmail.com" style={{ color: '#0066CC', textDecoration: 'none' }}
                            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                        >sundaymourner@gmail.com</a>
                    </p>
                    <p style={{ margin: '10px 0' }}>
                        Instagram: <a href="https://instagram.com/sundaymourners" target="_blank" rel="noopener noreferrer"
                            style={{ color: '#0066CC', textDecoration: 'none' }}
                            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                        >@sundaymourners</a>
                    </p>
                </div>
            </div>
        </>
    )
}
