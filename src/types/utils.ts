import type { DistributiveMerge, MergeOptions } from '@/lib/type-fest';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import type { LiteralUnion, Merge } from 'type-fest';

export type DateType = string | number | Date;

export type PromiseAble<T> = T | Promise<T>;

export type OneOrMore<T> = T | T[];

export type LooseString<T> = T | (string & {});

export type AllOrNothingProps<P> =
  | Required<P>
  | Partial<Record<keyof P, never>>;

export type Keyof<O> = O extends infer TO ? keyof TO : never;

export type If<TCondition extends boolean | 0 | 1, T, F> = TCondition extends
  | true
  | 0
  ? T
  : F;

export type OverrideProps<
  TObj1,
  TObj2,
  TDirection extends '->' | '<-' = '<-'
> = TDirection extends '->'
  ? UnionOmit<TObj2, Keyof<TObj1>> & TObj1
  : UnionOmit<TObj1, Keyof<TObj2>> & TObj2;

export type UnionOmit<O, K extends string | number | symbol> = O extends unknown
  ? Omit<O, K>
  : never;

export type RequiredExcept<T, K extends keyof T = never> = Required<
  Omit<T, K>
> &
  Partial<Pick<T, K>>;
export type PartialExcept<T, K extends keyof T = never> = Partial<Omit<T, K>> &
  Required<Pick<T, K>>;

export type PickRequired<O, U extends keyof O> = Omit<O, U> &
  Required<Pick<O, U>>;
export type PickPartial<O, U extends keyof O> = Omit<O, U> &
  Partial<Pick<O, U>>;

export type NullableObject<O> = {
  [K in keyof O]: O[K] | null;
};

export type ClientRect = Omit<DOMRect, 'toJSON'> & {
  offsetTop: number;
  offsetLeft: number;
};

export type LooseObject<TObject, TValue = TObject[keyof TObject]> = {
  [K in keyof TObject]: TObject[K];
} & Record<string, TValue>;

export type PixelSize = `${number}px`;

// ---------- react --------------
export type RefHTMLElement<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>['ref'] extends infer TRef
    ? TRef extends React.RefObject<infer TEl>
      ? TEl
      : never
    : never;

export type CallableNode<P extends [...props: unknown[]]> =
  | React.ReactNode
  | ((...props: P) => React.ReactNode);

export type Props = Record<string, unknown>;

export type ComponentPropsWithoutRefWithProps<
  E extends ElementType,
  P extends Props,
  Options extends MergeOptions = { simplify: true }
> = DistributiveMerge<ComponentPropsWithoutRef<E>, P, Options>;

// export type UnwrapFactoryElement<F> =
//   F extends DetailedHTMLFactory<never, infer P> ? P : never;

export type SVGIconProps<TFill extends string = never> = Merge<
  ComponentPropsWithoutRef<'svg'>,
  { fillPath?: LiteralUnion<'currentColor' | TFill, string> }
>;
