import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./headingAndText.module.css";
import heroImage from "../../assets/images/hero-image.jpg";
import { data } from "autoprefixer";

function HeadingAndText({ data }) {
  return (
    <>
      <h3 className="work-regular text-[20px] pt-[20px] mt-[16px]">
        {data.title}
      </h3>
      {data.content ? (
        <>
          {data.content.map((valu, inde) => {
            return (
              <div key={inde}>
                {valu.type == "paragraph" ? (
                  <>
                    {valu.text ? (
                      <>
                        {valu.text.map((val, ind) => {
                          return (
                            <p key={ind} className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] pt-[15px]">
                              {val}
                            </p>
                          );
                        })}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <>
                    {valu.type == "bulletList" ? (
                      <ul className="list-disc ml-[15px] mt-[15px]">
                        {valu.text ? (
                          <>
                            {valu.text.map((val, ind) => {
                              return (
                                <li
                                  key={val}
                                  className="work-light text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px]"
                                >
                                  {val}
                                </li>
                              );
                            })}
                          </>
                        ) : (
                          ""
                        )}
                      </ul>
                    ) : (
                      <>
                        {valu.type == "paragraph_sm" ? (
                          <>
                            {valu.text ? (
                              <>
                                {valu.text.map((val, ind) => {
                                  return (
                                    <p
                                      key={val}
                                      className="work-regular text-[#6b6e73] text-[13px] leading-[1.5] pt-[15px]"
                                    >
                                      {valu.text}
                                    </p>
                                  );
                                })}
                              </>
                            ) : (
                              ""
                            )}
                          </>
                        ) : (
                          <>
                            {valu.type == "table" ? (
                              <>
                                {valu.tableHead ? (
                                  <>
                                    <table className="my-[15px] w-[100%]">
                                      <thead>
                                        {valu.tableHead.map((val, ind) => {
                                          return (
                                            <td
                                              key={ind}
                                              className="work-regular text-[13px] border-[#fbf1e8] border-t-[1px] border-b-[1px] text-center py-[16px] px-[10px]"
                                            >
                                              {val}
                                            </td>
                                          );
                                        })}
                                      </thead>
                                      <thead>
                                        {valu.tableBody ? (
                                          <>
                                            {valu.tableBody.map((v, i) => {
                                              return (
                                                <tr key={i} className="">
                                                  {v.rowData.map(
                                                    (value_a, index_a) => {
                                                      return (
                                                        <td
                                                          key={index_a}
                                                          className="work-regular text-[13px] border-[#fbf1e8] border-t-[1px] border-b-[1px] text-center py-[16px] px-[10px]"
                                                        >
                                                          {value_a}
                                                        </td>
                                                      );
                                                    }
                                                  )}
                                                </tr>
                                              );
                                            })}
                                          </>
                                        ) : (
                                          ""
                                        )}
                                      </thead>
                                    </table>
                                  </>
                                ) : (
                                  ""
                                )}
                              </>
                            ) : (
                              <>
                                {valu.type == "anchor" ? (
                                  <>
                                    {valu.text ? (
                                      <a
                                        href="#"
                                        className="work-regular text-[13px] mt-[15px] block"
                                      >
                                        {valu.text}
                                      </a>
                                    ) : (
                                      ""
                                    )}
                                  </>
                                ) : (
                                  ""
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
      {/* <p className="work-regular text-[#6b6e73] text-[15px] leading-[28px] tracking-[0.5px] py-[15px]">
       ffffff
      </p> */}
    </>
  );
}

export default HeadingAndText;
