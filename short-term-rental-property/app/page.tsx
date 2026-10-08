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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 sm:pb-16">
                <p className="text-sm font-medium text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.65)]">
                  {property.area}
                </p>
                <h1 className="mt-2 max-w-3xl font-serif text-4xl leading-tight font-semibold text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
                  {property.headline} {property.headlineEmphasis}
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.55)] sm:text-lg">
                  {property.summary}
                </p>
                <a
                  href="#book"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-pine shadow-sm transition-colors hover:bg-linen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <CalendarIcon className="size-4" />
                  Request to book
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b border-line bg-white">
          <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {property.amenities.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 px-5 py-4 text-sm text-ink sm:px-8"
              >
                <AmenityIcon name={item.icon} className="size-4 shrink-0 text-pine" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <section id="gallery" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
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
                  <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-linen">
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

        <section id="book" className="scroll-mt-20 border-y border-line bg-linen py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
            <div className="lg:pt-2">
              <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
                {property.booking.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-muted sm:text-lg">
                {property.booking.body}
              </p>
              <ul className="mt-8 space-y-2 text-sm text-ink">
                <li>The host replies within 24 hours.</li>
                <li>No payment is taken on this page.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 shadow-sm sm:p-7">
              <BookingForm />
            </div>
          </div>
        </section>

        <section id="attractions" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
              {property.attractions.title}
            </h2>
            <p className="mt-3 max-w-xl text-lg text-muted">
              {property.attractions.body}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {property.attractions.places.map((place) => (
                <li
                  key={place.name}
                  className="rounded-xl border border-line bg-white p-5"
                >
                  <PlaceIcon name={place.icon} className="size-5 text-pine" />
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {place.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{place.drive}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {place.description}
                  </p>
                </li>
              ))}
            </ul>
            <figure className="mt-8 overflow-hidden rounded-xl">
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

        <section className="border-y border-line bg-linen py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
              {property.location.title}
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              {property.location.body}
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-line bg-white">
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

        <section id="contact" className="scroll-mt-20 bg-white py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
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
                    <MailIcon className="size-4 text-pine" />
                    {property.email}
                  </a>
                </li>
                <li>
                  <a
                    href={property.phoneHref}
                    className="flex items-center gap-3 text-ink transition-colors hover:text-pine"
                  >
                    <PhoneIcon className="size-4 text-pine" />
                    {property.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-ink">
                  <PinIcon className="size-4 text-pine" />
                  {property.area}
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-line bg-linen p-5 sm:p-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-pine text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-xl font-semibold">{property.name}</p>
            <p className="mt-1 text-sm text-white/75">{property.area}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {property.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-white/15">
          <p className="mx-auto w-full max-w-6xl px-5 py-4 text-sm text-white/65 sm:px-8">
            {property.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
