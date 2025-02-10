"use client";

import { MoreHorizontal } from "lucide-react";
import * as React from "react";

import { cn } from "@/utils/utils";
import { range } from "lodash";
import Link from "next/link";
import { Except } from "type-fest";
import { AngleLeft_Outline } from "../icons/Arrows/AngleLeft";
import { AngleRight_Outline } from "../icons/Arrows/AngleRight";
import { PaginationLinkProps, paginationProps } from "./index.types";

const PaginationRoot = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
PaginationRoot.displayName = "PaginationRoot";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-2", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

const PaginationLink = React.forwardRef<
  React.ComponentRef<typeof Link>,
  PaginationLinkProps
>(({ className, isActive = false, disabled = false, ...props }, ref) => (
  <Link
    {...props}
    ref={ref}
    aria-current={isActive ? "page" : undefined}
    data-state={isActive ? "active" : "disactive"}
    aria-disabled={disabled}
    className={cn(
      "flex size-8 items-center justify-center rounded-lg bg-neutral-gray-11 text-caption-1 text-neutral-gray-2 hover:bg-primary-50 hover:text-primary-600",
      "aria-[current=page]:aria-[disabled=false]:bg-primary-500 aria-[current=page]:aria-[disabled=false]:text-neutral-white",
      "aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-gray-9 aria-disabled:text-neutral-gray-4",
      className,
    )}
  />
));
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  children,
  ...props
}: Except<React.ComponentProps<typeof PaginationLink>, "isActive">) => (
  <PaginationLink aria-label="Go to previous page" {...props}>
    {children ?? <AngleRight_Outline className="size-4" />}
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  children,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" {...props}>
    {children ?? <AngleLeft_Outline className="size-4" />}
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

const Pagination = ({
  pages,
  currentPage,
  prevAndNext = false,
  prevDisabled,
  nextDisabled,
  rootProps,
  contentProps,
  itemProps,
  linkProps,
  linkFormatter = (page) => `?page=${page}`,
}: paginationProps) => {
  return (
    <PaginationRoot {...rootProps}>
      <PaginationContent {...contentProps}>
        {prevAndNext && (
          <PaginationItem {...itemProps}>
            <PaginationPrevious
              {...linkProps}
              disabled={prevDisabled ?? currentPage === 1}
              href={linkFormatter(currentPage - 1)}
            />
          </PaginationItem>
        )}
        {(typeof pages === "number" ? range(pages) : pages).map(
          (value, idx) => {
            const page = idx + 1;
            return (
              <PaginationItem {...itemProps} key={idx}>
                <PaginationLink
                  {...linkProps}
                  isActive={page === currentPage}
                  disabled={typeof value === "object" ? value.disabled : false}
                  href={linkFormatter(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          },
        )}
        {prevAndNext && (
          <PaginationItem {...itemProps}>
            <PaginationNext
              {...linkProps}
              disabled={
                nextDisabled ??
                currentPage ===
                  (typeof pages === "number" ? pages : pages.length)
              }
              href={linkFormatter(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationRoot>
  );
};
Pagination.displayName = "Pagination";

export default Pagination;

export {
  PaginationRoot as Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
