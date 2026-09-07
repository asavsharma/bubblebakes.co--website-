import Image from 'next/image'
import { Instagram, MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-primary/20">
            <Image src="/images/logo.jpg" alt="Bubble Bakes logo" fill className="object-cover" sizes="64px" />
          </span>
          <div>
            <p className="font-serif text-2xl font-semibold text-primary">Bubble Bakes</p>
            <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase">by Asav</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Delhi, India
            </span>
            <a
              href="https://instagram.com/bubblebakes.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" /> @bubblebakes.co
            </a>
          </div>

          <a
            href="https://instagram.com/bubblebakes.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cocoa"
          >
            <Instagram className="h-4 w-4" />
            Order now
          </a>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bubble Bakes by Asav. Handmade in Delhi with love.
        </div>
      </div>
    </footer>
  )
}
