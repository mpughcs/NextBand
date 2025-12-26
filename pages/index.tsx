import { Container } from '../components/sharedstyles'
import PageHead from '../components/PageHead'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <div className='font-alan-sans'>
      <PageHead />
      <HeroSection />
    </div>
  )
}