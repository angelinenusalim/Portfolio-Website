import type { CSSProperties } from "react";

const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  diagonal: "M6 18 18 6M6 6h12v12",
  down: "M12 4v16m-6-6 6 6 6-6",
  up: "M12 20V4m-6 6 6-6 6 6",
  download: "M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5",
  copy: "M9 8h11v13H9zM15 8V3H4v13h5",
  close: "m6 6 12 12M18 6 6 18",
  menu: "M4 7h16M4 12h16M4 17h16",
  check: "m5 12 4 4L19 6",
  mail: "M3 5h18v14H3zM3 5l9 8 9-8",
  sparkle: "m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7z",
} as const;

export function Icon({
  name,
  style,
}: {
  name: keyof typeof paths;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      <path d={paths[name]} />
    </svg>
  );
}
