import { HomeHero } from '@/components/home/hero'
import { SchnapsSection } from '@/components/home/schnaps-section'
import { BrewerySection } from '@/components/home/brewery-section'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SchnapsSection />
      <BrewerySection />
    </>
  )
}
