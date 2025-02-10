"use client";

import Chip from "@/components/atoms/Chip";
import Pagination from "@/components/atoms/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/Table";
import { formatPrice } from "@/utils/utils";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useSearchParams } from "next/navigation";
import { TransactionsTableProps } from "./index.types";

type Transaction = {
  type: "deposit" | "withdraw" | "online-shopping";
  price: number;
  date: Date;
  status: "success" | "failed";
  account: {
    number: number;
    holderName: string;
  };
  referenceNumber: number;
};

const TRANSACTION_TYPE_MAP: Record<Transaction["type"], string> = {
  deposit: "واریز",
  withdraw: "برداشت",
  "online-shopping": "خرید اینترنتی",
};

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor("type", {
    header: "نوع تراکنش",
    cell: (transaction) => TRANSACTION_TYPE_MAP[transaction.getValue()],
  }),
  columnHelper.accessor("price", {
    header: "مبلغ",
    cell: (transaction) => formatPrice(transaction.getValue()),
  }),
  columnHelper.accessor("date", {
    header: "تاریخ",
    cell: (transaction) => transaction.getValue().toLocaleDateString("fa-IR"),
  }),
  columnHelper.accessor("status", {
    header: "وضعیت",
    cell: (transaction) => (
      <Chip
        variant="tune"
        color={transaction.getValue() === "success" ? "success" : "error"}
      >
        {transaction.getValue() === "success" ? "موفق" : "ناموفق"}
      </Chip>
    ),
  }),
];

const totalColumns = [
  ...columns,
  columnHelper.accessor("account.number", {
    header: "شماره حساب",
    cell: (transaction) => transaction.getValue(),
  }),
  columnHelper.accessor("account.holderName", {
    header: "نام دارنده حساب",
    cell: (transaction) => transaction.getValue(),
  }),
  columnHelper.accessor("referenceNumber", {
    header: "شماره رجاع",
    cell: (transaction) => transaction.getValue(),
  }),
];

const data = Array.from<Transaction, Transaction>({ length: 20 }, () => ({
  type: "deposit",
  price: 311_440_000,
  date: new Date(),
  status: "success",
  account: {
    number: 43215987263,
    holderName: "محمدرضا قاسمی",
  },
  referenceNumber: 12345678,
}));

const TransactionsTable = ({ simple = false }: TransactionsTableProps) => {
  const pageIndex = parseInt(useSearchParams().get("page") ?? "0");

  const table = useReactTable({
    columns: simple ? columns : totalColumns,
    data: simple ? data.slice(0, 3) : data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: simple ? undefined : getPaginationRowModel(),
    initialState: {
      columnOrder: simple
        ? undefined
        : [
            "type",
            "account_number",
            "account_holderName",
            "price",
            "date",
            "referenceNumber",
            "status",
          ],
    },
    state: {
      pagination: {
        pageIndex,
        pageSize: 6,
      },
    },
  });

  return (
    <>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {table.getPageCount() > 1 && (
        <Pagination
          currentPage={table.getState().pagination.pageIndex + 1}
          pages={table.getPageCount()}
          prevAndNext
          prevDisabled={!table.getCanPreviousPage()}
          nextDisabled={!table.getCanNextPage()}
          linkFormatter={(page) => `?page=${page - 1}`}
          linkProps={{
            scroll: false,
          }}
        />
      )}
    </>
  );
};

export default TransactionsTable;
