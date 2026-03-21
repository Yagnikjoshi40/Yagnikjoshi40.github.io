import { HeroSection } from '@/components/Hero/HeroSection';
import { ProductGrid } from '@/components/Products/ProductGrid';
import { ProductFilters } from '@/components/Products/ProductFilters';
import { SearchBar } from '@/components/Products/SearchBar';
import { SortDropdown } from '@/components/Products/SortDropdown';
import { ParallaxSection } from '@/components/Animations/ParallaxSection';
import { MorphShape } from '@/components/Animations/MorphShape';
import { ShaderMaterialShowcase } from '@/components/Animations/ShaderMaterial';
import { ScrollTrigger } from '@/components/Animations/ScrollTrigger';

export default function HomePage() {
  return (
    <main>
      <ScrollTrigger />
      <HeroSection />
      <section className="section-shell grid gap-8 py-24 xl:grid-cols-[0.32fr,1fr]">
        <div data-reveal>
          <ProductFilters />
        </div>
        <div className="space-y-8">
          <div data-reveal className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <SearchBar />
            <SortDropdown />
          </div>
          <ParallaxSection>
            <div className="grid gap-8 lg:grid-cols-[0.7fr,1fr]">
              <div className="flex items-center justify-center" data-reveal>
                <MorphShape />
              </div>
              <div data-reveal>
                <ShaderMaterialShowcase />
              </div>
            </div>
          </ParallaxSection>
          <div data-reveal>
            <ProductGrid />
          </div>
        </div>
      </section>
    </main>
  );
}
