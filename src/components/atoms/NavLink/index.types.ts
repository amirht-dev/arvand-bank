import type { Merge } from "@/lib/type-fest";
import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

type State = { isActive: boolean };

export type NavLinkProps = Merge<
  PropsWithChildren<LinkProps>,
  {
    className?: string | ((state: State) => string);
    activeClassNames?: Partial<Record<"default" | "active", string>>;
    href: string;
  }
>;
