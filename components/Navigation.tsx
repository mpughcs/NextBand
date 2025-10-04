import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function  Navigation() {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigationItems = [
        { href: '/music', label: 'Music' },
        { href: '/about', label: 'About' },
        
        { href: '/Blog', label: 'Blog' },
        { href: '/Events', label: 'Events' },
    ]
    const menuColors = [
        '#ff5964',
        '#ffe74c',
        '#ffffff',
        '#38618c',
        '#35a7ff'
    ]

    return (
        <div className="flex flex-col h-full flex-1  ">
            {navigationItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className={`flex-1 flex p-4 text-black font-medium transition-all duration-200 hover:scale-105 ${router.pathname === item.href ? 'ring-2 ring-black' : ''
                        }`}
                    style={{ backgroundColor: menuColors[index % menuColors.length] }}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <p className="text-2xl ">{item.label}</p>
                </Link>
            ))}
        </div>
    )
}
