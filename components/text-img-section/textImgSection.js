import React from "react";
import Image from "next/image";
import katwalkBag from "../../assets/images/designers/katwalk-bag.jpg";
import styles from "./textImgSection.module.css";
import allIcons from "../../assets/images/icons/all-icons.svg";
import ImgLazyLoad from "../img-lazy-load/img-lazy-load";

function TextImgSection({ data }) {
  return (
    <>
      <section className="pt-[30px]     sm:pt-[50px]">
        <div className="container flex justify-start pb-[50px] px-[0]      lg:px-[20px]">
          <div className="w-[100%] pr-[20px]      lg:w-[44%]">
            <h2 className="fahkwang-light text-[#231F20] text-[22px] leading-[1.1] capitalize pb-[5px] mb-[10px]     sm:text-[28px] sm:uppercase">
              {data.title}
            </h2>
            <p className="work-regular text-[16px] leading-[1.5] mb-[24px]">
              {data.text}
            </p>
          </div>
        </div>
        <div className="w-[100%]">
          <span className="image_container">
            {/* <Image src={data.img} alt="image" /> */}
            <ImgLazyLoad src={data.img} alt={"image"} classes={""} />
          </span>
        </div>
      </section>
    </>
  );
}

export default TextImgSection;
