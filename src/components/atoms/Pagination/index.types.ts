import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from ".";

export type paginationProps = {
  pages: number | { disabled?: boolean }[];
  prevAndNext?: boolean;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  currentPage: number;
  linkFormatter?: (page: number) => string;
  rootProps?: Partial<ComponentPropsWithoutRef<typeof Pagination>>;
  contentProps?: Partial<ComponentPropsWithoutRef<typeof PaginationContent>>;
  itemProps?: Partial<ComponentPropsWithoutRef<typeof PaginationItem>>;
  linkProps?: Partial<ComponentPropsWithoutRef<typeof PaginationLink>>;
};

export type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & React.ComponentProps<typeof Link>;
