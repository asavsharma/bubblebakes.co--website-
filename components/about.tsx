import Image from 'next/image'
import { Heart, Sparkles, Package } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Made by hand',
    text: 'Every batch is baked in a home kitchen in small quantities — no factory shortcuts.',
  },
  {
    icon: Sparkles,
    title: 'Fresh to order',
    text: 'We bake only after your order comes in, so your treats arrive soft and fresh.',
  },
  {
    icon: Package,
    title: 'Beautifully packed',
    text: 'Each order is packed with care, ready to gift or keep all to yourself.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div className="relative order-last md:order-first">
          <div className="relative aspect-square overflow-hidden rounded-3xl ring-1 ring-primary/10 shadow-lg shadow-primary/10">
            <Image
              src="/images/oreo-brownie.jpg"
              alt="Boxes of assorted brownies topped with Oreo and chocolate drizzle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 520px"
            />
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-foreground uppercase">
            Our story
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight font-semibold text-balance text-primary md:text-4xl">
            A little bakery that started with a big love for chocolate
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Bubble Bakes began in 2021 as a passion project — a way to share the warm,
              melt-in-your-mouth brownies that friends and family kept asking for. What
              started in a home kitchen quickly turned into a little name people trust for
              their sweet cravings.
            </p>
            <p>
              We keep things simple and honest: quality ingredients, small batches, and
              recipes we&apos;ve perfected over the years. Whether it&apos;s a classic fudgy
              brownie, a walnut-loaded square, or a layered jar cake, each treat is made to
              feel a little special.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-5 ring-1 ring-border">
                <v.icon className="h-6 w-6 text-accent-foreground" />
                <h3 className="mt-3 font-serif text-base font-semibold text-primary">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
