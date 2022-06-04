import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./messageBox.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

function MessageBox({ message }) {
  return (
    <>
      <div className="w-[100%] min-w-[350px] max-w-[350px] h-[60px] bg-[#ffc519] fixed top-[20px] right-[30px] z-[20] rounded-[0.25rem] flex items-center p-[1.25rem] drop-shadow-[0_5px_20px_rgba(35,45,58,0.2)] hidde n translate-y-[70px] show-message-box">
        <p className="fwr text-[14px] text-[#fff]">
          {message ? message : "Please login first"}
        </p>
      </div>
    </>
  );
}

export default MessageBox;
