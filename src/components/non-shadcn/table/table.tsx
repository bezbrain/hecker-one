"use client";

import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import HashLoader from "react-spinners/HashLoader";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

import { Pagination } from "../pagination/Pagination";
import { EmptyData } from "../EmptyData";
import { TableProps } from "@/interface/utils.interface";
import styles from "./table.module.scss";

export const Table = <T extends object>({
  header,
  tableData,
  loading,
  pageCount,
  forcePage,
  onPageChange,
  errorMessage,
  onRowClick,
}: TableProps<T>) => {
  const columns = useMemo(() => header, [header]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useReactTable({
    data,
    //@ts-ignore
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
            {tableInstance.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
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
            {tableInstance.getRowModel().rows.map((row) => (
              <tr key={row.id} onClick={() => onRowClick?.(row?.original)}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
