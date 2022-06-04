import React from "react";
import Image from "next/image";
import styles from "./TwoColTableWithHeading.module.css";

function TwoColTableWithHeading({ data, tableType }) {
  console.log("g2gh", data.headings.length);

  return (
    <>
      <table className="fwr w-[100%] text-[#212529] text-[13px] leading-[1.5] tracking-[0.5px]">
        <thead>
          <tr className={`border-b-[2px] border-[#dee2e6]`}>
            {data.headings.map((value, index) => {
              return (
                <td
                  key={value + 1}
                  className={`fwr p-[.75rem] text-center font-[600] capitalize ${
                    index == data.headings.length - 1 ? "text-right" : ""
                  }`}
                >
                  {value}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.data.map((value, index) => {
            return (
              <tr key={value + 1} className={`border-t-[1px] border-[#dee2e6]`}>
                {value.value.map((valu, inde) => {
                  return (
                    <td
                      key={valu + 1}
                      className={`align-top p-[.75rem] ${
                        inde == 1 ? "w-[30%]" : ""
                      }`}
                    >
                      {valu}
                    </td>
                  );
                })}
                {tableType && tableType == true ? (
                  <td className="p-[.75rem] flex gap-x-[5px] justify-end">
                    <button className="w-[34.1px] h-[34.1px] rounded-full bg-[#25bcf126] hover:bg-[#25bcf1] flex justify-center items-center"></button>
                    <button className="w-[34.1px] h-[34.1px] rounded-full bg-[#ef486a26] hover:bg-[#ef486a] flex justify-center items-center"></button>
                  </td>
                ) : (
                  ""
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TwoColTableWithHeading;
