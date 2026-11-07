/** Accepts a Date or a "YYYY", "YYYY-MM", "YYYY-MM-DD" string. */
export type DateInput = Date | string;

export function toDate(input: DateInput): Date {
  if (input instanceof Date) return input;
  // "YYYY" alone is parsed by JS as a number-ish year; normalise to Jan 1st UTC.
  const normalised = /^\d{4}$/.test(input) ? `${input}-01` : input;
  const date = new Date(normalised);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid date: ${input}`);
  return date;
}

export type Precision = "year" | "month" | "day";

const FORMATS: Record<Precision, Intl.DateTimeFormatOptions> = {
  year: { year: "numeric", timeZone: "UTC" },
  month: { month: "short", year: "numeric", timeZone: "UTC" },
  day: { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" },
};

/** "Mar 14, 2026" / "Oct 2026" / "2026" */
export function formatDate(input: DateInput, precision: Precision = "day") {
  return toDate(input).toLocaleDateString("en-US", FORMATS[precision]);
}

/**
 * "Jun – Aug 2026", "Dec 2025 – Feb 2026", "2023 – 2027", "Aug 2025 – Present".
 * Same year at month precision drops the first year, like the mockup.
 */
export function formatDateRange(
  start: DateInput,
  end?: DateInput,
  precision: Exclude<Precision, "day"> = "month",
) {
  const s = toDate(start);
  if (!end) return `${formatDate(s, precision)} – Present`;
  const e = toDate(end);

  if (precision === "year") {
    const sy = s.getUTCFullYear();
    const ey = e.getUTCFullYear();
    return sy === ey ? `${sy}` : `${sy} – ${ey}`;
  }

  if (s.getUTCFullYear() === e.getUTCFullYear()) {
    const sMonth = s.toLocaleDateString("en-US", {
      month: "short",
      timeZone: "UTC",
    });
    if (s.getUTCMonth() === e.getUTCMonth()) return formatDate(e, "month");
    return `${sMonth} – ${formatDate(e, "month")}`;
  }
  return `${formatDate(s, "month")} – ${formatDate(e, "month")}`;
}

/** Inclusive month count: Jun → Aug = "3 mos", 14 months = "1 yr 2 mos". */
export function formatDuration(
  start: DateInput,
  end: DateInput = new Date(),
): string {
  const s = toDate(start);
  const e = toDate(end);
  const months =
    (e.getUTCFullYear() - s.getUTCFullYear()) * 12 +
    (e.getUTCMonth() - s.getUTCMonth()) +
    1;
  const total = Math.max(1, months);
  const years = Math.floor(total / 12);
  const rest = total % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ");
}

/** Newest first. */
export function sortByDateDesc<T>(items: T[], getDate: (item: T) => DateInput) {
  return [...items].sort(
    (a, b) => toDate(getDate(b)).getTime() - toDate(getDate(a)).getTime(),
  );
}

/** Return items in the order of `ids`, skipping ids that don't exist. */
export function pickPinned<T>(
  ids: readonly string[],
  items: readonly T[],
  getId: (item: T) => string,
): T[] {
  const byId = new Map(items.map((item) => [getId(item), item]));
  return ids.flatMap((id) => {
    const item = byId.get(id);
    return item ? [item] : [];
  });
}

/** Rough reading time at ~200 words per minute. */
export function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
