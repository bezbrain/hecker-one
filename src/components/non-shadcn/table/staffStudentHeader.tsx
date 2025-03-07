// import {
//   useProductContext,
//   useUpdateProductContext,
//   useVariantContext,
// } from "@/contexts";
// import { Product } from "@/interface";
// import { _formatNumber, nairaSymbol } from "@/utils";
import { createColumnHelper } from "@tanstack/react-table";
import { FaEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi2";

const columnHelper = createColumnHelper<any>();

export const StaffStudentTableHeader = [
  columnHelper.accessor("id", {
    header: "S/N",
    cell: (props) => {
      const id = (props.getValue() as string) || undefined;
      return (
        <div className="flex gap-x-3">
          <p className="capitalize">{id || "N/A"}</p>
        </div>
      );
    },
  }),
  columnHelper.accessor("matricNumber", {
    header: "MATRIC NO.",
    cell: (props) => {
      const matricNumber = (props.getValue() as string) || undefined;
      return <p className="flex">{matricNumber || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("lastName", {
    header: "LAST NAME",
    cell: (props) => {
      const lastName = (props.getValue() as string) || undefined;
      return <p className="flex">{lastName || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("firstName", {
    header: "FIRST NAME",
    cell: (props) => {
      const firstName = (props.getValue() as string) || undefined;
      return <p className="">{firstName || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("middleName", {
    header: "MIDDLE NAME",
    cell: (props) => {
      const middleName = (props.getValue() as string) || undefined;
      return <p className="">{middleName || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("biometricStatus", {
    header: "BIOMETRIC STATUS",
    cell: (props) => {
      const biometricStatus = (props.getValue() as string) || undefined;
      return <p className="">{biometricStatus || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("gender", {
    header: "GENDER",
    cell: (props) => {
      const gender = (props.getValue() as string) || undefined;
      return <p className="">{gender || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("modeOfEntry", {
    header: "MODE OF ENTRY",
    cell: (props) => {
      const modeOfEntry = (props.getValue() as string) || undefined;
      return <p className="">{modeOfEntry || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("currentProgramme", {
    header: "CURRENT PROGRAMME",
    cell: (props) => {
      const currentProgramme = (props.getValue() as string) || undefined;
      return <p className="">{currentProgramme || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("year", {
    header: "YEAR",
    cell: (props) => {
      const year = (props.getValue() as string) || undefined;
      return <p className="">{year || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("entryYear", {
    header: "ENTRY YEAR",
    cell: (props) => {
      const entryYear = (props.getValue() as string) || undefined;
      return <p className="">{entryYear || "N/A"}</p>;
    },
  }),
];
