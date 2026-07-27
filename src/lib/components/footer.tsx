import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Collabs", href: "/collabs" },
  { label: "Favors", href: "/favors" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
]

export default function Footer() {
  return (
    <footer className="footer-field relative overflow-hidden bg-[var(--color-deep)] text-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 text-sm sm:px-8 lg:grid-cols-[1.15fr_0.78fr_0.9fr_0.92fr]">
        <div className="relative">
          <Image
            src="/img/logo.avif"
            alt="TREE*STAR"
            width={150}
            height={54}
            className="h-auto w-36 object-contain"
          />
          <p className="mt-5 max-w-md leading-7 text-[var(--color-cream)]/76">
            Fresh natural soap handmade in NYC with organic plant oils, playful scents, and a tree planted with every
            purchase. Stay green while you scrub clean.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/shop" className="button-primary">
              Shop soap
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact us
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="font-serif text-2xl text-[var(--color-cream)]">Explore</div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-[var(--color-cream)]/76">
            {quickLinks.map((link) => (
              <Link key={link.href} className="transition hover:text-[var(--color-gold)]" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative grid gap-8">
          <div className="space-y-3 text-[var(--color-cream)]/76">
            <div className="font-serif text-2xl text-[var(--color-cream)]">Contact</div>
            <Link className="block transition hover:text-[var(--color-gold)]" href="tel:16464890345">
              646.489.0345
            </Link>
            <Link className="block transition hover:text-[var(--color-gold)]" href="mailto:jose@treestarnyc.com">
              jose@treestarnyc.com
            </Link>
            <div>Jackson Heights, NY</div>
            <div>@treestarnyc</div>
          </div>
        </div>

        <div className="relative">
          <div className="space-y-3 text-[var(--color-cream)]/76">
            <div className="font-serif text-2xl text-[var(--color-cream)]">Visit</div>
            <Link
              className="block transition hover:text-[var(--color-gold)]"
              href="https://queensnightmarket.com/"
              target="_blank"
              rel="noreferrer"
            >
              Queens Night Market
            </Link>
            <div>Saturdays, 4:00 PM - Midnight</div>
            <div>April 18 - October 31</div>
          </div>
          <div className="mt-8 border border-[rgba(250,247,240,0.16)] bg-[rgba(250,247,240,0.06)] p-4">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fern)]">Stay green</div>
            <p className="mt-3 leading-7 text-[var(--color-cream)]/72">
              One tree planted with every purchase.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-[rgba(74,124,82,0.5)] pt-6 text-[var(--color-cream)]/64 sm:flex-row sm:items-center sm:justify-between lg:col-span-4">
          <span>&copy; 2026 TREE*STAR NYC · Handmade in NYC</span>
          <Link
            href="https://voltanyc.org/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.16em] transition hover:opacity-80"
            style={{ color: "#84CC18", textDecoration: "none" }}
          >
            Made by volta
          </Link>
        </div>
      </div>
    </footer>
  )
}
