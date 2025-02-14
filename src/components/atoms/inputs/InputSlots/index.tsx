"use client";

import { createCTX } from "@/utils/clientHelpers";
import { cn, splitByLengths } from "@/utils/utils";
import sum from "lodash/sum";
import {
  ChangeEventHandler,
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
} from "react";
import type {
  InputSlotsContextType,
  InputSlotsGroupProps,
  InputSlotsItemProps,
  InputSlotsProps,
  InputSlotsSeparatorProps,
} from "./index.types";

const { context: CardInputContext, hook: useCardInputContext } =
  createCTX<InputSlotsContextType>("CardInput");

const InputSlots = ({
  value,
  className,
  autoFocus = false,
  onChange,
  onClick,
  ...props
}: InputSlotsProps) => {
  const refs = useRef<HTMLInputElement[]>([]);
  const inputsLength = useRef<number[]>([]);

  const getValues = useCallback(
    () => splitByLengths(value, inputsLength.current),
    [value],
  );

  const getActiveSlotIdx = useCallback<
    InputSlotsContextType["getActiveSlotIdx"]
  >(() => {
    const values = getValues();
    return values.findIndex(
      (value, idx) =>
        value.length < inputsLength.current[idx] || idx === values.length - 1,
    );
  }, [getValues]);

  const getSlotValue: InputSlotsContextType["getSlotValue"] = (idx) => {
    const startIndex = idx === 0 ? 0 : sum(inputsLength.current.slice(0, idx));

    return value.slice(startIndex, startIndex + inputsLength.current[idx]);
  };

  const setSlotLength: InputSlotsContextType["setSlotLength"] = (
    idx,
    length,
  ) => {
    inputsLength.current[idx] = length;
  };

  const focusSlot = useCallback(() => {
    refs.current
      .find(
        (_, idx) =>
          getValues()[idx].length < inputsLength.current[idx] ||
          idx === refs.current.length - 1,
      )
      ?.focus();
  }, [getValues]);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    onClick?.(e);
    focusSlot();
  };

  const handleSlotChange: InputSlotsContextType["handleSlotChange"] = (
    idx,
    value,
  ) => {
    const prevValue = getValues().slice(0, idx).join("");

    onChange?.(prevValue + value);

    if (value.length >= inputsLength.current[idx])
      refs.current[idx + 1]?.focus();
  };

  useEffect(() => {
    if (!autoFocus) return;
    focusSlot();
  }, [autoFocus, focusSlot]);

  return (
    <CardInputContext.Provider
      value={{
        refs,
        setSlotLength,
        getSlotValue,
        handleSlotChange,
        getActiveSlotIdx,
      }}
    >
      <div
        {...props}
        className={cn("inline-flex items-center gap-1", className)}
        onClick={handleClick}
      />
    </CardInputContext.Provider>
  );
};

function InputSlotsSeparator({
  className,
  ...props
}: InputSlotsSeparatorProps) {
  return (
    <span
      {...props}
      className={cn("h-px w-1 rounded-full bg-neutral-gray-7", className)}
    />
  );
}

function InputSlotItem({
  length = 1,
  idx,
  className,
  groupItem = false,
  onMouseDown,
  onKeyDown,
  onChange,
  style,
  ...props
}: InputSlotsItemProps) {
  const {
    setSlotLength,
    getSlotValue,
    refs,
    handleSlotChange,
    getActiveSlotIdx,
  } = useCardInputContext();

  setSlotLength(idx, length);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e);
    const value = e.target.value;

    handleSlotChange(idx, value);

    if (value.length >= length) {
      refs.current[idx + 1]?.focus();
      return;
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    onKeyDown?.(e);
    if (e.key !== "Backspace" || getSlotValue(idx)) return;

    refs.current[idx - 1]?.focus();
  };

  const handleMouseDown: MouseEventHandler<HTMLInputElement> = (e) => {
    onMouseDown?.(e);
    e.preventDefault();
  };

  return (
    <input
      {...props}
      ref={(el) => {
        if (el) refs.current[idx] = el;
      }}
      tabIndex={getActiveSlotIdx() === idx ? 0 : -1}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
      value={getSlotValue(idx)}
      onChange={handleChange}
      style={
        {
          "--slot-width": `${Math.sqrt(length) * 2.5}em`,
          ...style,
        } as CSSProperties
      }
      className={cn(
        "h-[2.5em] w-[--slot-width] border-neutral-gray-7 text-center outline-none focus:border-primary-500",
        groupItem
          ? "border border-e-0 first:rounded-s-lg last:rounded-e-lg last:border-e [&:focus+input]:border-s-primary-500"
          : "rounded-lg border",
        className,
      )}
    />
  );
}

function InputSlotGroup({ className, ...props }: InputSlotsGroupProps) {
  return <div {...props} className={cn("flex", className)} />;
}

export { InputSlotGroup, InputSlotItem, InputSlots, InputSlotsSeparator };
