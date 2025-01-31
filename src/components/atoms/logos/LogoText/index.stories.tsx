import type { Meta, StoryObj } from '@/types/storybook';
import LogoText from '.';
import type { LogoTextProps } from './index.types';

const meta = {
  component: LogoText,
  argTypes: {
    '--size': {
      control: false,
      description: 'size of logo',
      table: {
        category: 'variable',
      },
    },
    '--size-default': {
      control: false,
      description: 'default size of logo',
      table: {
        category: 'variable',
        defaultValue: {
          summary: '127px',
        },
      },
    },
  },
} satisfies Meta<
  LogoTextProps & { '--size-default': string; '--size': string }
>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const CustomSize = {
  args: {
    className: '[--size:200px]',
  },
} satisfies Story;

export const ResponsiveSize = {
  args: {
    className: '[--size:60px] md:[--size:--size-default]',
  },
} satisfies Story;
