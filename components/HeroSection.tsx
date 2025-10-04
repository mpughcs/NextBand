
import Navigation from './Navigation'
import HeroContentLeft from './HeroContentLeft'

export default function HeroSection() {
    return (
        <div className="mx-20 max-w-screen-xl">
            <div className="flex flex-col lg:flex-row lg:h-screen">
                <HeroContentLeft />
                <Navigation />
            </div>
        </div>
    )
}
