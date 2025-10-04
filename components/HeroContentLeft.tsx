import Image from 'next/image'

export default function HeroContentLeft() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-center items-center h-3/4">
                <Image src="/images/hero_image.jpg" alt="Hero" width={500} height={500} className="object-cover max-w-2xl" />
            </div>
            <div className="h-1/4 bg-white text-black italic flex flex-col items-start justify-end p-4">
                <ul className="text-left">
                    <li>Booking: sundaymourner@gmail.com</li>
                    <li>Instagram: @sundaymourners</li>
                </ul>
            </div>
        </div>
    )
}