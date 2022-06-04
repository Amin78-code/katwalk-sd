import React from "react";
import Image from "next/image";
import styles from "./HeadingBar.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

function HeadingBar({ heading, lightHeadingBar }) {
  return (
    <div className="bg-[ff0000]">
      {lightHeadingBar && lightHeadingBar == true ? (
        <h6 className="fwl text-[12px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] uppercase mt-[0.5rem] mb-[1.5rem] pt-[1px] pl-[1px]">
          {heading ? heading : ""}
        </h6>
      ) : (
        <h6 className="fwr text-[1rem] text-[#1b1b28] tracking-[0.5px] capitalize mt-[21px] mb-[38px]">
          {heading ? heading : ""}
        </h6>
      )}
    </div>
  );
}

export default HeadingBar;
