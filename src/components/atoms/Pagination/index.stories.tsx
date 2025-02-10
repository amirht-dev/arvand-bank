import type { Meta, StoryObj } from "@/types/storybook";
import Pagination, {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationRoot,
} from ".";
import { paginationProps } from "./index.types";

const meta = {
  component: Pagination,
  subcomponents: {
    PaginationItem,
    PaginationLink,
    PaginationContent,
    PaginationRoot,
  },
  args: {
    currentPage: 1,
  },
} satisfies Meta<paginationProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

export const Count = {
  args: {
    pages: 5,
  },
} satisfies Story;

export const Object = {
  args: {
    pages: [{}, {}, { disabled: true }, {}, {}],
  },
} satisfies Story;

export const WithPrevAndNext = {
  args: {
    prevAndNext: true,
    pages: 5,
  },
} satisfies Story;

export const Compositional = {
  render() {
    return (
      <PaginationRoot>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="" />
          </PaginationItem>
          {Array.from({ length: 5 }, (_, idx) => (
            <PaginationItem key={idx}>
              <PaginationLink href="" isActive={idx === 2}>
                {idx + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="" />
          </PaginationItem>
        </PaginationContent>
      </PaginationRoot>
    );
  },
} satisfies Story<unknown>;
