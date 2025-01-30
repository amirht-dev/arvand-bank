import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      iranSansX: 'var(--font-iran-sans-x)',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        '50': 'hsl(var(--color-primary-50-hsl))',
        '100': 'hsl(var(--color-primary-100-hsl))',
        '200': 'hsl(var(--color-primary-200-hsl))',
        '300': 'hsl(var(--color-primary-300-hsl))',
        '400': 'hsl(var(--color-primary-400-hsl))',
        '500': 'hsl(var(--color-primary-500-hsl))',
        '600': 'hsl(var(--color-primary-600-hsl))',
        '700': 'hsl(var(--color-primary-700-hsl))',
        '800': 'hsl(var(--color-primary-800-hsl))',
        '900': 'hsl(var(--color-primary-900-hsl))',
        '950': 'hsl(var(--color-primary-950-hsl))',
      },
      neutral: {
        black: 'hsl(var(--color-neutral-black-hsl))',
        white: 'hsl(var(--color-neutral-white-hsl))',
        gray: {
          '1': 'hsl(var(--color-neutral-gray-1-hsl))',
          '2': 'hsl(var(--color-neutral-gray-2-hsl))',
          '3': 'hsl(var(--color-neutral-gray-3-hsl))',
          '4': 'hsl(var(--color-neutral-gray-4-hsl))',
          '5': 'hsl(var(--color-neutral-gray-5-hsl))',
          '6': 'hsl(var(--color-neutral-gray-6-hsl))',
          '7': 'hsl(var(--color-neutral-gray-7-hsl))',
          '8': 'hsl(var(--color-neutral-gray-8-hsl))',
          '9': 'hsl(var(--color-neutral-gray-9-hsl))',
          '10': 'hsl(var(--color-neutral-gray-10-hsl))',
          '11': 'hsl(var(--color-neutral-gray-11-hsl))',
        },
      },
      state: {
        error: {
          '1': 'hsl(var(--color-state-error-1-hsl))',
          '2': 'hsl(var(--color-state-error-2-hsl))',
        },
        success: {
          '1': 'hsl(var(--color-state-success-1-hsl))',
          '2': 'hsl(var(--color-state-success-2-hsl))',
        },
        info: {
          '1': 'hsl(var(--color-state-info-1-hsl))',
          '2': 'hsl(var(--color-state-info-2-hsl))',
        },
        warning: {
          '1': 'hsl(var(--color-state-warning-1-hsl))',
          '2': 'hsl(var(--color-state-warning-2-hsl))',
        },
        chart: 'hsl(var(--color-state-chart-hsl))',
      },
    },
    extend: {},
  },
  plugins: [tailwindAnimate],
} satisfies Config;
