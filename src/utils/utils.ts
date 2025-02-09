import { twMerge } from "@/lib/tailwind-merge";
import { clsx, type ClassValue } from "clsx";

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
