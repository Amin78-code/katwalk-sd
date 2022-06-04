import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./SideBar.module.css";
import profileImg from "../../../../assets/images/icons/profile-img.png";

function SideBar({ active }) {
  return (
    <div className="w-[267px] h-[100%] rounded-[5px] shadow-md border-[1px] border-[#ebedf2]">
      <div className="flex flex-col justify-center items-center mb-[1.5rem]">
        <div className="w-[64px] h-[64px] rounded-full overflow-hidden mt-[16px] mb-[33px]">
          <span className="image_container">
            <Image src={profileImg} alt="image" />
          </span>
        </div>
        <h6 className="fwr text-[13px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] font-[600] flex items-center">
          Aliya Almusawi
          <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] ml-[12px]"></div>
        </h6>
      </div>

      <nav className={`${styles.nav} mb-[1rem]`}>
        <ul>
          <li>
            <Link href="/dashboard/home">
              <a
                className={`${
                  active == "Dashboard" ? styles.active : ""
                } fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/purchase_history">
              <a
                className={`${
                  active == "PurchaseHistory" ? styles.active : ""
                } fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
                purchase history
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/wishlists">
              <a
                className={`${
                  active == "Wishlists" ? styles.active : ""
                } fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
                wishlist
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/products">
              <a
                className={`${
                  active == "Products" ? styles.active : ""
                } fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
              >
                <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
                products
              </a>
            </Link>
          </li>
          <li>
            <a
              className={`fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
            >
              <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
              orders
            </a>
          </li>
          <li>
            <a
              className={`fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
            >
              <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
              create pickup
            </a>
          </li>
          <li>
            <a
              className={`fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
            >
              <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
              view pickup
            </a>
          </li>
          <li>
            <a
              className={`fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
            >
              <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
              money withdraw
            </a>
          </li>
          <li>
            <a
              className={`fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
            >
              <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
              shop setting
            </a>
          </li>
          <li>
            <a
              className={`fwr w-[100%] flex items-center h-[40px] text-[#63666b] text-[0.8125rem] tracking-[0.5px] capitalize border-[#fff] border-l-[3px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
            >
              <div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[5px]"></div>
              manage profile
            </a>
          </li>
        </ul>
      </nav>
      <a
        className={`ffr pink-btn w-[100%] h-[40px] block text-[#e62e04] text-[0.875rem] text-center uppercase bg-[#e62e0426] tracking-[0.5px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
      >
        logout
      </a>
      <hr className="h-[0] border-[#727272] border-0 border-b-[1px] shadow-sm my-[6px]" />
      <h6 className="fwr text-[13px] text-[#1b1b28] leading-[1.5] tracking-[0.5px] text-center my-[19px] font-[600]">
        Sold Amount
      </h6>
      <p className="fwr text-[0.75rem] text-center tracking-[0.5px] mb-[0.5rem]">
        Your sold amount (current month)
      </p>
      <button
        className={`maroon-btn ffr pink-btn w-[100%] h-[40px] block text-[0.875rem] text-[#fff] text-center uppercase bg-[#c83e27] tracking-[0.5px] taPoint3 py-[10px] px-[25px] cursor-pointer`}
      >
        SAR 0
      </button>
      <div className="pt-[1.5rem] pb-[2rem]">
        <table className="w-[100%]">
          <tbody className="fwr text-[13px] tracking-[0.5px]">
            <tr>
              <td className="text-center text-[#212529] p-[.25rem] w-[60%]">
                Total Sold:
              </td>
              <td className="font-[600] text-center">SAR 0</td>
            </tr>
            <tr>
              <td className="text-center text-[#212529] p-[.25rem] w-[60%]">
                Last Month Sold:
              </td>
              <td className="font-[600] text-center">SAR 0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SideBar;
