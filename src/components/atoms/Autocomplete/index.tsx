"use client";

import { cn, getLastIndex } from "@/utils/utils";
import { FocusEventHandler, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../Command";
import { AngleDown_Outline } from "../icons/Arrows/AngleDown";
import Input from "../inputs/Input";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "../Popover";
import {
  AutocompleteProps,
  DefaultGroupOptions,
  DefaultOption,
  Options,
} from "./index.types";

function filterOptions<
  O extends DefaultOption,
  G extends DefaultGroupOptions<O>,
>(
  options: Options<O, G>,
  input: string,
  filterKeys: AutocompleteProps["filterKeys"] = ["value"],
) {
  const isOptionMatch = (option: O) => {
    return filterKeys
      .map((key) => option[key])
      .some((value) => value.match(new RegExp(input, "i")));
  };

  return options.reduce(
    (acc, item) => {
      if ("value" in item) {
        if (isOptionMatch(item)) return [...acc, item];
      } else {
        if (item.options.some((subOption) => isOptionMatch(subOption)))
          return [
            ...acc,
            {
              ...item,
              options: item.options.filter((subOption) =>
                isOptionMatch(subOption),
              ),
            },
          ];
      }
      return acc;
    },
    [] as Options<O, G>,
  );
}

const Autocomplete = <
  O extends DefaultOption,
  G extends DefaultGroupOptions<O> = DefaultGroupOptions<O>,
>({
  options,
  value,
  onChange,
  emptyContent = "نتیجه ای یافت نشد",
  filterKeys,
  renderInput,
  openOnInputFocus = false,
  commandGroupProps,
  commandItemProps,
  inputProps,
  renderOption = (o) => o.label,
}: AutocompleteProps<O, G>) => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const filteredOptions = filterOptions<O, G>(
    options,
    input,
    (filterKeys as AutocompleteProps["filterKeys"]) ?? ["value"],
  );

  const toggleOpen = () => setOpen((p) => !p);

  const handleSelect = (label: string) => {
    setInput(label);
    setOpen(false);
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    setOpen(true);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    inputProps?.onFocus?.(e);
    if (openOnInputFocus) setOpen(true);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        {renderInput?.(
          {
            value: input,
            onChange: handleInputChange,
            onFocus: handleFocus,
          },
          { toggleOpen, open },
        ) ?? (
          <Input
            suffixIcon={
              <PopoverTrigger asChild>
                <AngleDown_Outline className="transition-all data-[state=open]:rotate-180" />
              </PopoverTrigger>
            }
            {...inputProps}
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            onFocus={handleFocus}
          />
        )}
      </PopoverAnchor>

      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0"
        tabIndex={0}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Command shouldFilter={false} value={value} onValueChange={onChange}>
          <CommandList className="px-6 py-2">
            {!!emptyContent && <CommandEmpty>{emptyContent}</CommandEmpty>}
            {filteredOptions.map((item, idx, options) =>
              "value" in item ? (
                <CommandItem
                  {...(typeof commandItemProps === "function"
                    ? commandItemProps(item)
                    : commandItemProps)}
                  key={item.value}
                  value={item.value}
                  onSelect={(value) => {
                    handleSelect(item.label);
                    if (typeof commandItemProps === "function")
                      commandItemProps(item).onSelect?.(value);
                    else commandItemProps?.onSelect?.(value);
                  }}
                >
                  {renderOption(item)}
                </CommandItem>
              ) : (
                <>
                  <CommandGroup
                    heading={item.group}
                    {...(typeof commandGroupProps === "function"
                      ? commandGroupProps(item)
                      : commandGroupProps)}
                    className={cn(
                      typeof commandGroupProps === "function"
                        ? commandGroupProps(item).className
                        : commandGroupProps?.className,
                    )}
                    key={item.group}
                  >
                    {item.options.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={(value) => {
                          handleSelect(option.label);
                          if (typeof commandItemProps === "function")
                            commandItemProps(option).onSelect?.(value);
                          else commandItemProps?.onSelect?.(value);
                        }}
                      >
                        {renderOption(option)}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  {getLastIndex(options) !== idx && <CommandSeparator />}
                </>
              ),
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Autocomplete;
