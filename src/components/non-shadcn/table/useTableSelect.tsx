"use client";

import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import HashLoader from "react-spinners/HashLoader";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

import { Pagination } from "../pagination/Pagination";
import { Checkbox } from "../Checkbox";
import { EmptyData } from "../EmptyData";
import { TableProps } from "@/interface/utils.interface";
import styles from "./table.module.scss";

export const useTableSelect = <T extends object>({
  header,
  tableData,
  loading,
  pageCount,
  forcePage,
  onPageChange,
  onRowClick,
  errorMessage,
}: TableProps<T>) => {
  const columns = useMemo(() => [createSelectColumn(), ...header], [header]);
  const data = useMemo(() => tableData, [tableData]);

  const [rowSelection, setRowSelection] = useState({});

  const tableInstance = useReactTable({
    data,
    //@ts-ignore
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
  });

  const selectedRowID = tableInstance
    .getSelectedRowModel()
    .rows.map(({ original }: any) => original.id);

  const Table = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center w-full h-[25rem] border border-eke-grey-400 bg-white rounded-lg mt-8">
          <HashLoader
            color="#006634"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
          />
        </div>
      );
    }

    if (!loading && !data.length) {
      return <EmptyData message={errorMessage} />;
    }

    return (
      <div className="w-full overflow-auto">
        <div className={styles.tableCont}>
          <table>
            <thead>
              {tableInstance?.getHeaderGroups().map((headerGroup, i) => (
                <tr key={`${headerGroup.id}-${i}`}>
                  {headerGroup.headers.map((header, i) => (
                    <th key={`${header.id}-${i}`}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {tableInstance.getRowModel().rows.map((row, i) => (
                <tr
                  key={`${row.id}-${i}`}
                  onClick={() => onRowClick?.(row?.original)}
                >
                  {row.getVisibleCells().map((cell, i) => (
                    <td key={`${cell.id}-${i}`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {!data.length && (
            <div className="flex flex-col justify-center items-center h-[15rem] md:h-[25rem] bg-white gap-y-3">
              <HiOutlineExclamationTriangle
                className="w-12 h-12 text-black bg-white"
                aria-hidden="true"
              />
              <p className="text-13px font-medium">No data is available</p>
            </div>
          )}
        </div>

        {pageCount! > 1 && (
          <div className="rounded-b-lg py-4 bg-white px-[2.81rem]">
            <Pagination
              pageCount={pageCount!}
              handlePageChange={onPageChange}
              forcePage={forcePage}
            />
          </div>
        )}
      </div>
    );
  };

  return { Table, selectedRowID };
};

export function createSelectColumn<T>(): ColumnDef<T> {
  return {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        id="select-all"
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        id={`select-row-${row.id}`}
        checked={row.getIsSelected()}
        indeterminate={row.getIsSomeSelected()}
        onChange={row.getToggleSelectedHandler()}
        disabled={!row.getCanSelect()}
      />
    ),
  };
}
