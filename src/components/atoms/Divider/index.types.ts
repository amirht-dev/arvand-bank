import { ComponentPropsWithoutRefWithProps } from "@/types/utils";

export type DividerProps = ComponentPropsWithoutRefWithProps<
  "svg",
  {
    dashed?: boolean;
    dashLength?: number;
  }
>;
