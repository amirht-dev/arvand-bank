import type { ReactNode } from "react";
import type {
  EmptyObject,
  Merge,
  MergeExclusive,
  SimplifyDeep,
} from "type-fest";
import type { OverrideProps, Props } from "./utils";

export type PropsWithAsChild<P extends Props = EmptyObject> = OverrideProps<
  P,
  {
    asChild?: boolean;
  }
>;

type SlottableWithAsChildProps<P extends Props> = Merge<
  Omit<P, "asChild" | "children">,
  {
    asChild: true;
    children: ReactNode;
  }
>;

type SlottableWithoutAsChildProps<P extends Props> = Merge<
  Omit<P, "asChild">,
  {
    asChild?: false;
  }
>;

export type SlottableProps<P extends Props = EmptyObject> = SimplifyDeep<
  MergeExclusive<SlottableWithAsChildProps<P>, SlottableWithoutAsChildProps<P>>
>;

export type SlottableComponent<P extends Props = EmptyObject> = React.FC<
  SlottableProps<P>
>;
