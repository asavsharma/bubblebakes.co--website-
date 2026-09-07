import Image from 'next/image'

type Product = {
  name: string
  image: string
  alt: string
  description: string
  tag?: string
  /** object-position used to crop Instagram UI out of screenshot-based photos */
  pos?: string
}

const products: Product[] = [
  {
    name: 'Classic Fudgy Brownies',
    image: '/images/classic-brownie.jpg',
    alt: 'Fudgy brownies with shiny crackly tops',
    description:
      'Our signature — deep, rich chocolate with a crackly top and an irresistibly gooey centre.',
    tag: 'Bestseller',
  },
  {
    name: 'Walnut Brownies',
    image: '/images/walnut-brownie.jpg',
    alt: 'Brownies loaded with toasted walnut pieces',
    description:
      'Classic brownie batter loaded with toasted walnuts for the perfect fudgy-crunchy bite.',
    pos: 'object-[center_46%]',
  },
  {
    name: 'Oreo & Chocolate Drizzle',
    image: '/images/oreo-brownie.jpg',
    alt: 'Brownies topped with Oreo cookies and chocolate drizzle',
    description:
      'Extra-indulgent brownies finished with whole Oreos and a generous chocolate drizzle.',
    pos: 'object-bottom',
  },
  {
    name: 'Jar Cakes',
    image: '/images/jar-cakes-trio.jpg',
    alt: 'Three layered jar cakes with gold lids',
    description:
      'Spoonable layers of sponge, cream and sauce in a jar — great for gifting and sharing.',
    pos: 'object-bottom',
  },
  {
    name: 'Nutella Cheesecake Jar',
    image: '/images/nutella-jar.jpg',
    alt: 'Nutella cheesecake jar with biscuit base and chocolate top',
    description:
      'Creamy no-bake cheesecake layered with biscuit crumble and a glossy Nutella top.',
    tag: 'Fan favourite',
    pos: 'object-[center_42%]',
  },
  {
    name: 'Brownie Boxes',
    image: '/images/gallery-boxes.jpg',
    alt: 'Assorted brownie gift boxes',
    description:
      'Mix-and-match boxes of your favourite flavours — perfect for parties and celebrations.',
    pos: 'object-bottom',
  },
]

export function Menu() {
  return (
    <section id="menu" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-foreground uppercase">
            The menu
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight font-semibold text-balance text-primary md:text-4xl">
            Freshly baked treats to order
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
            Here&apos;s what we bake most often. Flavours rotate now and then — message us on
            Instagram for the latest and for custom orders.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-shadow hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={p.alt}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${p.pos ?? ''}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                />
                {p.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-xl font-semibold text-primary">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-muted-foreground">
          Prices vary by flavour and quantity. Send us a message on Instagram for the current
          price list and to place your order.
        </p>
      </div>
    </section>
  )
}
