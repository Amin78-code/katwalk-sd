import React from "react";
import Image from "next/image";
import styles from "./WishListCard.module.css";
import TitleAndTableCard from "../../../components/dashboard/title-and-table-card/TitleAndTableCard";
import TableHeader from "../table-header/TableHeader";

function WishListCard({ data }) {
  return (
    <div className="w-[32.4%] mb-[0.5rem]">
      <TitleAndTableCard>
        <div className="py-[20px] px-[25px]">
          <span className="image_container">
            <Image src={data.img} alt="image" />
          </span>
          <div>
            <h5 className="fwr font-[600] text-[0.875rem] text-[#1b1b28] mt-[23px]">
              {data.name}
            </h5>
            <p className="fwr font-[600] text-[0.875rem] text-[#c53a19]">
              SAR {data.price}
            </p>
          </div>
        </div>
        <div className="py-[12px] px-[25px] border-t-[1px] border-[#ebedf2]">
          <button className="w-[100%] block light-brown-btn ffr text-[0.875rem] text-[#fff] leading-[40px] tracking-[0.5px] uppercase bg-[#c83e27] px-[15px] mx-auto">
            remove
          </button>
        </div>
      </TitleAndTableCard>
    </div>
  );
}

export default WishListCard;
