import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Menu } from '@/components/menu'
import { Gallery } from '@/components/gallery'
import { Order } from '@/components/order'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Order />
      </main>
      <SiteFooter />
    </div>
  )
}
