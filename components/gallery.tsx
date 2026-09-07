import Image from 'next/image'
import { Instagram } from 'lucide-react'

const shots = [
  { src: '/images/gallery-plain.jpg', alt: 'Boxes of plain fudgy brownies with crackly tops', span: 'row-span-2' },
  { src: '/images/gallery-kraft.jpg', alt: 'Kraft boxes of assorted brownies on a wooden table', pos: 'object-bottom' },
  { src: '/images/gallery-two-boxes.jpg', alt: 'Two boxes of freshly baked brownies' },
  { src: '/images/gallery-tray.jpg', alt: 'Close-up of brownies in a kraft paper tray' },
  { src: '/images/gallery-four.jpg', alt: 'Four thick fudgy brownies on parchment paper', span: 'row-span-2' },
  { src: '/images/classic-brownie.jpg', alt: 'Rows of glossy fudgy brownies' },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-foreground uppercase">
              From our kitchen
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight font-semibold text-balance text-primary md:text-4xl">
              Straight off the bake
            </h2>
            <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
              A peek at the treats we&apos;ve been making. Follow along on Instagram for new
              flavours and behind-the-scenes bakes.
            </p>
          </div>
          <a
            href="https://instagram.com/bubblebakes.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-background"
          >
            <Instagram className="h-4 w-4" />
            @bubblebakes.co
          </a>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[210px]">
          {shots.map((s) => (
            <div
              key={s.src}
              className={`relative overflow-hidden rounded-2xl ring-1 ring-primary/10 ${s.span ?? ''}`}
            >
              <Image
                src={s.src || '/placeholder.svg'}
                alt={s.alt}
                fill
                className={`object-cover transition-transform duration-500 hover:scale-105 ${s.pos ?? ''}`}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
