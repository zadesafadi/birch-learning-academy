export function BirchLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4C24 4 8 20 8 36C8 44 15 52 24 52C33 52 40 44 40 36C40 20 24 4 24 4Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M24 8V48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 16C24 16 14 22 12 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 20C24 20 34 26 36 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 24C24 24 16 28 14 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 28C24 28 32 32 34 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="24" cy="8" rx="3" ry="5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
