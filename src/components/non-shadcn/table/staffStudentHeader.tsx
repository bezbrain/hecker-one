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
  columnHelper.accessor("name", {
    header: "Variant Name",
    cell: (props) => {
      const variantName = (props.getValue() as string) || undefined;
      return (
        <div className="flex gap-x-3">
          <p className="capitalize">{variantName || "N/A"}</p>
        </div>
      );
    },
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (props) => {
      //   const price = (props.getValue() as string) || undefined;
      return (
        <p className="flex">
          200
          {/* {price ? `${nairaSymbol}${_formatNumber(price)}` : "N/A"} */}
        </p>
      );
    },
  }),
  columnHelper.accessor("count", {
    header: "Count",
    cell: (props) => {
      const count = (props.getValue() as string) || undefined;
      return <p className="flex">{count || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("available_count", {
    header: "Available count",
    cell: (props) => {
      const availableCount = (props.getValue() as string) || undefined;
      return <p className="capitalize flex">{availableCount || "N/A"}</p>;
    },
  }),
  columnHelper.accessor("id", {
    header: "",
    id: "actions",
    cell: function Cell(props) {
      //   const { isVariant, setIsVariant } = useProductContext();
      //   const { handleVariantEdit } = useVariantContext();
      //   const id = props.getValue() as string | number;

      //   const handleRemoveVariant = () => {
      //     const updatedVariant = isVariant.filter((variant) => variant.id !== id);
      //     setIsVariant(updatedVariant);
      //   };

      return (
        <div className="flex space-x-4">
          <button className="pr-4">
            <FaEdit
              className="text-xl text-yellow-500"
              //   onClick={() => handleVariantEdit(id)}
            />
          </button>
          <button className="pr-4">
            <HiOutlineTrash
              className="text-xl text-red-700"
              //   onClick={handleRemoveVariant}
            />
          </button>
        </div>
      );
    },
  }),
];
