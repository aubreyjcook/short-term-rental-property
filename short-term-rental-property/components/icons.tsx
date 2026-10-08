import type { AmenityIconName, PlaceIconName } from "@/lib/property";

type IconProps = {
  className?: string;
};

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function AmenityIcon({
  name,
  className,
}: IconProps & { name: AmenityIconName }) {
  switch (name) {
    case "bed":
      return (
        <svg {...stroke} className={className}>
          <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
          <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M12 4v6" />
          <path d="M2 18h20" />
        </svg>
      );
    case "bath":
      return (
        <svg {...stroke} className={className}>
          <path d="M10 4 8 6" />
          <path d="M4 13h16" />
          <path d="M5 13V8.5A2.5 2.5 0 0 1 7.5 6H8" />
          <path d="M6 20v-2" />
          <path d="M18 20v-2" />
          <path d="M4 13v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3" />
        </svg>
      );
    case "guests":
      return (
        <svg {...stroke} className={className}>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...stroke} className={className}>
          <path d="M12 20h.01" />
          <path d="M2 8.82a15 15 0 0 1 20 0" />
          <path d="M5 12.86a10 10 0 0 1 14 0" />
          <path d="M8.5 16.43a5 5 0 0 1 7 0" />
        </svg>
      );
    case "parking":
      return (
        <svg {...stroke} className={className}>
          <path d="M19 17h2v-3.3c0-.9-.6-1.7-1.5-1.9C18.8 11.4 16 11 16 11s-1.3-1.4-2.2-2.3c-.5-.5-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9L2.2 11.8A3.5 3.5 0 0 0 2 13v4h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...stroke} className={className}>
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <path d="M6 2v3" />
          <path d="M10 2v3" />
          <path d="M14 2v3" />
        </svg>
      );
  }
}

export function PlaceIcon({
  name,
  className,
}: IconProps & { name: PlaceIconName }) {
  switch (name) {
    case "waves":
      return (
        <svg {...stroke} className={className}>
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        </svg>
      );
    case "trail":
      return (
        <svg {...stroke} className={className}>
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      );
    case "dining":
      return (
        <svg {...stroke} className={className}>
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      );
    case "park":
      return (
        <svg {...stroke} className={className}>
          <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" />
          <path d="M12 22v-3" />
        </svg>
      );
  }
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
