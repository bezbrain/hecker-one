"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const PageHeaderWrapper = () => {
  const pathname: keyof typeof headerContent = usePathname();

  const headerContent: { [key: string]: string } = {
    "/bio-record/staff-student": "Staff & Student data",
  };

  const subHeaderContent: { [key: string]: string } = {
    "/bio-record/staff-student": "Staff & Student data",
  };

  const content = headerContent[pathname] || "All data";
  const subContent = subHeaderContent[pathname] || "All Captured Data";

  return (
    <div>
      <div className="bg-[#14B8A6] p-4 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <h3 className="text-[16px] text-white">{content}</h3>
          <p className="text-[16px] text-[#FFE4E6]">Successfully captured</p>
        </div>

        <Button className="bg-white text-[#0D9488] font-[700] text-[16px] cursor-pointer">
          Capture Biometric
        </Button>
      </div>

      <div className="p-4 flex items-center justify-between">
        <h1 className="text-[30px] font-bold">{subContent}</h1>
        <Button className="bg-inherit border-[#52525B] border-[1px] cursor-pointer text-[#52525B] hover:bg-inherit">
          Import data
        </Button>
      </div>
    </div>
  );
};

export default PageHeaderWrapper;
