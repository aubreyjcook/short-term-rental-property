export type AmenityIconName =
  | "bed"
  | "bath"
  | "guests"
  | "wifi"
  | "parking"
  | "kitchen";

export type PlaceIconName = "waves" | "trail" | "dining" | "park";

export const property = {
  name: "Lakeview Retreat",
  metaTitle: "Lakeview Retreat — Short Term Rental",
  headline: "Your home away from home",
  headlineEmphasis: "by the lake",
  summary:
    "A cozy 3-bedroom retreat with mountain views, minutes from the pier, trails, and old town.",
  area: "Lakeside, near Old Town",
  email: "host@lakeviewretreat.com",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  heroImage: {
    src: "/images/exterior.jpg",
    alt: "Lakeview Retreat at sunset",
  },
  nav: [
    { href: "#gallery", label: "Photos" },
    { href: "#book", label: "Book" },
    { href: "#attractions", label: "Explore" },
    { href: "#contact", label: "Contact" },
  ],
  amenities: [
    { icon: "bed", label: "3 bedrooms" },
    { icon: "bath", label: "2 bathrooms" },
    { icon: "guests", label: "Sleeps 6" },
    { icon: "wifi", label: "Fast Wi-Fi" },
    { icon: "parking", label: "Free parking" },
    { icon: "kitchen", label: "Full kitchen" },
  ] satisfies { icon: AmenityIconName; label: string }[],
  gallery: {
    title: "Take a look around",
    body: "Inside and out — see where you’ll be staying.",
    photos: [
      {
        src: "/images/exterior.jpg",
        alt: "Front of the home at sunset",
        wide: true,
      },
      {
        src: "/images/living.jpg",
        alt: "Bright living room with lake view",
        wide: false,
      },
      {
        src: "/images/bedroom.jpg",
        alt: "Main bedroom with garden access",
        wide: false,
      },
      {
        src: "/images/pier.jpg",
        alt: "Lake View Pier at sunset",
        wide: true,
      },
    ],
  },
  booking: {
    title: "Request to book",
    body: "Confirm the dates you want on the calendar and send a request — the host will confirm availability within 24 hours. No payment is taken here.",
    namePlaceholder: "Jane Smith",
    emailPlaceholder: "jane@example.com",
    messagePlaceholder: "Anything we should know about your stay?",
    submit: "Send booking request",
    maxGuests: 6,
  },
  attractions: {
    title: "Local attractions",
    body: "Everything you need is just a few minutes away.",
    places: [
      {
        icon: "waves",
        name: "Lake View Pier",
        drive: "5 min drive",
        description: "Sunset strolls, boat rentals, and a sandy swim beach.",
      },
      {
        icon: "trail",
        name: "Ridge Trailhead",
        drive: "10 min drive",
        description: "Family-friendly hiking with panoramic lake views.",
      },
      {
        icon: "dining",
        name: "Old Town Dining",
        drive: "8 min drive",
        description: "Local cafés, breweries, and farm-to-table restaurants.",
      },
      {
        icon: "park",
        name: "Cedar Park",
        drive: "3 min drive",
        description: "Playground, picnic areas, and shaded walking loops.",
      },
    ] satisfies {
      icon: PlaceIconName;
      name: string;
      drive: string;
      description: string;
    }[],
    feature: {
      src: "/images/pier.jpg",
      alt: "Lake View Pier at sunset",
    },
  },
  location: {
    title: "Where you’ll be",
    body: "Approximate location — the exact address is shared after your booking is confirmed.",
    mapSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=-120.05%2C39.05%2C-119.85%2C39.25&layer=mapnik",
  },
  contact: {
    title: "Contact the host",
    body: "Questions about the property, the area, or your dates? We’re happy to help.",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Hi! We’d love to stay…",
    submit: "Send message",
  },
  footer: "© 2026 Lakeview Retreat. All rights reserved.",
} as const;
