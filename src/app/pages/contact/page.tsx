import Link from "next/link"
import NewsletterForm from "@/lib/components/newsletter-form"
import PageHero from "@/lib/components/page-hero"

const mapSrc =
  "https://www.google.com/maps?q=Jackson%20Heights%2C%20Queens%2C%20NY&z=14&output=embed"

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-deep)]">
      <PageHero eyebrow="Contact" title="Talk soap, favors, wholesale, or market pickup.">
        <p>Based in Jackson Heights, Queens and popping up around NYC.</p>
      </PageHero>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="grid gap-6">
            <div className="surface shop-card rounded-xl bg-[var(--color-cream)] p-7">
              <div className="eyebrow">CONTACT US</div>
              <Link
                className="mt-5 block font-serif text-3xl font-semibold text-[var(--color-deep)] transition hover:text-[var(--color-moss)]"
                href="tel:16464890345"
              >
                Tel. 646.489.0345
              </Link>
              <Link
                className="mt-4 block break-words font-serif text-3xl font-semibold text-[var(--color-deep)] transition hover:text-[var(--color-moss)]"
                href="mailto:jose@treestarnyc.com"
              >
                jose@treestarnyc.com
              </Link>
              <p className="mt-4 text-lg text-[var(--color-forest)]">Jackson Heights, NY</p>
            </div>

            <aside className="dark-surface rounded-xl p-8 text-[var(--color-cream)]">
              <div className="eyebrow text-[var(--color-fern)]">VISIT US</div>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[1.02]">
                Queens Night Market
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-8 text-[var(--color-cream)]/78">
                <p>
                  April 18th - October 31st
                  <br />
                  Saturdays 4:00 pm - Midnight
                </p>
                <Link
                  href="https://queensnightmarket.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  Market details
                </Link>
              </div>
            </aside>
          </div>

          <div className="surface overflow-hidden rounded-xl bg-[var(--color-cream)]">
            <iframe
              title="Map of Jackson Heights, Queens"
              src={mapSrc}
              className="h-[420px] w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <form className="surface rounded-xl bg-white p-6 sm:p-8">
            <div className="eyebrow">CONTACT US</div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input className="rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)]" placeholder="Name" />
              <input className="rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)]" placeholder="Email" type="email" />
              <input className="rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)] sm:col-span-2" placeholder="Subject" />
              <textarea className="min-h-40 rounded-lg border border-[rgba(74,124,82,0.32)] bg-[var(--color-cream)] px-4 py-4 outline-none focus:border-[var(--color-moss)] sm:col-span-2" placeholder="Type your message here..." />
            </div>
            <button className="button-primary mt-6" type="submit">
              Submit
            </button>
          </form>

          <NewsletterForm />
        </section>
      </div>
    </div>
  )
}
