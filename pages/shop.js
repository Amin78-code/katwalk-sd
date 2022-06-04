import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import ShopByCategory from "../components/shop-by-category/shopByCategory";
import TextImgSection from "../components/text-img-section/textImgSection";
import productImg1 from "../assets/images/products/orange-1/img3.jpg";
import productImg2 from "../assets/images/products/product2.jpg";
import productImg3 from "../assets/images/products/product3.jpg";
import productImg4 from "../assets/images/products/product4.jpg";
import img1 from "../assets/images/products/orange-1/img1.jpg";
import img2 from "../assets/images/products/orange-1/img2.jpg";
import img3 from "../assets/images/products/orange-1/img3.jpg";
import img4 from "../assets/images/products/orange-1/img4.jpg";
import styles from "../components/shop.module.css";
import Features from "../components/features/features";
import ColorBox from "../components/color-box/colorBox";
import OtherProducts from "../components/other-products/otherProducts";
import ProductSlider from "../components/product-slider/product-slider";
import HeadingAndText from "../components/heading-and-text/headingAndText";
import SizeGuideModal from "../components/size-guide-modal/SizeGuideModal";
import MessageModal from "../components/message-modal/messageModal";
import ShopFilters from "../components/shop-filters/shopFilters";
import ProductCard from "../components/product-card/productCard";
import MessageBox from "../components/message-box/messageBox";
import Link from "next/link";

const otherProducts = [
  {
    img: productImg1,
    companyName: "Nada Line",
    productName: "Metallic Print Abaya",
    price: "760",
  },
  {
    img: productImg2,
    companyName: "Nada Line",
    productName: "Black Beaded Embroidery Abaya",
    price: "1.125",
  },
  {
    img: productImg3,
    companyName: "Nada Line",
    productName: "Crinkled Abaya with Printed Pattern",
    price: "760",
  },
  {
    img: productImg4,
    companyName: "Nada Line",
    productName: "Color Block Crinkled Abaya",
    price: "760",
  },
  {
    img: productImg2,
    companyName: "Nada Line",
    productName: "Black Beaded Embroidery Abaya",
    price: "1.125",
  },
  {
    img: productImg3,
    companyName: "Nada Line",
    productName: "Crinkled Abaya with Printed Pattern",
    price: "760",
  },
  {
    img: productImg1,
    companyName: "Nada Line",
    productName: "Metallic Print Abaya",
    price: "760",
  },
  {
    img: productImg2,
    companyName: "Nada Line",
    productName: "Black Beaded Embroidery Abaya",
    price: "1.125",
  },
];
function Shop() {
 
  return (
    <>
      <Layout>
        <div className="w-[100%] mt-[80px]">
          <ShopFilters />
        </div>
        <div className="flex mb-[60px] justify-between flex-wrap px-[0px]      sm:px-[10px] md:px-0">
          {otherProducts.map((value, index) => {
            return <ProductCard key={index} data={value} newTag={"none"} />;
          })}
        </div>
      </Layout>
    </>
  );
}

export default Shop;
