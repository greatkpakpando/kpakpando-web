export function ArrowIcon({
  direction = "right",
}: {
  direction?: "right" | "left" | "down";
}) {
  return (
    <svg
      className={`arrow-icon arrow-icon-${direction}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}
