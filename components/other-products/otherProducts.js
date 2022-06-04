import React from "react";
import Image from "next/image";
import logoSquare from "../../assets/images/logo/logo-square.png";
import vat from "../../assets/images/logo/vat.png";
import styles from "./otherProducts.module.css";
import heroImage from "../../assets/images/hero-image.jpg";
import productImg from "../../assets/images/products/product2.jpg";
import { data } from "autoprefixer";
import ProductCard from "../product-card/productCard";

function OtherProducts({data}) {
  return (
    <>
      <div className="w[100%] pt-[30px]">
        <h4 className="fwl text-[20px] color-[#1b1b28] text-center leading-[1.5] tracking-[0.5px] mt-[20px] mb-[20px]">
          You may also like
        </h4>

        <div className="flex gap-x-[2px] mb-[60px] justify-center flex-wrap      sm:flex-nowrap">
          {data.map((value, index) => {
            return (
              <ProductCard key={index} data={value} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OtherProducts;
