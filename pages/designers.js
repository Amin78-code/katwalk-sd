import React, { useState, useRef } from "react";
import Image from "next/image";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import ShopByCategory from "../components/shop-by-category/shopByCategory";
import TextImgSection from "../components/text-img-section/textImgSection";
import productImg1 from "../assets/images/products/orange-1/img3.jpg";
import productImg2 from "../assets/images/products/product2.jpg";
import productImg3 from "../assets/images/products/product3.jpg";
import productImg4 from "../assets/images/products/product4.jpg";

import Eight from "../assets/images/designers/eight.jpg";
import FourteenTen from "../assets/images/designers/fourteen-ten.jpg";
import NadaLine from "../assets/images/designers/nada-line.jpg";
import ZahraLine from "../assets/images/designers/zahra-line.jpg";
import WalaaKazem from "../assets/images/designers/walaa-kazem.jpg";
import KafByKaf from "../assets/images/designers/kaf-by-kaf.jpg";
import FouzCouture from "../assets/images/designers/fouz-couture.jpg";
import Gmash from "../assets/images/designers/gmash.jpg";
import Nakhlah from "../assets/images/designers/nakhlah.jpg";
import Clue from "../assets/images/designers/clue.jpg";
import Maliha from "../assets/images/designers/maliha.jpg";
import RawMestika from "../assets/images/designers/raw-mestika.jpg";
import EstiloDesigns from "../assets/images/designers/estilo-designs.jpg";
import MunaMattar from "../assets/images/designers/muna-mattar.jpg";

import img1 from "../assets/images/products/orange-1/img1.jpg";
import img2 from "../assets/images/products/orange-1/img2.jpg";
import img3 from "../assets/images/products/orange-1/img3.jpg";
import img4 from "../assets/images/products/orange-1/img4.jpg";
import styles from "../components/designers.module.css";
import Features from "../components/features/features";
import ColorBox from "../components/color-box/colorBox";
import OtherProducts from "../components/other-products/otherProducts";
import ProductSlider from "../components/product-slider/product-slider";
import HeadingAndText from "../components/heading-and-text/headingAndText";
import SizeGuideModal from "../components/size-guide-modal/SizeGuideModal";
import MessageModal from "../components/message-modal/messageModal";
import ShopFilters from "../components/shop-filters/shopFilters";
import ProductCard from "../components/product-card/productCard";
import Link from "next/link";
import ImgLazyLoad from "../components/img-lazy-load/img-lazy-load";

function Designers() {
  const designers = [
    {
      name: "Eight",
      image: Eight,
    },
    {
      name: "Fourteen Ten",
      image: FourteenTen,
    },
    {
      name: "Nada Line",
      image: NadaLine,
    },
    {
      name: "Zahra Line",
      image: ZahraLine,
    },
    {
      name: "Walaa Kazem",
      image: WalaaKazem,
    },
    {
      name: "Kaf By Kaf",
      image: KafByKaf,
    },
    {
      name: "Fouz Couture",
      image: FouzCouture,
    },
    {
      name: "Gmash",
      image: Gmash,
    },
    {
      name: "Nakhlah",
      image: Nakhlah,
    },
    {
      name: "Clue",
      image: Clue,
    },
    {
      name: "Maliha",
      image: Maliha,
    },
    {
      name: "Raw Mestika",
      image: RawMestika,
    },
    {
      name: "Estilo Designs",
      image: EstiloDesigns,
    },
    {
      name: "Muna Mattar",
      image: MunaMattar,
    },
  ];

  return (
    <>
      <Layout>
        <div className="w-[100%] max-w-[1600px] mx-auto mt-[80px] px-[3%]     sm:mt-[10px]">
          <div className="flex flex-wrap justify-center gap-x-[20px] flex-col pb-[0px]      sm:flex-row sm:pb-[50px]">
            {designers.map((value, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={`${styles.designer_card} designer-card mt-[20px] mb-[20px]      md:mt-[90px]`}
                  >
                    <Link href="/shop/designer">
                      <a>
                        <div className="w-[100%] h-[100%] mb-[20px]">
                          {/* <Image src={value.image} alt="image" /> */}
                          <ImgLazyLoad src={value.image} alt={"image"} classes={""} />
                        </div>
                        <p className="fwr text-[#000] text-[18px] mb-[10px]">
                          {value.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Designers;
