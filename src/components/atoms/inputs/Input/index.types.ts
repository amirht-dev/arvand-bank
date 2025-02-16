import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrayValues, Merge, Simplify } from "type-fest";
import { INPUT_SiZES } from "./index.constants";

export type InputRootProps = ComponentPropsWithoutRefWithProps<
  "div",
  {
    size?: ArrayValues<typeof INPUT_SiZES>;
    error?: boolean;
  }
>;

export type InputIconProps = ComponentPropsWithoutRef<"span">;

export type InputElementProps = ComponentPropsWithoutRef<"input">;

export type InputErrorMessageProps = ComponentPropsWithoutRef<"p">;

export type InputDescriptionProps = ComponentPropsWithoutRef<"p">;

export type InputContainerProps = ComponentPropsWithoutRef<"div">;

export type InputProps = Simplify<
  Merge<InputElementProps, Pick<InputRootProps, "size" | "className">> & {
    error?: boolean | string;
    description?: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
  }
>;
