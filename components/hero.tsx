import Image from 'next/image'
import { Instagram, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-14 pb-16 md:grid-cols-2 md:pt-20 md:pb-24">
        <div className="flex flex-col">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-cream px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            <MapPin className="h-3.5 w-3.5" />
            Home bakery · Delhi
          </span>

          <h1 className="font-serif text-4xl leading-[1.05] font-semibold text-balance text-primary sm:text-5xl md:text-6xl">
            Fudgy brownies, baked with love.
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-pretty text-muted-foreground">
            Bubble Bakes is a small-batch home bakery making rich, gooey brownies and
            dreamy layered jar cakes — freshly baked to order, just the way you like them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://instagram.com/bubblebakes.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cocoa"
            >
              <Instagram className="h-4 w-4" />
              Order on Instagram
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-cream"
            >
              See the menu
            </a>
          </div>

          <dl className="mt-10 grid max-w-sm grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="sr-only">Baked fresh</dt>
              <dd className="font-serif text-2xl font-semibold text-primary">100%</dd>
              <p className="text-xs text-muted-foreground">Baked to order</p>
            </div>
            <div>
              <dt className="sr-only">Since</dt>
              <dd className="font-serif text-2xl font-semibold text-primary">2021</dd>
              <p className="text-xs text-muted-foreground">Baking since</p>
            </div>
            <div>
              <dt className="sr-only">Flavours</dt>
              <dd className="font-serif text-2xl font-semibold text-primary">6+</dd>
              <p className="text-xs text-muted-foreground">Treats to pick</p>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl ring-1 ring-primary/10 shadow-xl shadow-primary/10">
            <Image
              src="/images/brownie-stack.jpg"
              alt="A stack of freshly baked fudgy brownies with crackly tops"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-44 rotate-[-4deg] overflow-hidden rounded-2xl ring-1 ring-primary/10 shadow-lg shadow-primary/20 sm:block">
            <Image
              src="/images/jar-cakes-trio.jpg"
              alt="Three layered jar cakes with golden lids"
              width={220}
              height={280}
              className="h-40 w-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
