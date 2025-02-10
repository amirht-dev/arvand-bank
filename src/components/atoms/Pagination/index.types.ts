import Link from "next/link";

export type paginationProps = {
  pages: number | { disabled?: boolean }[];
  prevAndNext?: boolean;
  currentPage: number;
  linkFormatter?: (page: number) => string;
};

export type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & React.ComponentProps<typeof Link>;
