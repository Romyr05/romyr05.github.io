import { describe, expect, it } from "vitest";
import {
  formatDate,
  formatDateRange,
  formatDuration,
  pickPinned,
  readingTime,
  sortByDateDesc,
  toDate,
} from "./utils";

describe("toDate", () => {
  it("parses a bare year as Jan 1st UTC", () => {
    expect(toDate("2027").toISOString()).toBe("2027-01-01T00:00:00.000Z");
  });

  it("throws on garbage", () => {
    expect(() => toDate("not-a-date")).toThrow("Invalid date");
  });
});

describe("formatDate", () => {
  it("formats at each precision", () => {
    expect(formatDate("2026-03-14")).toBe("Mar 14, 2026");
    expect(formatDate("2026-10", "month")).toBe("Oct 2026");
    expect(formatDate("2026-10", "year")).toBe("2026");
  });
});

describe("formatDateRange", () => {
  it("drops the repeated year within one year", () => {
    expect(formatDateRange("2026-06", "2026-08")).toBe("Jun – Aug 2026");
  });

  it("keeps both years across years", () => {
    expect(formatDateRange("2025-12", "2026-02")).toBe("Dec 2025 – Feb 2026");
  });

  it("collapses a single month", () => {
    expect(formatDateRange("2026-04", "2026-04")).toBe("Apr 2026");
  });

  it("shows Present when there is no end", () => {
    expect(formatDateRange("2025-08")).toBe("Aug 2025 – Present");
  });

  it("supports year precision", () => {
    expect(formatDateRange("2023", "2027", "year")).toBe("2023 – 2027");
    expect(formatDateRange("2025", "2025", "year")).toBe("2025");
  });
});

describe("formatDuration", () => {
  it("counts months inclusively", () => {
    expect(formatDuration("2026-06", "2026-08")).toBe("3 mos");
    expect(formatDuration("2026-06", "2026-06")).toBe("1 mo");
  });

  it("rolls months into years", () => {
    expect(formatDuration("2025-01", "2026-02")).toBe("1 yr 2 mos");
    expect(formatDuration("2024-01", "2025-12")).toBe("2 yrs");
  });
});

describe("sortByDateDesc", () => {
  it("puts newest first without mutating input", () => {
    const input = [{ d: "2024-01" }, { d: "2026-01" }, { d: "2025-01" }];
    const out = sortByDateDesc(input, (x) => x.d);
    expect(out.map((x) => x.d)).toEqual(["2026-01", "2025-01", "2024-01"]);
    expect(input[0]?.d).toBe("2024-01");
  });
});

describe("pickPinned", () => {
  it("keeps pinned order and skips unknown ids", () => {
    const items = [{ id: "a" }, { id: "b" }, { id: "c" }];
    const out = pickPinned(["c", "missing", "a"], items, (x) => x.id);
    expect(out.map((x) => x.id)).toEqual(["c", "a"]);
  });
});

describe("readingTime", () => {
  it("never returns 0 minutes", () => {
    expect(readingTime("hi")).toBe("1 min read");
    expect(readingTime("word ".repeat(1000))).toBe("5 min read");
  });
});
