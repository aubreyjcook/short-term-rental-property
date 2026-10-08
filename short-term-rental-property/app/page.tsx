import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import { ContactForm } from "@/components/contact-form";
import {
  AmenityIcon,
  CalendarIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  PlaceIcon,
} from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { property } from "@/lib/property";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <section className="relative">
          <div className="relative h-[min(78vh,760px)] min-h-[540px]">
            <Image
              src={property.heroImage.src}
              alt={property.heroImage.alt}
              fill
              priority
              loading="eager"
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15" />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
                <p className="text-xs font-medium tracking-[0.22em] text-white/80 uppercase">
                  {property.area}
                </p>
                <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.02] font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
                  <span className="block text-balance">{property.headline}</span>
                  <span className="mt-1 block font-normal italic">
                    {property.headlineEmphasis}
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                  {property.summary}
                </p>
                <a
                  href="#book"
                  className="mt-8 inline-flex items-center gap-2 bg-ivory px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <CalendarIcon className="size-4" />
                  Check availability
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 mx-auto -mt-8 w-full max-w-6xl px-5 sm:px-8 md:-mt-12">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line shadow-[0_18px_40px_-28px_rgba(28,25,23,0.55)] sm:grid-cols-3 lg:grid-cols-6">
            {property.amenities.map((item) => (
              <li
                key={item.label}
                className="flex flex-col items-center gap-2 bg-ivory px-3 py-5 text-center"
              >
                <AmenityIcon name={item.icon} className="size-5 text-pine" />
                <span className="text-sm font-medium text-ink">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <section id="gallery" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {property.gallery.title}
            </h2>
            <p className="mt-3 max-w-xl text-lg text-muted">
              {property.gallery.body}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
              {property.gallery.photos.map((photo) => (
                <figure
                  key={photo.alt}
                  className={photo.wide ? "md:col-span-7" : "md:col-span-5"}
                >
                  <div className="relative aspect-[3/2] overflow-hidden rounded-md bg-line">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2.5 text-sm text-muted">
                    {photo.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="scroll-mt-24 border-y border-line bg-ivory py-20 sm:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-bronze uppercase">
                Availability
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
                {property.booking.title}
              </h2>
              <p className="mt-4 max-w-md text-lg leading-8 text-muted">
                {property.booking.body}
              </p>
              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="border-t border-line pt-4">
                  <dt className="text-xs font-medium tracking-[0.14em] text-bronze uppercase">
                    Response
                  </dt>
                  <dd className="mt-2 font-serif text-2xl text-ink">
                    Within 24 hours
                  </dd>
                </div>
                <div className="border-t border-line pt-4">
                  <dt className="text-xs font-medium tracking-[0.14em] text-bronze uppercase">
                    Payment
                  </dt>
                  <dd className="mt-2 font-serif text-2xl text-ink">
                    None taken here
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-md border border-line bg-white p-5 shadow-[0_24px_50px_-32px_rgba(28,25,23,0.45)] sm:p-8">
              <BookingForm />
            </div>
          </div>
        </section>

        <section id="attractions" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {property.attractions.title}
            </h2>
            <p className="mt-3 max-w-xl text-lg text-muted">
              {property.attractions.body}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {property.attractions.places.map((place) => (
                <li
                  key={place.name}
                  className="rounded-md border border-line bg-ivory p-6"
                >
                  <PlaceIcon name={place.icon} className="size-5 text-pine" />
                  <h3 className="mt-5 font-serif text-2xl text-ink">
                    {place.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-bronze">
                    {place.drive}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {place.description}
                  </p>
                </li>
              ))}
            </ul>
            <figure className="mt-8 overflow-hidden rounded-md">
              <div className="relative aspect-[16/8] min-h-56">
                <Image
                  src={property.attractions.feature.src}
                  alt={property.attractions.feature.alt}
                  fill
                  sizes="(min-width: 1152px) 1152px, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="border-y border-line bg-ivory py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {property.location.title}
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              {property.location.body}
            </p>
            <div className="mt-8 overflow-hidden rounded-md border border-line">
              <iframe
                title="Approximate location of Lakeview Retreat"
                src={property.location.mapSrc}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
                {property.contact.title}
              </h2>
              <p className="mt-4 max-w-md text-lg leading-8 text-muted">
                {property.contact.body}
              </p>
              <ul className="mt-8 space-y-5 text-sm">
                <li>
                  <a
                    href={`mailto:${property.email}`}
                    className="flex items-center gap-3 text-ink transition-colors hover:text-pine"
                  >
                    <span className="grid size-10 place-items-center rounded-full border border-line text-pine">
                      <MailIcon className="size-4" />
                    </span>
                    {property.email}
                  </a>
                </li>
                <li>
                  <a
                    href={property.phoneHref}
                    className="flex items-center gap-3 text-ink transition-colors hover:text-pine"
                  >
                    <span className="grid size-10 place-items-center rounded-full border border-line text-pine">
                      <PhoneIcon className="size-4" />
                    </span>
                    {property.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-ink">
                  <span className="grid size-10 place-items-center rounded-full border border-line text-pine">
                    <PinIcon className="size-4" />
                  </span>
                  {property.area}
                </li>
              </ul>
            </div>
            <div className="rounded-md border border-line bg-ivory p-5 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-ink text-ivory">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl">{property.name}</p>
            <p className="mt-2 text-sm text-ivory/70">{property.area}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {property.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ivory/75 transition-colors hover:text-ivory"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto w-full max-w-6xl px-5 py-5 text-sm text-ivory/60 sm:px-8">
            {property.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
