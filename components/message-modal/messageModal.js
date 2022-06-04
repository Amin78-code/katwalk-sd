import React from "react";
import Image from "next/image";
import styles from "./messageModal.module.css";
import { FiCheckCircle } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import productImg1 from "../../assets/images/products/orange-1/img3.jpg";
import { FiLock } from "react-icons/fi";
import Link from "next/link";

function MessageModal({
  purpose,
  closeItemAdded,
  proceedToCheckout,
  closeProceedToCheckout,
}) {
  console.log("purpose", purpose);
  return (
    <>
      {purpose == "item-added" ? (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-[100%] h-[100%] z-[30] flex justify-center items-center">
          <div className="w-[625px] bg-[#fff] py-[20px] px-[25px] rounded-[7px] drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] border-[#aaa] border-[1px]">
            <IoCloseOutline
              className="absolute text-[25px] right-[17px] top-[20px] z-[25]"
              onClick={() => closeItemAdded()}
            />
            <div className="text-center pt-[5px]">
              <FiCheckCircle className="text-[#C53C19] text-[35px] mx-auto" />
              <p className="fwr text-[20px] text-[#C53C19] tracking-[0.5px]">
                Item added to cart!
              </p>

              <div className="flex items-center pt-[30px] pb-[10px]">
                <div className="w-[100px] h-[100px]">
                  <span className="image_container">
                    <Image src={productImg1} alt="image" />
                  </span>
                </div>
                <div className="text-left pl-[15px]">
                  <h6 className="fwr text-[18px] text-[#1b1b28] pb-[17px]">
                    Crinkled Abaya with Printed Pattern
                  </h6>
                  <p className="text-[#1b1b28] text-[13px]">
                    Price:
                    <span className="fwr text-[#e62e04] pl-[30px] text-[13px]">
                      SAR 760
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between gap-x-[5px]">
                <button
                  className="color-change-btn taPoint3 relative ffr overflow-hidden h-[40px] text-[14px] w-full text-[#fff] uppercase bg-[#111723] mt-[20px]"
                  onClick={() => closeItemAdded()}
                >
                  <span className="relative z-[5]">back to shopping</span>
                </button>
                <button
                  className="color-change-btn taPoint3 relative ffr overflow-hidden h-[40px] text-[14px] w-full text-[#fff] uppercase bg-[#111723] mt-[20px]"
                  onClick={() => proceedToCheckout()}
                >
                  <span className="relative z-[5]">proceed to checkout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {purpose == "secure-checkout" ? (
        <div className="fixed top-0 left-0 bottom-0 right-0 w-[100%] h-[100%] z-[30] flex justify-center items-center">
          <div className="w-[625px] bg-[#fff] py-[20px] px-[25px] rounded-[7px] drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] border-[#aaa] border-[1px]">
            {" "}
            <IoCloseOutline
              className="absolute text-[25px] right-[17px] top-[20px] z-[25]"
              onClick={() => closeProceedToCheckout()}
            />
            <div className="text-center pt-[5px]">
              <p className="fwr text-[20px] text-[#1b1b28] tracking-[0.5px] flex justify-center items-center">
                <FiLock className="text-[#1b1b28] text-[20px] pr-[5px]" />
                Secure Checkout
              </p>

              <div className="flex justify-between gap-x-[5px] mt-[15px]">
                <Link href="/users/login">
                  <button className="color-change-btn taPoint3 relative ffr overflow-hidden h-[40px] text-[14px] w-full text-[#fff] uppercase bg-[#111723] mt-[20px]">
                    <span className="relative z-[5]">returning customer</span>
                  </button>
                </Link>
                <Link href="/checkout">
                  <button className="color-change-btn taPoint3 relative ffr overflow-hidden h-[40px] text-[14px] w-full text-[#fff] uppercase bg-[#111723] mt-[20px]">
                    <span className="relative z-[5]">checkout as a guest</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default MessageModal;
