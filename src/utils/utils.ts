import { twMerge } from "@/lib/tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function avatarPlaceholderURL(size = 300) {
  return `https://i.pravatar.cc/${size}`;
}
