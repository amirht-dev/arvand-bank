import { ComponentPropsWithoutRef } from "react";
import { Except } from "type-fest";

export type CheckboxProps = Except<ComponentPropsWithoutRef<"input">, "type">;
