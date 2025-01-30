import { describe, expect, it } from 'vitest';
import { twMerge } from '.';

describe('tailwind-merge', () => {
  describe('colors', () => {
    it('should override color classes', () => {
      const oldClass =
        'text-primary-500 bg-neutral-black border-neutral-gray-1';
      const newClass =
        'text-state-error-1 bg-neutral-gray-5 border-primary-100';

      expect(twMerge(oldClass, newClass)).toBe(newClass);
    });
  });
});
