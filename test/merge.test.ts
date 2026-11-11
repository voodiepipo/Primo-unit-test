import { describe, expect, it } from "vitest";
import { merge } from "../src/merge.js";

describe("merge", () => {
  it("merges three non-empty inputs in ascending order", () => {
    expect(merge([1, 4, 7], [2, 5, 8], [9, 6, 3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("handles empty inputs", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 3], [], [])).toEqual([1, 3]);
    expect(merge([], [2, 4], [])).toEqual([2, 4]);
    expect(merge([], [], [5, 3, 1])).toEqual([1, 3, 5]);
  });

  it("retains duplicates across and within inputs", () => {
    expect(merge([1, 2, 2], [2, 3], [3, 2, 1])).toEqual([1, 1, 2, 2, 2, 2, 3, 3]);
  });

  it("handles negative numbers and already aligned ranges", () => {
    expect(merge([-8, -3, 0], [1, 4], [10, 5, -2])).toEqual([-8, -3, -2, 0, 1, 4, 5, 10]);
  });

  it("does not mutate its inputs", () => {
    const first = [1, 3];
    const second = [2, 4];
    const third = [5, 0];
    merge(first, second, third);
    expect(first).toEqual([1, 3]);
    expect(second).toEqual([2, 4]);
    expect(third).toEqual([5, 0]);
  });
});
