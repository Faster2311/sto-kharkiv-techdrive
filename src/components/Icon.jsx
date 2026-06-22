const PATHS = {
  scan: (
    <>
      <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
      <path d="M3 12h18" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
      <path d="M14 3v6h6M8 13h8M8 17h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  tools: (
    <>
      <path d="M14 6l4-4 3 3-4 4M13 7l4 4-9 9-4-4z" />
    </>
  ),
  chip: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 9h6v6H9zM3 9v6M21 9v6M9 3h6M9 21h6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
  ),
  tg: <path d="M21 4L2 11l6 2 2 6 4-4 5 4 2-15z" />,
  pin: (
    <>
      <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  ig: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: (
    <path d="M12 2l3 7 7 .6-5.3 4.7L18 22l-6-3.5L6 22l1.3-7.7L2 9.6 9 9z" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12l4 4 10-10" />,
  flame: (
    <path d="M12 3c2 4 6 6 6 10a6 6 0 11-12 0c0-2 1-3.5 2.5-4.5C9 10 9 8 12 3z" />
  ),
};

export default function Icon({ name, className = "h-5 w-5", strokeWidth = 1.6 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] || null}
    </svg>
  );
}
