import React, { ReactNode } from "react";
import PageHeaderWrapper from "@/components/non-shadcn/pageHeaderWrapper";

const BioRecordWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <PageHeaderWrapper />

      <div className="px-4">{children}</div>
    </section>
  );
};

export default BioRecordWrapper;
