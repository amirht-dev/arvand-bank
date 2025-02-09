import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { Arrayable } from "type-fest";

export type SegmentProps = ComponentPropsWithoutRefWithProps<
  "div",
  {
    title: string;
    actions?: Arrayable<React.ReactNode>;
  }
>;
