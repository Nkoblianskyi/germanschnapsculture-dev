import { HomeHero } from '@/components/home/hero'
import { SchnapsSection } from '@/components/home/schnaps-section'
import { BrewerySection } from '@/components/home/brewery-section'
import { RegionalBeerStylesSection } from '@/components/home/regional-beer-styles'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SchnapsSection />
      <BrewerySection />
      <RegionalBeerStylesSection />
    </>
  )
}
