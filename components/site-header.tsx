'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Instagram } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#order', label: 'Order' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-primary/20">
            <Image src="/images/logo.jpg" alt="Bubble Bakes logo" fill className="object-cover" sizes="44px" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-primary">Bubble Bakes</span>
            <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">by Asav</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://instagram.com/bubblebakes.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cocoa"
          >
            <Instagram className="h-4 w-4" />
            Order now
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium text-foreground/80 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://instagram.com/bubblebakes.co"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
              Order on Instagram
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
