import React from "react";
import Image from "next/image";
import styles from "./BottomShadowCard.module.css";

function BottomShadowCard({ children, width }) {
  return (
    <>
      <div
        className={`${
          width ? width : ""
        } rounded-[.25rem] bg-[#fff] p-[1.5rem] drop-shadow-[0_.5rem_.5rem_rgba(0,0,0,0.15)]`}
      >
        {children}
      </div>
    </>
  );
}

export default BottomShadowCard;
