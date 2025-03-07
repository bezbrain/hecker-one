import { ColumnDef } from "@tanstack/react-table";

export interface TableProps<T extends unknown> {
  header: ColumnDef<T, any>[];
  tableData: unknown[];
  loading?: boolean;
  pageCount?: number;
  forcePage?: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange?: (selected: number) => void;
  // eslint-disable-next-line no-unused-vars
  onRowClick?: (data: unknown) => void;
  errorMessage?: string;
}
