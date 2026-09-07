import { Instagram, MessageCircle, MapPin, Wallet, Clock } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Send a message',
    text: 'DM us on Instagram with the treats and quantity you\u2019d like.',
  },
  {
    icon: Clock,
    title: 'Confirm your order',
    text: 'We\u2019ll share the price and a pickup or delivery time that works for you.',
  },
  {
    icon: Wallet,
    title: 'Pay & enjoy',
    text: 'Pay easily via GPay, UPI or Paytm — then dig in to something freshly baked.',
  },
]

export function Order() {
  return (
    <section id="order" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="overflow-hidden rounded-4xl bg-primary text-primary-foreground">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-14">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-cream/70 uppercase">
                Ordering
              </span>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-semibold text-balance md:text-4xl">
                Ready for a sweet treat?
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-cream/85">
                We take orders directly through Instagram — it&apos;s the quickest way to reach
                us. Send a message and we&apos;ll take care of the rest.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://instagram.com/bubblebakes.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  <Instagram className="h-4 w-4" />
                  Message @bubblebakes.co
                </a>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-cream/85">
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  Based in Delhi — pickup &amp; local delivery
                </li>
                <li className="flex items-center gap-3">
                  <Wallet className="h-4 w-4 shrink-0 text-accent" />
                  GPay · UPI · Paytm accepted
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
                  For DMs you can also reach @asav_shawarma
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="flex items-start gap-4 rounded-2xl bg-cream/10 p-5 ring-1 ring-cream/15"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/15">
                    <s.icon className="h-5 w-5 text-cream" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">
                      <span className="text-accent">{i + 1}.</span> {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream/80">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
