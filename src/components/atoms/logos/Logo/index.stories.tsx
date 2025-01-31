import type { Meta, StoryObj } from '@/types/storybook';
import Logo from '.';
import type { LogoProps } from './index.types';

const meta = {
  component: Logo,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    '--size': {
      control: false,
      description: 'determine the size of logo',
      table: {
        category: 'variable',
        defaultValue: {
          summary: '--size-md',
        },
      },
    },
    '--size-sm': {
      control: false,
      description: 'specified small value size of logo',
      table: {
        category: 'variable',
        defaultValue: {
          summary: '36px',
        },
      },
    },
    '--size-md': {
      control: false,
      description: 'specified medium value size of logo',
      table: {
        category: 'variable',
        defaultValue: {
          summary: '47px',
        },
      },
    },
  },
} satisfies Meta<
  LogoProps & { '--size-sm': string; '--size-md': string; '--size': string }
>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Small = {
  args: {
    className: '[--size:--size-sm]',
  },
} satisfies Story;

export const Medium = {
  args: {
    className: '[--size:--size-md]',
  },
} satisfies Story;

export const ResponsiveSize = {
  args: {
    className: '[--size:--size-sm] md:[--size:--size-md]',
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
