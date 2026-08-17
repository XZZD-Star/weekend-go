// Lightweight inline SVG icon set — zero runtime deps, all stroke="currentColor"
type IconProps = { className?: string; size?: number };

const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
});

export function CheckIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M4 12l5 5 11-11"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z"
        fill="#FF9F0A"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PinIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 21.5s-7.5-5.4-7.5-11.8A7.5 7.5 0 1 1 19.5 9.7c0 6.4-7.5 11.8-7.5 11.8Z"
        fill="currentColor"
      />
      <circle cx="12" cy="9.7" r="2.8" fill="#0066CC" />
    </svg>
  );
}

export function CalendarIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 10h18M8 3v4M16 3v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WalletIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect
        x="3"
        y="6"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.5" cy="15" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function MapIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M5 21V4l7 2 7-2v17l-7-2-7 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookmarkIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M6 3.5h12V21l-6-3.5L6 21V3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BellIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M6 16V11a6 6 0 1 1 12 0v5l1.5 1.5h-15L6 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 20a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkleIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 2l2.4 6.3 6.6.6-5 4.5 1.5 6.6L12 16.8 6.5 20l1.5-6.6-5-4.5 6.6-.6L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CompassIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M3 12L21 4l-7 18-2.5-7.5L3 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HeartIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 20.5s-7-4.5-9-9.2C1.4 7.4 4 4.5 7 4.5c2 0 3.6 1.2 5 3.1 1.4-1.9 3-3.1 5-3.1 3 0 5.6 2.9 4 6.8-2 4.7-9 9.2-9 9.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HomeIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WeChatIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M9 4C5.7 4 3 6.4 3 9.4c0 1.7 1 3.3 2.5 4.3L5 16l2.5-1.4c.5.1 1 .1 1.5.1.3 0 .6 0 .9-.1-.1-.4-.2-.9-.2-1.3 0-3 2.8-5.4 6.3-5.4.2 0 .5 0 .7.1C16.2 5.5 12.9 4 9 4Z"
        fill="currentColor"
      />
      <path
        d="M21 12.9c0-2.6-2.4-4.7-5.4-4.7s-5.4 2.1-5.4 4.7 2.4 4.7 5.4 4.7c.5 0 1-.1 1.4-.2L19 18.6l-.5-1.8c1.5-.8 2.5-2.2 2.5-3.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WeiboIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <ellipse cx="11" cy="14" rx="7" ry="5" fill="currentColor" />
      <circle cx="9.5" cy="14.5" r="2.2" fill="#1d1d1f" />
      <circle cx="7.5" cy="13" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function NotebookIcon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 8h8M8 12h8M8 16h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
