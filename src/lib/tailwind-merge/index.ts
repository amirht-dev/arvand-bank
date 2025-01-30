import {
  extendTailwindMerge,
  type DefaultClassGroupIds,
  type DefaultThemeGroupIds,
} from 'tailwind-merge';

export const twMergeConfig: Parameters<
  typeof extendTailwindMerge<DefaultClassGroupIds, DefaultThemeGroupIds>
>[0] = {
  override: {
    theme: {
      colors: [
        {
          primary: [
            '50',
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
            '950',
          ],
        },
        {
          neutral: [
            'black',
            'white',
            'gray-1',
            'gray-2',
            'gray-3',
            'gray-4',
            'gray-5',
            'gray-6',
            'gray-7',
            'gray-8',
            'gray-9',
            'gray-10',
            'gray-11',
          ],
        },
        {
          state: [
            'error-1',
            'error-2',
            'success-1',
            'success-2',
            'info-1',
            'info-2',
            'warning-1',
            'warning-2',
            'chart',
          ],
        },
        'transparent',
      ],
    },
    classGroups: {
      'font-family': ['font-iranSansX'],
    },
  },
};

export const twMerge = extendTailwindMerge(twMergeConfig);
