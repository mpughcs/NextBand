import Image from 'next/image'

export default function HeroContentLeft() {
    return (
        <div className="flex relative flex-col w-full h-full bg-black md:w-1/2">
            <div className="flex flex-1 justify-center items-center p-6 md:p-12">
                <div className="relative w-full max-w-lg aspect-[3/4]">
                    <Image
                        src="/images/hero_image.JPG"
                        alt="Sunday Mourners"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
            <div className="absolute left-0 right-0 bottom-0 p-6 border-t md:relative md:bottom-auto md:p-8 border-white/10 md:border-t-0 text-white">
                <ul className="space-y-1 text-sm italic  md:space-y-2">
                    <li className="text-white">Booking: sundaymourner@gmail.com</li>
                    <li className="text-white">Instagram: @sundaymourners</li>
                </ul>
            </div>
        </div>
    )
}