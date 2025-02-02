import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { ReactNode } from "react";

export type LabelProps = ComponentPropsWithoutRefWithProps<
  "label",
  {
    element: ReactNode;
  }
>;
