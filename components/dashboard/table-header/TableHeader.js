import React from "react";
import Image from "next/image";
import styles from "./TableHeader.module.css";

function TableHeader({ children }) {
  return (
    <>
      <div className="w-[100%] min-h-[50px] border-[#ebedf2] border-b-[1px] py-[27px] px-[25px]">
        <h5 className="fwb text-[13px] text-[#1b1b28] leading-[1.5] tracking-[0.5px]">
          {children}
        </h5>
      </div>
    </>
  );
}

export default TableHeader;
