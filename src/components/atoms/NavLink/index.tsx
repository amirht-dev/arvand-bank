"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLinkProps } from "./index.types";

const NavLink = ({ className, activeClassNames, ...props }: NavLinkProps) => {
  const pathname = usePathname().slice(1);
  const href = props.href.toString().slice(1);

  const isActive =
    (!!href.length && pathname.startsWith(href)) || pathname === href;

  const resultClass = clsx(
    typeof className === "function" ? className({ isActive }) : className,
    activeClassNames?.default,
    isActive && activeClassNames?.active,
  );

  return (
    <Link
      {...props}
      aria-selected={isActive}
      data-state={isActive ? "active" : "disactive"}
      className={resultClass}
    />
  );
};

export default NavLink;
