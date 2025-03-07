"use client";

import React from "react";
import { useTableSelect } from "@/components/non-shadcn/table/useTableSelect";
import { StaffStudentTableHeader } from "@/components/non-shadcn/table/staffStudentHeader";

const StaffAndStudent = () => {
  const { Table } = useTableSelect({
    tableData: [],
    header: StaffStudentTableHeader,
  });

  return (
    <div>
      <Table />
    </div>
  );
};

export default StaffAndStudent;
