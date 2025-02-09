"use client";

import Chip from "@/components/atoms/Chip";
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
  useReactTable,
} from "@tanstack/react-table";
import { TransactionsTableProps } from "./index.types";

type Transaction = {
  type: "deposit" | "withdraw";
  price: number;
  date: Date;
  status: "success" | "failed";
};

const TRANSACTION_TYPE_MAP: Record<Transaction["type"], string> = {
  deposit: "واریز",
  withdraw: "برداشت",
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

const data = Array.from<Transaction, Transaction>({ length: 3 }, () => ({
  type: "deposit",
  price: 311_440_000,
  date: new Date(),
  status: "success",
}));

const TransactionsTable = ({ simple = false }: TransactionsTableProps) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  if (simple)
    return (
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
    );
};

export default TransactionsTable;
