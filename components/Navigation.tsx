import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
    const router = useRouter()

    const navigationItems = [
        { href: '/', label: 'Home' },
        { href: '/music', label: 'Music' },
        { href: '/events', label: 'Events' },
        { href: '/shop', label: 'Shop', disabled: true },
        { href: '/press', label: 'Press', disabled: true },
        { href: '/blog', label: 'Blog', disabled: true },
    ]

    return (
        <nav style={{
            padding: '20px',
            borderBottom: '2px solid #000',
            fontFamily: 'Times New Roman, serif'
        }}>
            <ul style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
            }}>
                {navigationItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            style={{
                                color: router.pathname === item.href ? '#000' : '#0066CC',
                                textDecoration: router.pathname === item.href ? 'underline' : 'none',
                                fontSize: '14px',
                                fontFamily: 'Times New Roman, serif',
                                opacity: item.disabled ? 0.5 : 1,
                                cursor: item.disabled ? 'not-allowed' : 'pointer',
                            }}
                            className={item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                            onClick={(e) => {
                                if (item.disabled) {
                                    e.preventDefault()
                                }
                            }}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

