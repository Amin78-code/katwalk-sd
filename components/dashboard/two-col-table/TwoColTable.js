import React from "react";
import Image from "next/image";
import styles from "./TwoColTable.module.css";

function TwoColTable({ data }) {
  return (
    <>
      <table className="fwr w-[100%] text-[#212529] text-[13px] leading-[1.5] tracking-[0.5px]">
        <tbody>
          {data.map((value) => {
            return (
              <tr key={value + 1} className={`border-t-[1px] border-[#dee2e6]`}>
                <td className="p-[.75rem]">{value.title}</td>
                <td className="p-[.75rem]">{value.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TwoColTable;
