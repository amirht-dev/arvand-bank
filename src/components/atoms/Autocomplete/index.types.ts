import { ComponentPropsWithoutRef, FocusEventHandler, ReactNode } from "react";
import { ConditionalPick } from "type-fest";
import { CommandGroup, CommandItem } from "../Command";
import Input from "../inputs/Input";

export type DefaultOption = {
  label: string;
  value: string;
};

export type DefaultGroupOptions<O = DefaultOption> = {
  group: string;
  options: O[];
};

export type Options<O, G> = Array<O | G>;

export type AutocompleteProps<
  O extends DefaultOption = DefaultOption,
  G extends DefaultGroupOptions<O> = DefaultGroupOptions<O>,
> = {
  options: Array<O | G>;
  value?: O["value"];
  onChange?: (value: O["value"]) => void;
  emptyContent?: ReactNode;
  filterKeys?: Array<keyof ConditionalPick<O, string>>;
  openOnInputFocus?: boolean;
  renderInput?: (
    internalProps: {
      value: string;
      onChange: (value: string) => void;
      onFocus: FocusEventHandler;
    },
    ctx: { toggleOpen: () => void; open: boolean },
  ) => ReactNode;
  commandGroupProps?:
    | ComponentPropsWithoutRef<typeof CommandGroup>
    | ((group: G) => ComponentPropsWithoutRef<typeof CommandGroup>);
  renderOption?: (option: O) => ReactNode;
  commandItemProps?:
    | ComponentPropsWithoutRef<typeof CommandItem>
    | ((option: O) => ComponentPropsWithoutRef<typeof CommandItem>);
  inputProps?: ComponentPropsWithoutRef<typeof Input>;
};
