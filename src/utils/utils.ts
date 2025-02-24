import { operator } from "@/constants";
import { twMerge } from "@/lib/tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import chunk from "lodash/chunk";
import sum from "lodash/sum";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function avatarPlaceholderURL(size = 300) {
  return `https://i.pravatar.cc/${size}`;
}

export function formatPrice(price: number, options?: Intl.NumberFormatOptions) {
  return Intl.NumberFormat("fa-IR", {
    style: "currency",
    maximumFractionDigits: 0,
    currency: "IRR",
    ...options,
  })
    .format(price)
    .split(" ")
    .reverse()
    .join();
}

export function splitByLengths(value: string, lengths: number[]) {
  return lengths.reduce((acc, length, idx, lengths) => {
    const startIndex = idx === 0 ? 0 : sum(lengths.slice(0, idx));

    return [...acc, value.slice(startIndex, startIndex + length)];
  }, [] as string[]);
}

export function getLastIndex(param: { length: number }) {
  return param.length - 1;
}

export function formatCardNumber(cardNumber: number | string) {
  return chunk(cardNumber.toString().split(""), 4)
    .map((chunk) => chunk.join(""))
    .join(" ");
}

export function isOperator(value: string): value is keyof typeof operator {
  return value in operator;
}
