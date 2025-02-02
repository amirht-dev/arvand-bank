import { describe, expect, it } from "vitest";
import { twMerge } from "../tailwind-merge";

describe("tailwind-merge", () => {
  describe("colors", () => {
    it("should override color classes", () => {
      const oldClass =
        "text-primary-500 bg-neutral-black border-neutral-gray-1";
      const newClass =
        "text-state-error-1 bg-neutral-gray-5 border-primary-100";

      expect(twMerge(oldClass, newClass)).toBe(newClass);
    });
  });

  describe("font-size", () => {
    it("should override font size classes", () => {
      [
        ["text-display-1", "text-display-2"],
        ["text-heading-1", "text-display-2"],
        ["text-body-3", "text-caption-1"],
      ].forEach(([oldClass, newClass]) => {
        expect(twMerge(oldClass, newClass)).toBe(newClass);
      });
    });

    it("should not override text color classes and reverse", () => {
      [
        ["text-primary-500", "text-body-1"],
        ["text-state-error-1", "text-heading-2"],
        ["text-neutral-gray-5", "text-display-1"],
      ].forEach(([className1, className2]) => {
        expect(twMerge(className1, className2)).toBe(
          `${className1} ${className2}`,
        );
        expect(twMerge(className2, className1)).toBe(
          `${className2} ${className1}`,
        );
      });
    });
  });

  describe("animate", () => {
    it("should override animate classes", () => {
      [
        ["animate-path-draw", "animate-path-draw-reverse"],
        ["animate-spin", "animate-path-draw"],
      ].forEach(([oldClass, newClass]) => {
        expect(twMerge(oldClass, newClass)).toBe(newClass);
      });
    });
  });
});
