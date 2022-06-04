import React from "react";
import Image from "next/image";
import styles from "./CardBody.module.css";

function CardBody({ children, broad, simple, p }) {
  //  const {t,r,b,l}= p
  //   const pt= "pt-["+ t+ "px]";
  //   const pr= "pr-["+ r+ "px]";
  //   const pb= "pb-["+ l+ "px]";
  //   const pl= "pl-["+ b+ "px]";
  return (
    <>
      <div
        className={`w-[100%] ${
          broad && broad == true ? "p-[50px]" : simple && simple == true ? "p-[25px]"  : "py-[20px] px-[25px]"
        } `}
      >
        {children}
      </div>
    </>
  );
}

export default CardBody;
